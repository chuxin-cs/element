import type { RouteRecordRaw } from "vue-router";

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue"),
  },
];
