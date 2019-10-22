import Vue from 'vue';
import Router from 'vue-router';

import CategoriesManager from './views/CategoriesManager.vue';
import FeaturesManager from './views/FeaturesManager.vue';
import AddNewFeature from './views/AddNewFeature.vue';
import Product from './views/Product.vue';
import Products from './views/Products.vue'
import AddProduct from './views/AddProduct.vue';

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
            component: Products,
        },
        {
            path: '/products/product',
            name: 'Product',
            component: Product,
            children: [
                {
                    path: ':id',
                    name: 'Product',
                    component: Product
                }
            ]
        },
        {
            path: '/products/addproduct',
            name: 'addproduct',
            component: AddProduct,
        },
        {
            path: '/features-manager',
            name: 'featuresManager',
            component: FeaturesManager
        },
        {
            path: '/features-manager/add-new-feature',
            name: 'addNewFeature',
            component: AddNewFeature
        }
    ]
})
