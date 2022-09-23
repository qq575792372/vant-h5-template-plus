import { defineStore } from "pinia";

const userStore = defineStore("user", {
  /* state 源数据 */
  state: () => {
    return {
      token: "1234",
      name: "张三",
    };
  },

  /* getters 获取 */
  getters: {
    getToken: (state) => state.token,
    getName: (state) => state.name,
  },

  /*  actions 操作 */
  actions: {
    setToken(token) {
      this.token = token;
    },
    setName(name) {
      this.name = name;
    },
  },

  persist: {
    storage: sessionStorage, // 缓存方式
    // 允许持久化的数据，默认是所有
    // paths: ["token"],
  },
});

export default userStore;
