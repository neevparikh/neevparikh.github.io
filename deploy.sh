#!/bin/bash
set -eo pipefail

echo -e "\033[0;32mGenerating site...\033[0m"
npx @tailwindcss/cli --input ./site/app.css --output ./site/styles.css

echo -e "\033[0;32mChecking out branch...\033[0m"
git worktree add public master

cp site/*.html public/
cp -r site/assets/ public/assets/
cp site/styles.css public/

echo -e "\033[0;32mDeploying branch...\033[0m"
cd public &&
    git add --all &&
    git commit -m "$(date) - updating site" &&
    git push origin master --force
cd ..

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove public

echo -e "\033[0;32mUpdating source...\033[0m"
git add --all
git commit -m "$(date) - updating source"
git push origin source
