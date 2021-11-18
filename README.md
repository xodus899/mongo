# Connecting to mongo with mongoose

  To run locally:
   - Install mongo (npm install mongodb)
   - Install mongoose (npm install mongoose)
   
   
   In your console run:
    - mongod to start server
    - node app.js to add fruit to DB
   
   
   To check if the fruit was added:
    - Open a new console
    - Run mongo
    - show dbs
       - use fruitsDB  
       - db.fruit.find()
       - You should now see the fruit added when app.js was run.
