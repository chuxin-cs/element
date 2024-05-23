import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/index.vue";

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue"),
  },
];
