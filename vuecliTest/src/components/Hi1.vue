<template>
  <div>{{msg}} --{{$route.params.username}} ---{{$route.params.id}}</div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "Hello ,I'm is hi1"
    };
  }
};
</script>

<style scoped>
</style>