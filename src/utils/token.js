import { getCookie, setCookie, removeCookie } from "@lime-util/util";

/**
 * token操作
 */

const TokenKey = "VAN_H5_TEMPLATE_PLUS_TOKEN";

/**
 * 获得token
 */
export function getToken() {
  return getCookie(TokenKey);
}

/**
 * 保存token
 */
export function setToken(token) {
  return setCookie(TokenKey, token);
}

/**
 * 删除token
 */
export function removeToken() {
  return removeCookie(TokenKey);
}
