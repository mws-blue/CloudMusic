const user = {
    state: {
        userInfo: "",
        cookie: ""
    },
    mutations: {
        SET_COOKIE: function (state, cookie) {
            state.cookie = cookie;
            window.localStorage.setItem("cookie", cookie)
        },
        SET_USERINFO: function (state, userInfo) {
            state.userInfo = userInfo
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo))

        }
    },
    actions: {
        setCookie({ commit }, cookie) {
            commit('SET_COOKIE', cookie)
        },
        setUserInfo({ commit }, userInfo) {
            commit('SET_USERINFO', userInfo)
        }
    }
}

export default user;