var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var CMS_PATH = path.resolve(ROOT_PATH, 'cms');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 默认的webpack 会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.join(ROOT_PATH, 'node_modules');

module.exports = {
    entry: {
        cmsVendor:[
            path.join(CMS_PATH,'js','libs','vendors.js'),
        ],
        cms: [
            path.join(CMS_PATH,'js','app','app.js')  //"./src/cms/js/app/app.js"
            // "./src/home.js",
            // "./src/components/home/approve/index.js",

        ]
    },
    output: {
        path: path.join(BUILD_PATH,'assets','js'),//"./public/",//输出路径
        publicPath: '/',//env local
        // publicPath: 'http://www.russell.com/',//env production
        filename: "[name].js",//生成文件名 [name]的相应内容是entry节点下对应该的key,即生成cms.js vendor.js
        // libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.vue$/,loader: "vue"},
            //解析JS文件
            // {test: /\.js$/,loader: 'babel',exclude: /node_modules/,},
            //解析css
            {test: /\.css$/,loader: "style!css"},//style!css是style-loader!css-loader的简写,
            // 多个loader可以用在同一个文件上并且被链式调用。链式调用时从右到左执行且loader之间用“!”来分割。
            //css-loader会遍历css文件，找到所有的url(...)并且处理。
            // style-loader会把所有的样式插入到你页面的一个style tag中。

            // { test: /\.scss$/, loader: 'style!css!sass'},
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader!sass-loader'
                })
            },
            //解析html
            {test: /\.html$/, loader: "html-loader"},
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: "url?mimetype=image/png?limit=1024",//url是url-loader的简写
                // use: '[name].[ext]?[hash]'
            }
        ]
    },
    resolve: {//for vue guide 2017.2.23 http://cn.vuejs.org/v2/guide/installation.html
        alias: {//设置别名后，就不需要写真实的路径，只需用别名代替
            // 'vue$': './node_modules/vue/dist/vue.common.js',
            'vue': path.join(CMS_PATH,'js','libs','vue.min.js'),
            'jQuery': './cms/js/libs/jquery-3.1.1.min.js',
        }
    },
    plugins: [
        //这个插件的作用是给输出的文件头部添加注释信息。
        new webpack.BannerPlugin('This file is created by russell su'),
        // new ExtractTextPlugin({
        //     filename: "style.css",
        //     allChunks: true /*是否将分散的css文件合并成一个文件*/
        //     // disable:false
        // }),
        //extract-text-webpack-plugin插件，不把样式打包到脚本中，而是独立打包样式文件，生成新的css文件。
        // new ExtractTextPlugin("./[name].css"),
        new HtmlWebpackPlugin({
            template: path.join(CMS_PATH,'app.html'),
            filename: path.join(BUILD_PATH,'cmsApp.html'),
            inject: false,
            // favicon: './public/assets/img/favicon.ico',
            minify:false//压缩文件 用于prd
        }),
        new HtmlWebpackPlugin({
            template: path.join(CMS_PATH,'logIn.html'),
            filename: path.join(BUILD_PATH,'login.html')
        }),
        // new webpack.ProvidePlugin({
        //     $: path.join(CMS_PATH,'js','libs','jquery-3.1.1.min.js'),
        //     jQuery: path.join(CMS_PATH,'js','libs','jquery-3.1.1.min.js')
        // }),
        // new webpack.ProvidePlugin({
        //     Vue: path.join(CMS_PATH,'js','libs','vue.min.js')
        // })
    ],
    // externals:{
    //     '$':path.join(CMS_PATH,'js','libs','jquery-3.1.1.min.js'),
    //     'jQuery':path.join(CMS_PATH,'js','libs','jquery-3.1.1.min.js'),
    //     'Vue':path.join(CMS_PATH,'js','libs','vue.min.js'),
    // },
};