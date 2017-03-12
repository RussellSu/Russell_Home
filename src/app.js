/**
 * Created by ThinkPad on 2017/2/26.
 */

var express = require("express");
var app = express();
var path = require("path");
var passport = require("passport");
var config = require("./server/config.js");

require("./server/database.js")(config);
require("./server/setup.js")(express, app, passport);
require("./server/passport.js")(app, passport, config);
require("./server/routes.js")(express, app, passport, config);

