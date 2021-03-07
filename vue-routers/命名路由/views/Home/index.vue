<template>
  <div>
    <div>Home...........</div>
    <ul class="col-md-4 nav nav-pills nav-stacked">
      <!-- 子路由要将路径写完整 -->
      <li><router-link to="/home/news">Ners</router-link></li>
      <li><router-link to="/home/message">Message</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>