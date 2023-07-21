import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/test',
        component: () => import('../components/TestVue.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router
