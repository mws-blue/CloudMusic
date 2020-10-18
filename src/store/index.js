import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      user
    },
    state:{
    },
    mutations:{
    
    },
    actions:{

    },
    getters
})

export default store;