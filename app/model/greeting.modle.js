const mongoose = require('mongoose')

const greetingSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        required: true
    },
    greeting: {
        type: String,
        min: 3,
        required: true
    }
}, {
    timestamps: true
})

var Greeting = mongoose.model('Greeting', greetingSchema)

class GreetingModel {
    //Create and Save
    createGreeting = (data, callback) => {
        try {
            const greeting = new Greeting({
                name: data.name,
                greeting: data.greeting
            })
            greeting.save()
            callback(null, greeting)
        } catch (err) {
            callback(err, null)
        }
    }

    //Retrive all data
    findAllGreetings = (data, callback) => {
        Greeting.find(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }
    //Retive data by ID
    findOneGreeting = (greetingId, callback) => {
        Greeting.findById(greetingId, (err, data) => {
            err ? callback(err, null) : callback(null, data)
        })
    }

    updateGreeting = (greetingId, data, callback) => {
        mongoose.set("useFindAndModify", false);
        Greeting.findByIdAndUpdate(greetingId, data, (err) => {
            err ? callback(err, null) : callback(null, data)
        })
    }
    deleteGreeting = (greetingId, callback) => {
        Greeting.findByIdAndDelete(greetingId, (err, data) => {
            err ? callback(err, null) : callback(null, data)
        })
    }
}
module.exports = new GreetingModel()