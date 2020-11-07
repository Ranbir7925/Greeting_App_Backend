require('dotenv/config')
const mongoose = require('mongoose')
const DB_CONFIG = mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to the database"))
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit()
    })

 module.exports = DB_CONFIG