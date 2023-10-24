<template>
  <div>
    <!-- 左侧模式 -->
    <LeftMode v-if="layoutMode === 'left'" />
    <!-- 顶部模式 -->
    <TopMode v-else-if="layoutMode === 'top'" />
    <!-- 混合模式 -->
    <LeftTopMode v-else-if="layoutMode === 'left-top'" />

    <!-- TODO 右侧设置面板 -->
    <!--    <RightPanel v-if="showSettings">-->
    <!--      <Settings/> -->
    <!--    </RightPanel> -->
  </div>
</template>

<script lang="ts" setup>
import TopMode from "./TopMode.vue";
import LeftMode from "./LeftMode.vue";
import LeftTopMode from "./LeftTopMode.vue";

import { ref } from "vue";

let layoutMode = ref<string>("left");
</script>

<style scoped lang="scss"></style>
