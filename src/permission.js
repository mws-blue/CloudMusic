import store from './store/index'
import router from './router/index'

router.beforeEach((to,from,next)=>{
    if(to.path == '/login'){
        next()
    }else {
        if(store.getters.token == ''){
            next({path:"/login"})
        }else{
            next()
        }
    }
})

