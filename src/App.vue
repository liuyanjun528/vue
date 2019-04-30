<template>
  <div id="app">
    <!-- 显示路由过来的组件页面   app.vue作为main.js渲染的组件-->
    <router-view></router-view>
    <!--缓存路由标签 ，里面可以包含 <router-view> ，缓存组件对象-->
    <!-- <keep-alive></keep-alive> -->
  </div>
</template>
<script>
export default {
   name: 'app',
   components:{
   },
  data () {
    return {
      baby:{
        name:"cln",
        age:"25",
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
