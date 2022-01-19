#!/usr/bin/env bash

cd dist
cp -r ../BACKEND/* .
cp -r ../BACKEND/.htaccess .
heroku git:remote -a projet-friedrich-louis
git add .
git commit -m "commit"
git push heroku master --force