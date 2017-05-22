// modules.exports = {
routes:[
    {path: '/', redirect: '/articles'},
    // {
    //     path: '/index',
    //     component: resolve => require(['../../components/index.vue'], resolve)
    // },
    {
        path: '/articles',
        component: resolve => require(['../../components/articles.vue'], resolve)
        // children:[
        //     { path: 'info', component: resolve => require(['../../components/info.vue'], resolve) }
        // ]
    },
    {
        path: '/users',
        component: resolve => require(['../../components/users.vue'], resolve)
    },
    {
        path: '*',
        component: resolve => require(['../../components/notFoundPage.vue'], resolve)
    }
]
// };
