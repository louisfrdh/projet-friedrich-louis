#!/usr/bin/env bash

cd dist/tp
cp -r ../../../BACKEND/api .
cp ../../../BACKEND/composer* .
cp ../../../BACKEND/.htaccess .
heroku git:remote -a projet-friedrich-louis
git add .
git commit -m "commit"
git push heroku master --force