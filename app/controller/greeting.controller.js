// const greetingService = require('../service/greeting.service.js')
const greetingService = require('../service/greeting.service')
const joi = require('joi')

class GreetingMessage {
    validateMeassage = (message) => {
        const schema = joi.object({
            name: joi.string().min(3).required(),
            greeting: joi.string().min(3).required()
        })
        return schema.validate(message)
    }

    createGreeting = (req, res) => {
        console.log("break1")
        var responseResult = {};
        const {error} = this.validateMeassage(req.body)
        console.log(error)
        console.log("break2")
        if (error) {
            responseResult.success = false;
            responseResult.message = "Could not create a greeting";
            responseResult.error = error
            res.status(400).send(responseResult)
        } else {
            var greetingContent = {
                name: req.body.name,
                greeting: req.body.greeting
            }
        }
        greetingService.createGreeting(greetingContent, function (err, data) {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                responseResult.message = "Could not create a greeting";
                res.status(400).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.data = data;
                responseResult.message = "Greeting created successfully.";
                res.status(200).send(responseResult);
            }
        })
    }

    findAllGreeting = (req, res) => {
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


}

module.exports = GreetingMessage