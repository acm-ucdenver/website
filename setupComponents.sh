#!/bin/bash

# required to run each time you are working with a new clone of the site
# should not require admin / super user role
# on linux, you can run this command to fix if npm doesn't have the correct permissions:
# sudo chown -R $(whoami) ~/.npm

echo 'Installing node test packages'
cd test
npm install
cd ..

echo 'Installing node project packages'
cd src
npm install

echo 'Installing web framework packages'
cd ..
bower install
