
const state = {
    isLogin: 0,
    currentUser: '' || localStorage.getItem('username'),
    remember: false, 
    //播放器
    isPlaying: false,
    playList: {
        title: '',
        author: '',
        url: '',
        pic: '',
        lrc: '',
    },

}

export default state