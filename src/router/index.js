import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/',
      component: resolve => require(['@/views/Index'], resolve)
    },
    {
      path: '/manage',
      name: 'manage',
      // redirect: '/manage',
      component: resolve => require(['@/views/Manage'], resolve)
    }
  ]
})
