---
title: Pi, the Neovim of coding scaffolds
date: 2026-04-28
description: Pi is what I've been looking for
draft: false
tags:
 - post
 - ai
 - coding assistants
 - pi
---

I've been using [Neovim](https://neovim.io/) since college. I love the extreme customizability, the efficiency of using only a keyboard, and being able to write configurations in Lua. [pi](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent) is that for coding scaffolds. I started with Claude Code but quickly grew frustrated with the limited vim-mode (though, I am immensely grateful that it was there in the first place and deeply upset when I realized Codex doesn't have one), the lack of visibility into what exactly went into the context and the frequent, often show-stopping, [bugs](https://www.anthropic.com/engineering/april-23-postmortem).

Pi is modularly designed, written in Typescript, and designed to be mucked around with. I quickly was able to spin up a sophisticated vim mode ([pi-vim](https://github.com/neevparikh/pi-vim#)), a subagents extension ([pi-subagent](https://github.com/neevparikh/pi-subagent)) and an OAuth provider ([pi-hawk](https://github.com/neevparikh/pi-hawk-provider)) for Okta, which is what we use at METR for internal proxies. The SDK is really convenient to design against, especially when you want a unified interface with multi-provider AI company backends. The ethos is simplicity, extensibility, and meticulous context management, and eschews things like plan or team mode (just talk to the model).

It's well-maintained, frequently updated, and the developer is [delightfully curmudgeonly](https://x.com/badlogicgames/status/2036801820626952269) (meant with all the respect in the world and in the best way). Go try it out!
