/***********************************************************************************
 * Purpose      : Following Program is used to create, recieve, update and delete data from database
 * @file        : greeting.routes.js
 * @module      : routes
 * @author      : Ranbir Singh
 * @version     : 1.0
 * @since       : 08/11/2020
 *************************************************************************************/
const GreetingMesaage = require('../controller/greeting.ctr.js')
var greeting = new GreetingMesaage
module.exports = (app) => {
    // Define a simple route to display Message at the homepage
    app.get('/', (_req, res) => {
        res.json({ "message": "Welcome to Greeting Application" })
    })
    // Retrieve all Greetings
    app.get('/greeting', greeting.findAllGreeting);
    // Retrieve a single Greeting with greetingId
    app.get('/greeting/:greetingId', greeting.findOneGreeting);
    // Create a new Greeting
    app.post('/greeting', greeting.createGreeting);
    // Update a Greeting with greetingId
    app.put('/greeting/:greetingId', greeting.updateGreeting);
    // Delete a Greeting with greetingId
    app.delete('/greeting/:greetingId', greeting.deleteGreeting);
}