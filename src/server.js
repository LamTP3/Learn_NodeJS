const express = require('express') // common js
const configViewEngine = require('./config/viewEngine')
const initWebRouter = require('./routes/web')

require('dotenv').config()
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 6969
const hostname = process.env.HOST_NAME || 'localhost'

// config view engine
configViewEngine(app)

//test

// declare routes
app.use(`/v1`, initWebRouter)



// simple query
connection.query(
    'SELECT * FROM Users u ',
    function (err, results, fields) {
      console.log(">>>>Result: ",results); // results contains rows returned by server
      console.log(">>>>Fields: ",fields); // fields contains extra meta data about results, if available
    }
  );
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})