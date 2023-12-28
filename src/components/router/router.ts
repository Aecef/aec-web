import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import('../Home.vue') },
    { path: "/about", component: () => import('../pages/About.vue') },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;