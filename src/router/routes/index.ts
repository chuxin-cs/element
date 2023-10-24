import type { RouteRecordRaw } from "vue-router";

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面
 */
const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        // @ts-ignore
        component: () => import("../pages/IconLogin/Index.vue"),
    },
];

// 页面路由
export const routes:RouteRecordRaw[] = [
    ...constantRoutes,
]