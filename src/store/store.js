
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const store = new Vuex.store({
    state: {
        currentUser: null,
        isLogin: false,
        token: ''
    },
    getters,
    mutations,
    actions
})


export default store