<template>
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  :router="true"
  @select="handleSelect">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/about" disabled>分类</el-menu-item>
      <el-menu-item index="3" disabled>排行</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BookHeader',
};
</script>

<style lang="scss" scoped>

</style>
