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

// 挂载实例
app.mount("#app");
