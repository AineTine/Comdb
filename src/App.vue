<template>
  <el-menu mode="horizontal" router background-color="#fff"
    text-color="#333" active-text-color="#06f">
    <el-menu-item index="/">开始</el-menu-item>
    <el-menu-item index="/app">应用</el-menu-item>
    <el-menu-item index="/setting">设置</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script>

import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log("it ready");
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
