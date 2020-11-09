/*************************************************************
 *
 * Execution       : default node cmd> node server.js
 * Purpose         : Run a nodejs server and connect to a database server
 *
 * @description    : Creates a app using express ,and add body-parser middlewares 
 *                   using express’s app.use() method. We connect to the database using mongoose.
 *                   We run a nodejs server which listens on port number 4000. 
 * @file           : Server.js
 * @author         : Ranbir Singh
 * @overview       : Run a nodejs server and connect to a database server
 * @version        : 1.0
 * @since          : 08/11/2020
 *
 * **********************************************************/
require('dotenv/config')
const logger = require('./logger')
const express = require('express')
const bodyParser = require('body-parser')
// const PORT = 4000
require('./config/dbConfig')
/**
 * create express app
 */
const app = express()

// parse requests of content-type - application/json
app.use(bodyParser.json())
require('./app/routes/greeting.rts.js')(app)

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`))
logger.info("Server started")