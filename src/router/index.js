import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import("../view/index")
let router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: index
        }
    ]
})
export default router

