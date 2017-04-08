//It's cms entry pointer

var jquery = require("jquery");
// var Vue = require("vue").default;
var Vue = require("vue");//配置文件中别名只想vue.common.js,  若如此写就会报错 Vue is not a constructor?
// require("../../style/screen.scss");
// require("../../style/app/_variables.scss");


App = new Vue({
    el: "#vue-wrap",//挂载元素
    // template:app,
    data: {//数据
        title:"russell's home",
        testContent:""
    },
    methods: {//方法
        makeMarkdown:function (content) {

        }



    }
});
