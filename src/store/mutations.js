
export const userState = (state, user) => {
    if(user) {
        state.currentUser = user
        state.isLogin = true
    } else if (user == null) { //用户登出
        sessionStorage.setItem("userName", null)
        state.currentUser = null;
        state.isLogin = false;
      //  state.token = '';
    }
}