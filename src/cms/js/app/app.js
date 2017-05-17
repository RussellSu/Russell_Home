//It's cms entry pointer

var jquery = require("jquery");
// var Vue = require("vue").default;
var Vue = require("vue");//配置文件中别名只想vue.common.js,  若如此写就会报错 Vue is not a constructor?
var VueRouter = require("vue-router").default;
Vue.use(VueRouter);
require("../../style/screen.scss");
var routeList = require("./routers.js");
var appHome = require("../../components/app.vue");

var router = new VueRouter({
    routeList
});

var App = new Vue({
    // el: "#vue-wrap",//挂载元素
    // template:app,
    router,
    render: h => h(appHome),
    data: {//数据
        title:"russell's home",
        testContent:""
    },
    methods: {//方法
        makeMarkdown:function (content) {

        }



    }
}).$mount("#vue-wrap");
