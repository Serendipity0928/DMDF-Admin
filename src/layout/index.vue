<template>
  <!-- 排版包裹层 -->
  <div class="app-wrapper">
    <!-- 1. 侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- 2. 右边主要区域的包裹层 -->
    <div class="main-container">
      <!-- 2.1 主要区域的头部 -->
      <div class="header"></div>
      <!-- 最主要的区域 -->
      <div class=""></div>
    </div>
  </div>
</template>

<script>

  import Sidebar from './components/SideBar'

  export default {
    name: 'Layout',
    components: {
      Sidebar
    }
  }
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background: #eee;

  .sidebar-container{
    -webkit-transition: width .20s;
    transition: width .28s;
    width: 205px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    z-index: 928;
    overflow: hidden;
  }
}
 
</style>
