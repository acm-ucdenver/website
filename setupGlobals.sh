#!/bin/bash

# a one-time installer of global dependencies

UNAME=$(uname -s)

if [ $UNAME == "Darwin" ]; then
	echo 'Installing Homebrew Package Manager'
	sudo ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

	echo 'Installing git'
	sudo brew install git

	echo 'Installing Node.js'
	sudo brew install node

	echo 'Installing NPM'
	sudo brew install npm

	echo 'Installing MongoDB'
	sudo brew install mongodb


else [ $UNAME == "Linux" ]
	echo 'Installing git'
	sudo apt-get install git

	echo 'Installing Node.js'
	sudo apt-get install nodejs-legacy

	echo 'Installing NPM'
	sudo apt-get install npm

	echo 'Installing MongoDB'
	sudo apt-get install mongodb

fi

echo 'Installing Karma'
sudo npm install karma -g

echo 'Installing Protractor'
sudo npm install protractor -g

echo 'Installing Bower'
sudo npm install bower -g

echo 'Updating Selenium Webserver'
sudo webdriver-manager update