# Trello

## This is the back side of a trello web application

It was made with : 
  - Node.js
  - express
  - Sequelize
  - Postgresql  

####  This API is working like an usual one.
You will find lists, cards and tags.
There are some documents in the repository /docs  in order to understand what you can really do with this app:

  - MCD
  - MLD
  - Users stories
  - Roads

  ### In order to test it with POSTMAN for example, follow these steps
  - ```npm i``` : install all dependencies
  - have postgres installed on your system  
  - Create a role & database in postgress & configure .env using the .env.example
  - 1$  ``` sudo -i -u postgres```
  - 2$ ``` psql```
  - 3 ``` CREATE ROLE trello WITH LOGIN PASSWORD 'trello';```
  - 4 ``` CREATE DATABASE trello OWNER trello; ```
  - 5$ ``` psql -d trello -U trello -f ./data/create_db.sql```
  - 6$ Create & write``` PG_URL=postgresql://trello:trello@localhost:5432/trello``` in .env
  - And finally $ ``` node index.js```
  - Your API will run on ```http://localhost:3000```

  


