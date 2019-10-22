import Vue from 'vue';
import Router from 'vue-router';
import AddProduct from './views/AddProduct.vue';
import CategoriesManager from './views/CategoriesManager.vue';
import FeaturesManager from './views/FeaturesManager.vue';
import AddNewFeature from './views/AddNewFeature.vue';
import Product from './views/Product.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/addproduct',
            name: 'addproduct',
            component: AddProduct
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },

        {
            path: '/addproduct',
            name: 'addproduct',
            component: AddProduct
        },
        {
            path: '/features_manager',
            name: 'Zarządzanie funkcjami',
            component: FeaturesManager
        },
        {
            path: '/add_new_feature',
            name: 'Dodaj nową funkcję',
            component: AddNewFeature
        },
        {
            path: '/categories_manager',
            name: 'CategoriesManager',
            component: CategoriesManager
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
