const state = {
    isCollect: false,
    songList: {},
}

const getters = {
    isCollect: (state) => state.isCollect,
    songList: (state) => state.songList,
}

const mutations = {
    // changeCollect(state,song){
    //     if(state.isCollect==true){
    //         state.songList.push(song);
    //     }else{
    //         state.songList.splice(song)
    //     }
    // },
    // //获得歌曲信息
    // collectSong(state, collectSong) {
    //     state.isCollect = true;
    //     state.songList = collectSong
    // },
    // cancelCollect(state, cancelSong) {
    //     state.isCollect = false;
    //     state.songList = cancelSong;
    // }
}

const actions = {
    // 收藏&取消收藏
//     collect({commit},data){
//         let isCollect=(url,data)=>{
//           axios
//           .post('/index/Activityapi/'+url,{course_id:data.course_id})
//           .then(res=>{
//         if(res.data.code==1){
//            commit('changeCollect',data.course_id)
//         }else{
//           Vue.prototype.$toast.error('收藏失败');
//         }  
//      }).catch(err=>{
//          Vue.prototype.$toast.error('收藏失败');
//      })
//    }
    // collectAction({commit}, collectSong){
    //     commit('collectSong',collectSong);
    // },
    // cancelAction({commit}, collectSong){
    //     commit('collectSong',cancelCollect);
    // },
}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

