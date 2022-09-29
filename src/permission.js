import router from "./router";
import userStore from "./store/modules/user";

import { getToken } from "@/utils/token";

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 获取token
  const hasToken = getToken();
  // 有token
  if (hasToken) {
    next();
  } else {
    next();
  }
});

// 路由后置守卫
router.afterEach((to, from) => {});
