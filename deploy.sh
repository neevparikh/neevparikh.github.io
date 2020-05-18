#!/usr/bin/env bash
hugo
git add public/
git commit -m "$(date) - updating site"
git subtree push --prefix public https://github.com/neevparikh/neevparikh.github.io master
