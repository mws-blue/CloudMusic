const getters = {
   cookie:state => state.user.cookie?state.user.cookie:window.localStorage.getItem("cookie"),
   userInfo:state => state.user.userInfo?state.user.userInfo:JSON.parse(window.localStorage.getItem("userInfo"))
}

export default getters;