// modules.exports = {
	routes:[
    { path: '/', redirect: '/index' },
    {
        path: '/articles', component: resolve => require(['../../components/articles.vue'], resolve),
        // children:[
        //     { path: 'info', component: resolve => require(['../../components/info.vue'], resolve) }
       // ]
    },
    { path: '/users', component: resolve => require(['../../components/users.vue'], resolve) }
  ]
// };
