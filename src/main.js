import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router';
import {routes} from './router/index.js';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store/index'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
