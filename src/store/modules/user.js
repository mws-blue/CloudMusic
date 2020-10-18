const user = {
    state: {
        token: ""
    },
    mutations: {
        SET_TOKEN: function (state, userToken) {
            state.token = userToken;
        }
    },
    actions: {

    }
}

export default user;