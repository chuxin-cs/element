<script lang="ts" setup>
import { AppMain, NavigationBar, Sidebar, TagsView } from "./components";

import { ref } from "vue";

let fixedHeader = ref<boolean>(true);
let showTagsView = ref<boolean>(true);
</script>

<template>
  <div class="app-wrapper">
    <!-- 左侧菜单栏 -->
    <Sidebar class="sidebar-container" />
    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 头部导航栏和标签栏 -->
      <div :class="{ 'fixed-header': fixedHeader }" class="layout-header">
        <NavigationBar />
        <TagsView v-show="showTagsView" />
      </div>
      <!-- 页面主体内容 -->
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
