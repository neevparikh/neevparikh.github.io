#!/usr/bin/env bash
hugo
git add public/
git add --all
git commit -m "$(date) - updating site"
git subtree pull --prefix public https://github.com/neevparikh/neevparikh.github.io master --squash
git subtree push --prefix public https://github.com/neevparikh/neevparikh.github.io master
