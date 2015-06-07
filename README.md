# website
ACM UCDenver Chapter Website

this project is described here:
  https://github.com/amc-ucdenver/website/wiki/Project-Statement

not sure where to start?
  https://github.com/amc-ucdenver/website/wiki/Getting-Started

##instructions

* clone this repository

```
    git clone https://github.com/amc-ucdenver/website.git
```
* if it's your first time, run the setupGlobals.sh script (installs global dependencies)

```
    bash setupGlobals.sh # on mac
```
* run the setupComponents.sh script (installs package dependencies within the site directories)

```
    bash setupComponents.sh # on mac
```
* get mongo running

```
    cd /
    mkdir -p data/db
    mongod # leave running in it's own console
```
* run the startExpressServer.sh script

```
    bash startExpressServer.sh # leave running in it's own console
```
* open a browser and connect to the site

```
    http://localhost:3000
```
* welcome!
