import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import player from './modules/player'
Vue.use(Vuex)


export default new Vuex.Store({
    namespaced: true,
    modules:{
        user: user,
        player: player
    }

})
