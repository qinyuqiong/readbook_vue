<template>
  <el-menu
      class="el-menu-demo"
      :default-active="activeIndex"
      mode="vertical"
      router>
      <el-menu-item index="/" >首页</el-menu-item>
      <el-menu-item index="/bookSort" >分类</el-menu-item>
      <el-menu-item index="/bookRank">排行</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BookHeader',
  data() {
    return {
      activeIndex: '/',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
