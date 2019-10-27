import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './components/store/store.js';
import { ObserveVisibility } from 'vue-observe-visibility'
import VueAgile from 'vue-agile'
import axios from 'axios';

Vue.use(VueAgile)

axios.defaults.baseURL = 'https://amica-prod.firebaseio.com';

//export const EventBus = new Vue();

/*export const eventBus = new Vue({
    methods: {
        setProduct(product) {
            this.$emit('productChanged', product);
        }
    }
});*/

Vue.config.productionTip = false;
Vue.directive('observe-visibility', ObserveVisibility)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
