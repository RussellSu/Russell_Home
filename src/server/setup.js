module.exports = function (express, app, passport) {
    var http = require("http");
    var path = require("path");
    var errorHandler = require("errorhandler");
    var morgan = require("morgan");
    var bodyParser = require("body-parser");
    var cookieParser = require("cookie-parser");
    var session = require("express-session");
    var MongoStore = require("connect-mongo")(session);
    var cors = require("cors");
    var mongoose = require("mongoose");

    var secure = true;
    if (process.env.ENV === 'local' || process.env.ENV === 'dev') {
        console.log("CORS ENABLED.");
        secure = false;
        app.use(cors());
        app.disable('etag');
    }

    app.enable('trust proxy');

    app.use(morgan("dev"));

    app.use(errorHandler());
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: true, limit: '80mb'}));

    // parse application/json
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(cookieParser("moomin"));


    app.use(session({
        resave: true,
        saveUninitialized: false,
        name: "russell-home.cookie",
        secret: "moomin",
        rolling: false,
        cookie: {
            secure: secure,
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        },
        store: new MongoStore({
            // db: "avatarz"
            mongooseConnection: mongoose.connection
        }),
        auto_reconnect: true
    }));


    app.use(passport.initialize());

    app.use(passport.session());
};