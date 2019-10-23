import vue from 'vue'
import Router from 'vue-router'
import list from './views/list.vue'
// import detail from './views/detail.vue'
vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/customers',
      name: 'home',
      redirect:'/customers/list'
    },
    {
      path:'/customers/list',
      component: list,
    },
    {
      path:'/customers/new',
      component: () => import(/* webpackChunkName: "customers-new" */ './views/newCustomer.vue')
    },
    {
      path: '/customers/detail',
      name: 'detail',
      // component:detail,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers-detail" */ './views/detail.vue')
    }
  ]
})
