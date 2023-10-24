import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHashHistory,} from "vue-router";
import {routes} from "./routes";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: routes as unknown as RouteRecordRaw[],
    scrollBehavior: () => ({left: 0, top: 0}),
});
