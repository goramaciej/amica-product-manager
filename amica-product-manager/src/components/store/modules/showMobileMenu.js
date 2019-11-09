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
const getters = {
    mobileMenuVisible: (state) => {
        return state.menu;
    },
};

export default {
    state,
    mutations,
    getters,
};
