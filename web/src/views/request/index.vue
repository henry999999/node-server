<template>
  <div>
    <div>请求页面</div>
    <button @click="getuser">获取用户</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getuser() {
      console.log(1);
    //   this.$http.get("http://127.0.0.1:3000/slecetUser", { username: "" }).then(res => {
    //     console.log(res);
    //   });
    this.$http.get("/api/slecetUser", { username: "" }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>