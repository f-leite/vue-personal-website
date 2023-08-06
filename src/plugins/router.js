import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory('/vue-personal-website/'),
})

export default router