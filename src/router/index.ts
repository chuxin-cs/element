// import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";

import { createRouter, createWebHashHistory } from "vue-router";

import { basicRoutes } from "./pages";
import { asyncRoutes } from "./views";

// 现在第一步先把权限都整到这里
const routes: RouteRecordRaw[] = [...basicRoutes, ...asyncRoutes];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
