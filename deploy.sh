#!/usr/bin/env bash

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf public

echo -e "\033[0;32mChecking out branch...\033[0m"
git worktree add public master

echo -e "\033[0;32mGenerating site...\033[0m"
hugo

echo -e "\033[0;32mDeploying branch...\033[0m"
cd public &&
    git add --all &&
    git commit -m "$(date) - updating site" &&
    git push origin master --force

echo -e "\033[0;32mUpdating source...\033[0m"
git push origin source

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove public
