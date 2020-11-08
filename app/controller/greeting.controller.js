/*************************************************************
 *
 * Execution       : default node cmd> node greeting.controller.js
 * Purpose         : Define actions for various http methods
 *
 * @description    : Actions to be done when http methods are called. 
 * @file           : greeting.controller.js
 * @author         : Ranbir Singh
 * @overview       : Actions of http methods
 * @module         : controller
 * @version        : 1.0
 * @since          : 08/11/2020
 *
 * **********************************************************/
const greetingService = require('../service/greeting.service')
const joi = require('joi')

class GreetingMessage {
    /**
   * Function to validate request
   * @param {*} message
   */
    validateMeassage = (message) => {
        const schema = joi.object({
            name: joi.string().min(3).required(),
            greeting: joi.string().min(3).required()
        })
        return schema.validate(message)
    }

    /**
     * controller to past request to create service
     * @param {httpRequest} req
     * @param {httpresponse} res
     */
    createGreeting = (req, res) => {
        var responseResult = {};
        const { error } = this.validateMeassage(req.body)
        if (error) {
            responseResult.success = false;
            responseResult.message = "Could not create a greeting";
            responseResult.error = error.details[0].message
            res.status(400).send(responseResult)
        } else {
            var greetingContent = {
                name: req.body.name,
                greeting: req.body.greeting
            }
        }
        greetingService.createGreeting(greetingContent, function (err, data) {
            if (err) {
                responseResult.success = false
                responseResult.error = err
                responseResult.message = "Could not create a greeting"
                res.status(400).send(responseResult)
            }
            else {
                responseResult.success = true
                responseResult.data = data
                responseResult.message = "Greeting created successfully."
                res.status(200).send(responseResult)
            }
        })
    }

    /**
     * @params {object} data
     * Retrieve and return all greetings from the database.
     */
    findAllGreeting = (_req, res) => {
        var responseResult = {}
        greetingService.findAllGreetings(function (err, data) {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                responseResult.message = "Could not find greetings";
                res.status(400).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.data = data;
                responseResult.message = "Greetings found successfully.";
                res.status(200).send(responseResult);
            }
        })
    }

    /**
     * @params {object} data
     * Retrieve and return greeting from the database.
     */
    findOneGreeting = (req, res) => {
        var responseResult = {}
        if (!req.params.greetingId) {
            return res.status(404).send({
                message: "Greeting not found with id " + req.params.greetingId
            })
        }
        greetingService.findOneGreeting(req.params.greetingId, (err, data) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err
                responseResult.message = "Could not find greetings with the given id";
                res.status(422).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.data = data;
                responseResult.message = `Greeting by id ${req.params.greetingId} found successfully.`;
                res.status(200).send(responseResult);
            }
        })
    }

    /**
     * @params {object} data
     * Update greetings from the database.
     */
    updateGreeting = (req, res) => {
        var responseResult = {}
        greetingService.updateGreeting(req.params.greetingId, req.body, (err, data) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                responseResult.message = "Could not update greeting with the given id";
                res.status(422).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.data = data;
                responseResult.message = "Greeting updated successfully.";
                res.status(200).send(responseResult)
            }
        })
    }

    /**
     * @params {object} data
     * Delete greetings from the database.
     */
    deleteGreeting = (req, res) => {
        var responseResult = {}
        greetingService.deleteGreeting(req.params.greetingId, (err, data) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                responseResult.message = "Could not delete greeting with the given id";
                res.status(422).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.data = data;
                responseResult.message = "Greeting deleted ";
                res.status(200).send(responseResult);
            }
        })
    }
}
module.exports = GreetingMessage