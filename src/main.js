import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 自己写的
import avatar from "./packages/avatar/index.js";
Vue.use(avatar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
