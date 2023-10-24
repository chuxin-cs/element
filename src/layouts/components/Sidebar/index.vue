<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";

import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { getCssVariableValue } from "@/utils";
import { DeviceEnum } from "@/constants/app-key";
import { useAppStore } from "@/store/modules/app";
import { useSettingsStore } from "@/store/modules/settings";
import { usePermissionStore } from "@/store/modules/permission";

const v3SidebarMenuBgColor = getCssVariableValue("--v3-sidebar-menu-bg-color");
const v3SidebarMenuTextColor = getCssVariableValue(
  "--v3-sidebar-menu-text-color"
);
const v3SidebarMenuActiveTextColor = getCssVariableValue(
  "--v3-sidebar-menu-active-text-color"
);

const appStore = useAppStore();
const settingsStore = useSettingsStore();
const { sidebar, device } = storeToRefs(appStore);
const { layoutMode, showLogo } = storeToRefs(settingsStore);
const permissionStore = usePermissionStore();

const isCollapse = computed(() => !sidebar.value.opened);
const isLeft = computed(() => layoutMode.value === "left");
const isTop = computed(() => layoutMode.value === "top");
const isMobile = computed(() => device.value === DeviceEnum.Mobile);
const isLogo = computed(() => isLeft.value && showLogo.value);
const backgroundColor = computed(() =>
  isLeft.value ? v3SidebarMenuBgColor : undefined
);
const textColor = computed(() =>
  isLeft.value ? v3SidebarMenuTextColor : undefined
);
const activeTextColor = computed(() =>
  isLeft.value ? v3SidebarMenuActiveTextColor : undefined
);

const route = useRoute();
const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path,
  } = route;
  return activeMenu ? activeMenu : path;
});

// 当为顶部模式时隐藏垂直滚动条
const hiddenScrollbarVerticalBar = computed(() => {
  return layoutMode.value === "top" ? "none" : "block";
});
</script>

<template>
  <div :class="{ 'has-logo': isLogo }">
    <!-- logo -->
    <!-- 菜单 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse && !isTop"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        :mode="isTop && !isMobile ? 'horizontal' : 'vertical'"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
          :is-top="isTop"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.el-scrollbar {
  // 多 1% 是为了在顶部模式时防止垂直滚动
  height: 101%;
  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
    &.is-vertical {
      // 当为顶部模式时隐藏垂直滚动条
      display: v-bind(hiddenScrollbarVerticalBar);
    }
  }
}
</style>
