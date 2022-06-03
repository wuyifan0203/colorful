import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Introduce from "../views/introduce.vue";
import Home from "../views/home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        redirect: 'introduce'
    },
    {
        path:"/introduce",
        name:"introduce",
        component:Introduce
    },
    {
        path:"/home",
        name:"home",
        component:Home
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
})