import store from "@/store";

/**
 * 判断是否有权限
 * @description 通过函数方式判断，并且已绑定到全局变量，和 v-permission指令 方式同样效果
 * @param {Array} codes 权限编码数组
 * @returns {Boolean} 返回是否有权限
 */
export function hasPermission(codes) {
  // 所有权限数组
  const permissions = store.getters.permissions;

  // 校验的权限必须是数组并且不为空
  if (codes && codes instanceof Array) {
    return codes.some((code) => permissions.includes(code));
  } else {
    console.error("权限编码必须是数组");
    return false;
  }
}
