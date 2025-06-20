---
title: Docker images for consistent, persistent SSH sessions
date: Git Created
description: Devcontainer-ish
tags: 
 - post
 - tools
 - development
---
I've finally got around to setting up a personal Docker image for my personal development environment. Interestingly, I thought it'd be substantially more effort than it
ended up being. I've briefly tried to do this several years ago and did not love the experience. The largest breakthrough was integrating proper dotfiles management via
[YADM](https://yadm.io/) and correctly setting configurations up in different OS environments.

The Dockerfile is surprisingly short:
```dockerfile
FROM archlinux:multilib-devel AS unfetched 
RUN pacman -Syu --noconfirm git cargo inetutils zsh 
ARG username
RUN useradd -m -G wheel -s /bin/zsh $username \
    && echo "$username ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers 
USER $username
WORKDIR /home/$username
RUN cd /tmp \
   && git clone https://aur.archlinux.org/paru.git \
   && cd paru \
   && makepkg -si --noconfirm 
RUN paru -S --noconfirm \
   neovim \
   yadm \
   fzf \
   ripgrep \
   fd \
   bat \
   htop \
   uv \
   jujutsu \
   neovim-remote \
   tailscale \
   openssh \
   luarocks \
   nvidia-open \
   gosu
RUN uv tool install llm 
RUN mkdir -p -m 700 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts 
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
   "" --unattended 
RUN git clone https://github.com/zsh-users/zsh-autosuggestions \
   ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions 
COPY <<EOF ./entrypoint.sh
#!/bin/bash

yadm clone git@github.com:<dotfiles-repo>.git && yadm alt && yadm checkout -- ~/
exec zsh
EOF
ENTRYPOINT ["/bin/bash", "./entrypoint.sh"]

FROM unfetched AS prefetched
RUN --mount=type=ssh,uid=1000 yadm clone git@github.com:<dotfiles-repo>.git \
   && yadm alt \
   && yadm checkout -- ~/ 
ENTRYPOINT ["/bin/zsh"]
```

Based of off Arch Linux, this replicates my Linux desktop experience, with all my development tools and configurations. This approach uses SSH agent forwarding to handle
authentication for both updating dotfiles when starting the container and for interacting with repos and the like during development. Sometimes, I've had issues with
cloud providers having weird virtualization that affects SSH agent forwarding into the container. For those settings (or more generally, ones where I can't or don't need
SSH), I have a prefetched image that bakes in the dotfiles. 

I tend to use a command like this to mount my server's working home directory in the container (NVIDIA runtime optional). 
```bash
docker run --rm -it \
   --platform linux/amd64 \
   --runtime=nvidia \
   --mount type=bind,src=$SSH_AUTH_SOCK,dst=/agent.sock \
   -e SSH_AUTH_SOCK=/agent.sock \
   --mount type=bind,src=$HOME/,dst=/home/<username>/host-dir \
   <image>
```

A great workflow has been to detach from the container once I've launched a long-lived data job or training run and follow logs via `docker logs <container id>`. I can
safely handle disconnecting from the instance while also having all my preferred configuration and tooling. 
