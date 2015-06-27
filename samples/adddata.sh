#!/bin/bash

mongoimport --db acm --collection officers --drop --file officers.json
mongoimport --db acm --collection events --drop --file events.json
mongoimport --db acm --collection articles --drop --file articles.json
mongoimport --db acm --collection members --drop --file members.json
mongoimport --db acm --collection projects --drop --file projects.json
mongoimport --db acm --collection jobs --drop --file jobs.json
mongoimport --db acm --collection companies --drop --file companies.json
mongoimport --db acm --collection prototypes --drop --file prototypes.json

