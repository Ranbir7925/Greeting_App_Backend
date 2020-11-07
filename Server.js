
const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/dbConfig.js')
const mongoose = require('mongoose')
const app = express()
require('./app/routes/greeting.route.js')(app)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to the database"))
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit()
    })
app.listen(3000, () => console.log("Server is listening on port 3000"))