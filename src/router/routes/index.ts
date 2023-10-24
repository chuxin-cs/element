import type { RouteRecordRaw } from "vue-router";

const Layouts = () => import("@/layouts/index.vue");

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面
 */
const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true,
        },
        component: () => import("@/pages/dashboard/index.vue"),
      },
    ],
  },
  {
    path: "/403",
    component: () => import("@/pages/error-page/403.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    component: () => import("@/pages/error-page/404.vue"),
    meta: {
      hidden: true,
    },
    alias: "/:pathMatch(.*)*",
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
];

// 页面路由
export const routes: RouteRecordRaw[] = [...constantRoutes];
