import axios from "axios";
import store from "@/store";
import { Message } from "view-design";
import { getToken } from "@/utils/token";

// 设置axios跨域访问
axios.defaults.withCredentials = true; // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.crossDomain = true; // 设置axios跨域的配置

// 创建服务
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_SERVE + process.env.VUE_APP_BASE_API,
  timeout: 3 * 60 * 1000,
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    /* 这里可以设置请求拦截的内容 */

    // 设置token
    if (store.getters.token) {
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res) {
      return res;
    } else {
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    onceErrorMsg(getErrorMsg(error.message));
    return Promise.reject(error);
  }
);

/**
 * 指定时间内只允许弹出一次错误信息
 * @param {String} errorMsg 错误信息
 * @param {Number} interval 允许弹框时间间隔，默认3秒
 */
let errorMsgInstance = null;
let errorMsgTimer = null;
function onceErrorMsg(errorMsg, interval = 3 * 1000) {
  if (errorMsgInstance) {
    Message.destory();
  } else {
    errorMsgInstance = Message.error(errorMsg);
  }
  errorMsgTimer && clearTimeout(errorMsgTimer);
  errorMsgTimer = setTimeout(() => {
    errorMsgInstance = null;
  }, interval);
}

/**
 * 获得错误信息
 * @param {String} msg 错误信息
 * @returns {String} 返回错误文案
 */
function getErrorMsg(msg) {
  // 400
  if (msg.match(/400/)) {
    return "抱歉，请求参数错误！";
  }
  // 403
  else if (msg.match(/403/)) {
    return "抱歉，无权限访问资源！";
  }
  // 404
  else if (msg.match(/404/)) {
    return "抱歉，请求资源不存在！";
  }
  // 500
  else if (msg.match(/500/)) {
    return "抱歉，程序发生异常！";
  }
  // 502
  else if (msg.match(/502/)) {
    return "抱歉，网关访问错误！";
  }
  // 503
  else if (msg.match(/503/)) {
    return "抱歉，服务访问无效！";
  }
  // 504
  else if (msg.match(/504/)) {
    return "抱歉，网关访问超时！";
  }
  // timeout
  else if (msg.match(/timeout/)) {
    return "抱歉，服务器访问超时！";
  }
  // Network Error
  else if (msg.match(/Network Error/i)) {
    return "抱歉，网络访问异常！";
  }
  // other
  else {
    return "抱歉，程序未知异常！";
  }
}

// 导出
export default service;
