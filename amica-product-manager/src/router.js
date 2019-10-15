import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddProduct from './components/AddProduct.vue';
import CategoriesManager from './components/categories/CategoriesManager.vue';
import FeaturesManager from './components/features/FeaturesManager.vue'
import AddNewFeature from './components/features/AddNewFeature.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
