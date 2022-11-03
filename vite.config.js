import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

// vite插件
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vitePluginEslint from "vite-plugin-eslint";

// 当前目录路径
const CWD = process.cwd();

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, CWD);
  return {
    base: "/", // 打包和路由访问的路径，例如：/my-demo

    /* server配置 */
    server: {
      host: "0.0.0.0",
      port: 9000,
      open: true,
      // 配置反向代理
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 代理的地址
          target: "http://192.168.0.10:8080",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`, "g"), "/"),
        },
      },
    },

    /* 解析配置 */
    resolve: {
      alias: {
        "~": resolve("./"),
        "@": resolve("./src"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },

    /* css配置 */
    css: {
      // px转rem
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5, // 540*960 设计稿
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
      preprocessorOptions: {
        less: {
          modifyVars: {},
        },
      },
    },

    /* rollup配置 */
    rollupOptions: {
      output: {
        // chunkFileNames: "static/js/[name]-[hash].js",
        // entryFileNames: "static/js/[name]-[hash].js",
        // assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks: {
          "element-plus": ["element-plus"],
          echarts: ["echarts"],
          vant: ["vant"],
        },
      },
    },

    /* 插件配置 */
    plugins: [
      vue(),
      vueJsx(),
      // eslint校验，在development开发模式下起作用
      mode === "development" &&
        vitePluginEslint({
          // lintOnStart: true, // 启动时候是否执行eslint校验
        }),
    ],
  };
});
