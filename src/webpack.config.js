module.exports = {
  entry: {
    home: [
           "./src/home.js",
           "./src/components/home/myActivity/index.js",
           "./src/components/home/approve/index.js",

    ],
    edit: [
    "./src/edit.js",
    "./src/components/edit/activityDetail/index.js",
    "./src/components/edit/activityHospitalSearch/index.js",
    "./src/components/edit/slidebar/index.js",
    "./src/components/edit/internalOrderSearch/index.js"
    ]
  },
  output: {
    path: "./build",
    publicPath: "./build/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html-loader" },
      {test: /\.(jpg|png)$/, loader: "url?mimetype=image/png"}
    ]
  },
  resolve: {//for vue guide 2017.2.23 http://cn.vuejs.org/v2/guide/installation.html
    alias: {
      'vue$': './node_modules/vue/dist/vue.common.js'
    }
  }
}