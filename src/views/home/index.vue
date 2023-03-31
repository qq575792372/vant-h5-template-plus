<template>
  <div class="app-container">
    <div>token：{{ user.getToken }}</div>
    <div>用户名：{{ user.getName }}</div>

    <!-- 演示如何和store交互 -->
    <div class="display-flex">
      <van-field v-model="userName" class="flex-1" placeholder="输入新姓名" />
      <van-button type="primary" style="width: 90px" @click="handleClick">保存</van-button>
    </div>
    <div>
      图标：
      <SvgIcon name="user" size="20" style="color: #2d8cf0" />
    </div>

    <!-- 演示如何跳转页面 -->
    <div class="margin-top-20">
      <van-button :id="1" type="primary" @click="toLogin">跳转到登陆</van-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import userStore from "@/store/modules/user";

// 路由
const router = new useRouter();
// 用户store
const user = userStore();
// 声明表单
let userName = ref("");
console.log(33, userName);

/**
 * 保存
 */
const handleClick = () => {
  user.name = userName;
};

/**
 * 路由跳转
 */
const toLogin = () => {
  router.push("/login");
};
</script>

<style lang="less" scoped>
.app-container {
  padding: 10px;
}
</style>
