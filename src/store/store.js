import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'
Vue.use(Vuex)

// const store = new Vuex.store({
//     state: {
//         currentUser: null,
//         isLogin: false,
//         // token: ''
//     },
//     getters,
//     mutations,
//     actions
// })

const state = {
    isLogin: 0
}

const mutations = {
    changeLogin(state,status){
        state.isLogin = status;
    }
}

const actions = {
    loginAction({commit}){
        commit('changeLogin',1);
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
