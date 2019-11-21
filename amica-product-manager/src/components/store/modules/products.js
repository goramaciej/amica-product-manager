import axios from 'axios';

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    // console.log("set: "+products);
    state.products = products;
  },
  ADD_PRODUCT(state, product) {
    state.products.push(product);
  },
};

const actions = {
  retrieveProducts({ commit }) {
    axios.get('/products.json')
      .then((response) => {
        //console.log(response.data);
        const arr = Object.values(response.data);
        const newArr = arr[arr.length - 1];
        const newArr2 = newArr.filter(el => {
            return el != null;
        });
        commit('SET_PRODUCTS', newArr2);
      })
      .catch((error) => console.log(error));
  },
  sendProducts({ commit }) {
    axios.post('/products.json', this.getters.products)
      .then(
        // res => console.log("sendproducts: "+ res)
      )
      .catch((error) => console.log(error));
  },
};
const getters = {
  products: (state) => state.products,
};
export default {
  state,
  mutations,
  actions,
  getters,
};
