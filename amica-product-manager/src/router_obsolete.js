import Vue from 'vue';
import Router from 'vue-router';
import AddProduct from './views/AddProduct.vue';
import CategoriesManager from './views/CategoriesManager.vue';
import FeaturesManager from './views/FeaturesManager.vue';
import AddNewFeature from './views/AddNewFeature.vue';
import Product from './views/Product.vue';
import Products from './views/Products.vue'
import Subproducts from './views/Subproducts.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    //base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            redirect: {
                name: 'Products'
            }
        },
        {
            path: '/products',
            name: 'Products',
            component: Product,
            children: [
                {
                    path: 'product',
                    name: 'Product',
                    component: Produc
                }
            ]
        }
    ]
})
