#!/bin/bash

echo "Start"

rm -rf ./build

npm run build
 
echo "Build done"

rm -rf ./betareader

git clone https://github.com/VictorTrapenok/betareader.git -b gh-pages

mv ./betareader/.git ./build/.git
rm -rf ./betareader
cd build
echo "betareader.app" > CNAME
git add .
git commit -m "Deploy"
git push

rm -rf ./build
echo "Deploy done"
