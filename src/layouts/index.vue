<template>
  <div>
    <!-- 页头 -->
    <div>
      <Header></Header>
    </div>

    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 菜单栏 -->
      <Menu />
      <!-- 内容展示区域 -->
      <Main>
        <router-view></router-view>
      </Main>
    </div>
  </div>
</template>

<script>
import { Breadcrumb, Header, Main, Menu } from "./index.ts";
export default {
  components: { Breadcrumb, Header, Main, Menu },
};
</script>


