<template>
  <div>
    {{msg}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "Hello ,I'm is hello"
    };
  }
};
</script>

<style scoped>
</style>