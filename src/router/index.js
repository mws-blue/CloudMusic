import Vue from 'vue'
import Router from 'vue-router'

import LayOut from "../view/layout/index"

Vue.use(Router);

export const constantRouterMap = [
    { path: "/login", component: () => import("@/view/login/index") },
    {
        path: "/",
        component:LayOut,
        redirect:"/findmusic/fdstyle",
        children:[
            {
                path:"/findmusic",
                name:"findmusic",
                component:()=>import("../view/findmusic/index"),
                children:[
                    {
                        path:"fdstyle",
                        name:"fdstyle",
                        component:()=>import("../view/findmusic/fdstyle/index"),
                    }
                ]
            }
        ]
    },
    // {
    //     path:"/findmusic",
    //     name:"findmusic",
    //     component:()=>import("../view/findmusic/index"),
    //     children:[
    //         {
    //             path:"fdstyle",
    //             name:"fdstyle",
    //             component:()=>import("../view/findmusic/fdstyle/index"),
    //         }
    //     ]
    // },
    {
        path:"/recommend",
        name:"recommend",
        component:LayOut,
        children:[
            {
                path:"myselfFM",
                name:"myselfFM",
                component:()=>import("../view/myselfFM/index")
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