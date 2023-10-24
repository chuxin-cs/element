import { createApp } from "vue";
import { router } from "./router";
import store from "./store";
// @ts-ignore
import App from "./App.vue";
//
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 实例化
const app = createApp(App);

// 注册elementPlus
app.use(ElementPlus);
// 注册路由
app.use(router);
// 状态
app.use(store)
// 挂载
app.mount("#app");

console.log(app);