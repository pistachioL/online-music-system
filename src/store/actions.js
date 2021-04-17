const actions = {
    loginAction({commit}, username){
        commit('changeLogin',username);
    },
    logoutAction({commit}, username) {
        commit('changeLogout', username);
    }
    
}

export default actions
