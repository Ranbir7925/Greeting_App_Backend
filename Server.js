
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


require('./app/routes/greeting.route.js')(app)
require('./config/dbConfig')

const PORT = 4000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))