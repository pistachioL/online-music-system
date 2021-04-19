const state = {
    isplaying: false,
    songList: {},
}

const getters = {
    isplaying: (state) => state.isplaying,
    songList: (state) => state.songList,
}

const mutations = {
    //获得歌曲信息
    playSong(state, playingSong) {
        state.isplaying = true;
        state.songList = playingSong
    }
}

const actions = {
    playAction({commit}, playingSong){
        commit('playSong',playingSong);
    },
}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

