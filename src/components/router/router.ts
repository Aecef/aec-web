import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import('../Home.vue') },
    { path: "/about", component: () => import('../pages/About.vue') },
    { path: "/projects", component: () => import('../pages/Projects.vue') },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;