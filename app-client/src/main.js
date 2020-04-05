import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
 import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
