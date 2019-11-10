import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import VueAgile from 'vue-agile';
import axios from 'axios';
import Vue2TouchEvents from 'vue2-touch-events';
import router from './router.js';
import store from './components/store/store.js';
import App from './App.vue';

Vue.use(VueAgile);
Vue.use(Vue2TouchEvents);

axios.defaults.baseURL = 'https://amica-prod.firebaseio.com';

Vue.config.productionTip = true;
Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
