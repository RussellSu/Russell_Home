module.exports = function(app, passport, config){
    var request = require("superagent");

    var User = require("./models/user");
    var Access = require("./models/access");


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    if(process.env.ENV === "local"){
        var PassportHttp = require("passport-http");
        passport.use(new PassportHttp.BasicStrategy(function(userId, password, done){
            User.findOne({userId: userId}).exec(function(error, user){
                if(error){
                    return done(error);
                }
                if(user){

                }
            })
        }))
    }



};