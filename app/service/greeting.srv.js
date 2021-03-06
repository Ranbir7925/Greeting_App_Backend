/***********************************************************************************
 * Purpose      : Service layer containg business logic
 * @file        : service.js
 * @module      : greeting.model.js
 * @author      : Ranbir Singh
 * @since       : 08/11/2020
 *************************************************************************************/
const greetingRoute = require('../model/greeting.mdl')

class GreetingService {
    /**
     * @params {object} data which will be passed to model layer
     * @params {callback function} callback
     */
    createGreeting = (data, callback) => {
        greetingRoute.create(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    /**
     * @params {object} data which will be passed to model layer
     * @params {callback function} callback
     */
    findAllGreetings = (data, callback) => {
        greetingRoute.findAll(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    /**
     * @params {object} data which will be passed to model layer
     * @params {callback function} callback
     */
    findOneGreeting = (data, callback) => {
        greetingRoute.findOne(data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    /**
     * @params {object} data which will be passed to model layer
     * @params {callback function} callback
     */
    updateGreeting = (id, data, callback) => {
        greetingRoute.update(id, data, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }

    /**
     * @params {object} data which will be passed to model layer
     * @params {callback function} callback
     */
    deleteGreeting = (id, callback) => {
        greetingRoute.delete(id, (err, result) => {
            err ? callback(err, null) : callback(null, result)
        })
    }
}
module.exports = new GreetingService()