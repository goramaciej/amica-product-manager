import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './components/store/store.js';


import axios from 'axios';
axios.defaults.baseURL = 'https://amica-prod.firebaseio.com';

export const EventBus = new Vue();

/*export const eventBus = new Vue({
    methods: {
        setNationality(nationality) {
            this.$emit('nationalityChanged', nationality);
        }
    }
});*/

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
