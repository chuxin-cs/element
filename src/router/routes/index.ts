import type { RouteRecordRaw } from "vue-router";

const Layouts = () => import("@/layouts/index.vue");

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面
 */
export const constantRoutes: RouteRecordRaw[] = [
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

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    name: "Permission",
    component: Layouts,
    redirect: "/permission/page",
    meta: {
      title: "权限管理",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"], // 或者在子导航中设置角色
        },
        component: () => import("@/views/permission/page.vue"),
      },
      {
        path: "directive",
        name: "DirectivePermission",
        meta: {
          title: "指令权限", // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        },
        component: () => import("@/views/permission/directive.vue"),
      },
    ],
  },
];

// 页面路由
export const routes: RouteRecordRaw[] = [...constantRoutes, ...asyncRoutes];
