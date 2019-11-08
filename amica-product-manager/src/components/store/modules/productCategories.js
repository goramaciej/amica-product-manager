// import categories from './categories_obsolete.js/index.js';
import axios from 'axios';

const state = {
  categories: [],
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

const actions = {
  /* initCategories: ( { commit }) => {
        commit('SET_CATEGORIES', categories);
    }, */
  retrieveCategories({ commit }) {
    axios.get('/categories.json')
      .then((response) => {
        const arr = Object.values(response.data)[0];
        commit('SET_CATEGORIES', arr);
      })
      .catch((error) => console.log(error));
  },
  sendCategories({ commit }, categories) {
    axios.post('/categories.json', this.$store.getters.categories)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  },
};

const getters = {
  categories: (state) => state.categories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
