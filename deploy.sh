#!/bin/bash
set -eo pipefail

echo -e "\033[0;32mGenerating site...\033[0m"
deno task build

echo -e "\033[0;32mChecking out branch...\033[0m"
git worktree add public master

cp -R site/* public/

echo -e "\033[0;32mDeploying branch...\033[0m"
cd public &&
    git add --all &&
    git commit -m "$(date) - updating site" &&
    git push origin master
cd ..

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove public

echo -e "\033[0;32mUpdating source...\033[0m"
git add --all
git commit -m "$(date) - updating source"
git push origin source
