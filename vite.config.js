import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

// vite插件
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vitePluginEslint from "vite-plugin-eslint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// 当前目录路径
const CWD = process.cwd();

// vite配置
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
          target: "http://192.168.0.10:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`, "g"), "/"),
        },
        ["/file-api"]: {
          target: "http://192.168.0.10:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/file-api/, ""),
        },
      },
    },

    /* 解析配置 */
    resolve: {
      alias: {
        "~": resolve("./"),
        "@": resolve("./src"),
        "@c": resolve("./src/components"),
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
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/icons")],
        // 指定symbolId格式
        symbolId: "svg-icon-[dir]-[name]",
      }),
      // eslint校验，在development开发模式下起作用
      mode === "development" &&
        vitePluginEslint({
          // lintOnStart: true, // 启动时候是否就执行eslint校验，如果开启的话有eslint的报错则服务是会启动失败
        }),
    ],
  };
});
