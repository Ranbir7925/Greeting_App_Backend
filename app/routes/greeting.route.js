const GreetingMesaage = require('../controller/greeting.controller.js')
var greeting = new GreetingMesaage
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({ "message": "Welcome to Greeting Application" })
    })
    // Create a new Greeting
    app.post('/create', greeting.createGreeting);

    // Retrieve all Greetings
    app.get('/find', greeting.findAllGreeting);
}