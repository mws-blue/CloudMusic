import Vue from 'vue'
import Router from 'vue-router'

import LayOut from "../view/layout/index"

Vue.use(Router);

export const constantRouterMap = [
    { path: "/login", component: () => import("@/view/login/index") },
    {
        path: "/",
        component: LayOut,
        redirect:"dashboard",
        children:[
            {
                path:"dashboard",
                component:()=>import("../view/home/index")
            }
        ]
    }
]

const router = new Router({
    routes: constantRouterMap,
    mode: "hash"
})

export const asyncRouterMap = []

export default router;