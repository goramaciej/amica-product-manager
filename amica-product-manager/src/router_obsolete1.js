import Vue from 'vue';
import Router from 'vue-router';
import Products from './views/Products.vue';
import FeaturesManager from './views/FeaturesManager.vue';

Vue.use(Router);

export default new Router({
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
            children: [
                {
                    path: 'child1',
                    name: 'Child1',
                    component: FeaturesManager
                }
            ]
        }

    ]
})