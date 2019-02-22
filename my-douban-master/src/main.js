// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Axios from 'axios'
import Axios from '@/http/xhr'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// import 'vue-happy-scroll/docs/happy-scroll.css'
// import { HappyScroll } from 'vue-happy-scroll'

Vue.config.productionTip = false
Vue.prototype.$Axios = Axios
Vue.use(ElementUI)
// Vue.component('happy-scroll', HappyScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
