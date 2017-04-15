module.exports = function (express, app, passport, config) {
    var fs=require("fs-extra");
    var path = require("path");
    var User = require("./models/user");


    function hasLoggedIn(req,res,next){
        if(req.session && res.session.passport && res.session.passport.user){
            console.log("have user:" + " " + req.session.passport.user.username + " " + req.session.passport.user.userId);
            next();
        }else{
            console.log("no user");
            var originalUrl = req.originalUrl;
            res.cookie("originalUrl",originalUrl);
            res.redirect("/login.html");
        }
    }

    function addConfigToReq(req, res, next) {
        req.config = config;
        //res.cookie
        next();
    }

// 一个中间件栈，对任何指向 / 的 HTTP 请求打印出相关信息
//     app.use('/', function(req, res, next) {
//         console.log('Request URL:', req.originalUrl);
//         next();
//     }, function (req, res, next) {
//         console.log('Request Type:', req.method);
//         next();
//     });

    //路由方法 ： homepage get请求
    app.get("/", function(req, res){
        if(req.originalUrl === "/"){
            res.sendFile("cmsApp.html",{root:path.join(__dirname,"../public")});
        }else{
            next();
        }
    });
    app.get("/homepage", function(req, res){
        // res.send("hello world!");
        res.sendFile("cmsApp.html",{root:path.join(__dirname,"./public")});
    });
    app.get("/login", function(req, res){
        res.sendFile("login.html",{root:path.join(__dirname,"../public")});
    });
    // app.get('*',function(req, res){
    //     res.sendFile('404.html',{root:path.join(__dirname,"../public")});
    // })
    require("./routes/get.js")(app);
    var server = app.listen(config.serverPort, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("app listening at http://%s:%s",host,port);
    });

    //托管静态文件，public 目录下面的文件就可以访问了
    app.use(express.static("./public"));
    /*
     http://localhost:3007/images/banner.png
     //所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
     */

};