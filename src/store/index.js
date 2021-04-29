import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import player from './modules/player'
import collect from './modules/collect'
Vue.use(Vuex)


export default new Vuex.Store({
    namespaced: true,
    modules:{
        user: user,  //用户
        player: player, //播放器
        collect: collect //收藏歌曲
    }

})
