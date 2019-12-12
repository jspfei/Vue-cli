<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <button @click="goBack">返回</button>
      <button @click="goTo">前进</button>
      <button @click="goHome">首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/params/111/我几分减减肥">参数</router-link>|
      <router-link to="/goHome">返回</router-link>|
      <router-link to="/goParams/2222/阿斯顿发生">重定向传递参数</router-link>|
      <router-link to="/hi">Hi</router-link>|
      <router-link to="/jspfei">jspfei</router-link>|
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goTo() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opactiy 0.5s;
}
</style>
