import { createApp } from "vue";

// 引入 App
import App from "./App.vue";
const app = createApp(App);

// 引入 vue-router
import router from "./router";
app.use(router);

// 引入 store
import store from "./store";
app.use(store);

// 按需引入 vant-ui
import VantUI from "./plugin/vant-ui";
import "vant/lib/index.css";
app.use(VantUI);

// 引入全局 index 样式
import "@/styles/index.less";

// 引入 amfe-flexible
import "amfe-flexible";

// 挂载全局变量
app.config.globalProperties.$baseUrl =
  import.meta.env.VITE_APP_BASE_SERVE + import.meta.env.VITE_APP_BASE_API;

// 挂载实例
app.mount("#app");
