<template>
  <div>
    <p>newsId: {{$route.params.newsId}}</p>
    <p>newsContent: {{$route.params.newsContent}}</p>
  </div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "params page"
    };
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("我准备进入 param");
    //设置了next 才会跳转，否则不会跳转
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("我准备离开param");

    next();
  }
};
</script>

<style scoped>
</style>