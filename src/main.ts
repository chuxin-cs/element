import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

// 清除样式
import "normalize.css";

const app = createApp(App);

app.use(router).mount("#app");
