const state = {
  menu: false,
};

const mutations = {
  SHOW_MENU(state) {
    state.menu = true;
  },
  HIDE_MENU(state) {
    state.menu = false;
  },

};
const actions = {
  showMobileMenu({ commit }) {
    commit('SHOW_MENU');
  },
  hideMobileMenu({ commit }) {
    commit('HIDE_MENU');
  },
};
const getters = {
  mobileMenuVisible: (state) => state.menu,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
