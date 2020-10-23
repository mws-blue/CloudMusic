import Vue from 'vue'
import Router from 'vue-router'

import LayOut from "../view/layout/index"

Vue.use(Router);

export const constantRouterMap = [
    { path: "/login", component: () => import("@/view/login/index") },
    {
        path: "/",
        redirect: "/recommend/findmusic/fdstyle",
    },
    {
        path: "/recommend",
        name: "recommend",
        component: LayOut,
        children: [
            {
                path: "findmusic",
                name: "findmusic",
                component: () => import("../view/findmusic/index"),
                children: [
                    {
                        path: "fdstyle",
                        name: "fdstyle",
                        component: () => import("../view/findmusic/fdstyle/index"),
                    },
                    {
                        path: "fdsongs",
                        name: "fdsongs",
                        component: () => import("../view/findmusic/fdsongs/index"),
                    },
                    {
                        path: "fdanchor",
                        name: "fdanchor",
                        component: () => import("../view/findmusic/fdanchor/index"),
                    },
                    {
                        path: "fdleaderboard",
                        name: "fdleaderboard",
                        component: () => import("../view/findmusic/fdleaderboard/index"),
                    },
                    {
                        path: "fdsinger",
                        name: "fdsinger",
                        component: () => import("../view/findmusic/fdsinger/index"),
                    },
                    {
                        path: "fdnewmusic",
                        name: "fdnewmusic",
                        component: () => import("../view/findmusic/fdnewmusic/index"),
                    }
                ]
            },
            {
                path: "/myselfFM",
                name: "myselfFM",
                component: () => import("../view/myselfFM/index")
            }
        ]
    },
    {
        path: "/playlist",
        name: "playlist",
        component: LayOut,
        children: [
            {
                path: "detail:id",
                name: "detail",
                component: () => import("@/view/musicdetail/index")
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