import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './components/store/store.js';

import axios from 'axios';
axios.defaults.baseURL = 'https://amica-prod.firebaseio.com';

Vue.config.productionTip = false;
//https://amica-prod.firebaseio.com/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
