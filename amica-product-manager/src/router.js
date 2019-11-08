import Vue from 'vue';
import Router from 'vue-router';

import CategoriesManager from './views/CategoriesManager.vue';
import FeaturesManager from './views/FeaturesManager.vue';
import AddNewFeature from './views/AddNewFeature.vue';
import Product from './views/Product.vue';
import Products from './views/Products.vue';
import AddProduct from './views/AddProduct.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/products/wszystkie'
    },
    {
      path: '/products/:category',
      name: 'products',
      component: Products,
      /* children: [
                {
                    path: ':id',
                    name: 'productsIn',
                    component: Products
                }
            ] */
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,

    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: AddProduct,
    },
    {
      path: '/features-manager',
      name: 'featuresManager',
      component: FeaturesManager,
    },
    {
      path: '/features-manager/add-new-feature',
      name: 'addNewFeature',
      component: AddNewFeature,
    },
  ],
});
