/***********************************************************************************
 * Purpose      : Following Program defines Schema
 * @file        : greeting.model.js
 * @module      : mongoose  
 * @author      : Ranbir Singh
 * @version     : 1.0
 * @since       : 08/11/2020
 *************************************************************************************/
const mongoose = require('mongoose')

/**
 * @var {String} name
 * @var {String} greeting 
 */
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
    /**
     * @param {object} data coming from service layer
     * @param {*} callback for check error 
     */
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

    /**
     * To retrive all data from database
     */
    findAllGreetings = (data, callback) => {
        Greeting.find(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    /**
     * Find a single greeting with a greetingId
     */
    findOneGreeting = (greetingId, callback) => {
        Greeting.findById(greetingId, (err, data) => {
            err ? callback(err, null) : callback(null, data)
        })
    }

    /**
     * Update a greeting identified by the greetingId in the request
     */
    updateGreeting = (greetingId, data, callback) => {
        mongoose.set("useFindAndModify", false);
        Greeting.findByIdAndUpdate(greetingId, data, (err) => {
            err ? callback(err, null) : callback(null, data)
        })
    }

    /**
     * Delete a greeting with the specified greetingId in the request
     */
    deleteGreeting = (greetingId, callback) => {
        Greeting.findByIdAndDelete(greetingId, (err, data) => {
            err ? callback(err, null) : callback(null, data)
        })
    }
}
module.exports = new GreetingModel()