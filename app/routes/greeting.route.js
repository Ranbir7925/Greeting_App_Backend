const GreetingMesaage = require('../controller/greeting.controller.js')
var greeting = new GreetingMesaage
module.exports = (app) => {
    app.get('/', (_req, res) => {
        res.json({ "message": "Welcome to Greeting Application" })
    })
    app.get('/find', greeting.findAllGreeting);
    app.get('/findByID/:greetingId', greeting.findOneGreeting);
    app.post('/create', greeting.createGreeting);
    app.put('/updateByID/:greetingId', greeting.updateGreeting);
    app.delete('/deleteByID/:greetingId', greeting.deleteGreeting);
}