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
            console.log(greeting);
            greeting.save()
            callback(null, greeting)
        } catch (err) {
            callback(err, null)
        }
    }

    //Retrive all data
    findAllGreetings = (data, callback) => {
        Greeting.find(data, function (err, result) {
            if (err)
                callback(err, null)
            else
                callback(null, result)
        })
    }
}
module.exports = new GreetingModel()