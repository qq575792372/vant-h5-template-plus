import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建 pinia
const pinia = createPinia();
// 使用持久化插件
pinia.use(piniaPluginPersistedstate);

// 导出 pinia
export default pinia;
