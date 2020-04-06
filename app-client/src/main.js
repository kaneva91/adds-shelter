import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    config.withCredentials = true;
    return config;
  },
  function (error) {
    return new Promise.reject(error)
  }
)

Vue.config.productionTip = false;
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
