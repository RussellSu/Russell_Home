/**
 * Created by ThinkPad on 2017/2/26.
 */

var express = require("express");
var app = express();

// 一个中间件栈，对任何指向 / 的 HTTP 请求打印出相关信息
app.use('/', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

//路由方法 ： homepage get请求
app.get("/", function(req, res){
    res.send("hello world!");
});

var server = app.listen(3007,function(){
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
