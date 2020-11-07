const Greeting = require('../model/greeting.modle')

class GreetingService{
    createGreeting=(data,callback)=>{
        Greeting.createGreeting(data,function(err,result){
            if(err){
                callback(err,null)
            }else{
                callback(null,result)
            }
        })
    }

    findAllGreetings = (data,callback) => {
        Greeting.findAllGreetings(data,function (err,result) {
            if(err){
                callback(err,null)
            }else{
                callback(null,result)
            }
        })
    }
}
module.exports =  new GreetingService()