import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getSidebarStatus } from "@/utils/cache/local-storage";
import { DeviceEnum, SIDEBAR_CLOSED } from "@/constants/app-key";

interface Sidebar {
  opened: boolean;
  withoutAnimation: boolean;
}

export const useAppStore = defineStore("app", () => {
  /** 侧边栏状态 */
  const sidebar: Sidebar = reactive({
    opened: getSidebarStatus() !== SIDEBAR_CLOSED,
    withoutAnimation: false,
  });

  /** 设备类型 */
  const device = ref<DeviceEnum>(DeviceEnum.Desktop);

  return {
    sidebar,
    device,
  };
});
