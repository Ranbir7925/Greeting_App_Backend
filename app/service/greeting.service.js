const Greeting = require('../model/greeting.modle')

class GreetingService {
    createGreeting = (data, callback) => {
        Greeting.createGreeting(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    findAllGreetings = (data, callback) => {
        Greeting.findAllGreetings(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    findOneGreeting = (data, callback) => {

        Greeting.findOneGreeting(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    updateGreeting = (id, data, callback) => {
        Greeting.updateGreeting(id, data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    deleteGreeting = (id, callback) => {
        Greeting.deleteGreeting(id, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }
}
module.exports = new GreetingService()