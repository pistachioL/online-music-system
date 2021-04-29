const state = {
    isCollect: false,
    songList: {},
}

const getters = {
    isCollect: (state) => state.isCollect,
    songList: (state) => state.songList,
}

const mutations = {
    //获得歌曲信息
    collectSong(state, collectSong) {
        state.isCollect = true;
        state.songList = collectSong
    }
}

const actions = {
    collectAction({commit}, collectSong){
        commit('collectSong',collectSong);
    },
}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

