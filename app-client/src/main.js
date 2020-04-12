import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import axios from 'axios';
import authStore from './components/store/auth';

axios.interceptors.request.use(
  function (config) {
    if(config.url.includes('http://localhost:9999/api/')){
      config.withCredentials = true;
    }
   
   //
   
    return config;
  },
  function (error) {
    return new Promise.reject(error)
  }
) 

Vue.config.productionTip = false;
Vue.use(VueRouter);

 new Vue({
  render: h => h(App),
  router
}).$mount('#app')

axios.get('http://localhost:9999/api/auth')
  .then(res => {
    if (res.status === 200 && res.data._id) {
      authStore.setUser(res.data);
    }
  }).catch(() => {
    
  })