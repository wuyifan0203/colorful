import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import introduce from "../views/introduce.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"introduce",
        component:introduce
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
})