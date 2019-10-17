import Vue from 'vue'
import Vuex from 'vuex'
import productCategories from './modules/productCategories.js';
import features from './modules/features.js';
import products from './modules/products.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        productCategories,
        features,
        products
    }
})