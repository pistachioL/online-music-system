
const state = {
    isLogin: 0,
    currentUser: '' || localStorage.getItem('username'),
    avatar: '',
    gender: '',
    desc: '',
    remember: false,

}

const getters = {
    userName: (state) => state.currentUser,
    avatar: (state) => state.avatar,
    gender: (state) => state.gender,
    desc: (state) => state.desc,
}

const actions = {
    loginAction({commit}, username){
        commit('changeLogin',username);
    },
    logoutAction({commit}, username) {
        commit('changeLogout', username);
    }, 

    // editAction({commit}, username, gender, desc) {
    //     commit('changeProfile', username, gender, desc)
    // }
    editAction({commit}, desc) {
        commit('changeProfile', desc)
    }
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
    },


    //修改个人信息
    changeProfile(state, desc) {
        state.desc =  desc
    },

    //设定input的默认值
    setUsername(state, username) {
        state.currentUser = username
    },    
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

