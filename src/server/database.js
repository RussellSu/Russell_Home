module.exports =  function(config){
    var mongoose = require("mongoose");
    mongoose.connect("mongodb://" + config.database.dbConnect, {auto_reconnect:true}, function (error) {
        if(error){
            console.error(error);
        }
    })
};
