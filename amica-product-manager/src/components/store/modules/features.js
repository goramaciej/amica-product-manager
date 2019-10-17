import axios from 'axios';

const state = {
    features: [],
}

const mutations = {
    'SET_FEATURES' (state, features){    
        state.features = features;
    },
    'ADD_FEATURE' (state, feature){
        state.features.push(feature);
    }

}
const actions = {
    retrieveFeatures ( {commit} ){
        axios.get('/features.json')
                .then( response => {
                    const arr = Object.values(response.data);
                    commit('SET_FEATURES', arr[arr.length-1]);
                })
                .catch( error => console.log(error));
    },
    sendFeatures( {commit} ){
        console.log("send features");
        console.log(state.features);
        axios.post('/features.json', this.getters.features)
            .then( res => console.log(res))
            .catch( error => console.log(error));
    },
    addFeature( {commit}, feature){
        commit('ADD_FEATURE', feature);
    }
}
const getters = {
    features: state => {
        return state.features;
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}