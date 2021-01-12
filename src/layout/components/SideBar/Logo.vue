<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link class="sidebar-logo-link" to="/about">
        <img :src="logo" alt="IMAGE" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>

  import logo from '@/assets/images/logo.png'

  export default {
    name: 'Logo',
    // props: {
    //   collapse: {
    //     type: Boolean,
    //     require: true
    //   }
    // },
    data() {
      return {
        title: 'DMADMIN-数据管理',
        logo: logo
      }
    }
  }
</script>

<style lang="scss" scoped>

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    width: 100%;
    height: 100%;
    display: inline-block; // router-link是行内元素，必须添加

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 6px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

}
 
</style>
