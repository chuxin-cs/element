import { ref } from "vue";
import store from "@/store";
import { defineStore } from "pinia";
import { type RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router/routes";

export const usePermissionStore = defineStore("permission", () => {
  const routes = ref<RouteRecordRaw[]>([...constantRoutes]);
  const dynamicRoutes = ref<RouteRecordRaw[]>([]);

  const setRoutes = () => {
    routes.value = constantRoutes;
  };

  return { routes, dynamicRoutes, setRoutes };
});

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
