const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/list',
    component: resolve => require(['../views/Left_navigation.vue'], resolve),
    children:[
      {
        path: '/list',
        name: 'List',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
      }
    ]
  },
  
]

export default routes
