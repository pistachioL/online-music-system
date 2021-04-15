import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isLogin: 0,
    currentUser: '' || localStorage.getItem('username'),
    remember: false, 
}

const getters = {
    userName: (state) => state.currentUser,
}

const mutations = {
    changeLogin(state,username){
        state.isLogin = 1;
        state.currentUser = username;
        //把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
        localStorage.setItem('username', username)
        
    },
    changeLogout(state, username) {
        state.isLogin = 0;
        state.currentUser = '';
        localStorage.removeItem('username', username)
    }

}

const actions = {
    loginAction({commit}, username){
        commit('changeLogin',username);
    },
    logoutAction({commit}, username) {
        commit('changeLogout', username);
    }
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
