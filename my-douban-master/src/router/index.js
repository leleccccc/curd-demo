import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/HomeView'], resolve)
    },
    {
      path: '/homeview',
      name: 'HomeView',
      component: resolve => require(['@/views/HomeView'], resolve)
    },
    {
      path: '/movieview',
      name: 'MovieView',
      component: resolve => require(['@/views/MovieView'], resolve)
    },
    {
      path: '/bookview',
      name: 'BookView',
      component: resolve => require(['@/views/BookView'], resolve)
    },
    {
      path: '/broadcastview',
      name: 'BroadcastView',
      component: resolve => require(['@/views/BroadcastView'], resolve)
    },
    {
      path: '/groupview',
      name: 'GroupView',
      component: resolve => require(['@/views/GroupView'], resolve)
    },
    {
      path: '/rearchview',
      name: 'RearchView',
      component: resolve => require(['@/views/RearchView'], resolve)
    }
  ]
})
