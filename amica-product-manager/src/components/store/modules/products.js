import axios from 'axios';

const state = {
    products: []
}

const mutations = {
    'SET_PRODUCTS' (state, products){
        state.products = products;
    },
    'ADD_PRODUCT' (state, product){
        state.products.push(product);
    }
}

const actions = {
    retrieveProducts( {commit} ){
        /*axios.get('/product.json')
                .then( response => {
                    let arr = Object.values(response.data)[0];
                    commit('SET_PRODUCTS', arr);
                })
                .catch( error => console.log(error));*/
    },
    /*sendProducts( {commit}, products ){
        axios.post('/products.json', this.$store.getters.products)
            .then( res => console.log("sendproducts: "+ res) )
            .catch( error => console.log(error));
    }*/
}
const getters = {
    products: state => {
        return state.products;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}