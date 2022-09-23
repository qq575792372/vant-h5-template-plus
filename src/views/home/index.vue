<template>
  <div class="app-container">
    <div>token：{{ user.getToken }}</div>
    <div>用户名：{{ user.getName }}</div>
    <div>
      <van-field v-model="userName" placeholder="输入新姓名" />
      <van-button type="primary" @click="handleClick">保存</van-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import userStore from "@/store/modules/user";

// 声明表单
let userName = ref("");

// 用户store
let user = userStore();
console.log(1211, user?.token);

/**
 * 保存
 */
const handleClick = () => {
  user.name = userName;
};
</script>

<style lang="less" scoped></style>
