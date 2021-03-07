<template>
  <div class="container">
    <div class="row"><h1>Vue Router</h1></div>
    <div class="row">
      <ul class="col-md-4 nav nav-pills nav-stacked">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/About">About</router-link>
        </li>
      </ul>
      <div class="col-md-8">
        <!-- 
          外层要包含一个keep-alive的内置组件
          include="Home"  中 Home对应每个组件的name属性
          设置完后改生命周期钩子函数不执行，路由也就不再更新
          解决：设置完keep-alive，路由会增加两个钩子函数
          - activated()激活  在该组件表示激活
          -deactivated()未激活  不在该组件表示未激活

          所以可以在activated()做一些事件
         -->
        <keep-alive include="Home"><router-view></router-view></keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    console.log("App beforeCreate");
  },
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
  },
};
</script>

<style>
.router-link-active {
  color: maroon !important;
}
</style>
