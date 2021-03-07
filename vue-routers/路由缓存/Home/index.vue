<template>
  <div>
    <p>Home</p>
    <ul class="nav nav-tab">
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    console.log("Home beforeCreate");
  },
  created() {
    console.log("Home created");
  },
  beforeMount() {
    console.log("Home beforeMount");
  },
  mounted() {
    console.log("Home mounted");
  },
  beforeDestroy() {
    console.log("Home beforeDestroy");
  },
  destroyed() {
    console.log("Home destroyed");
  },
  activated() {
    console.log("Home activated");
  },
  // 未激活
  deactivated() {
    console.log("Home deactivated");
  },
};
</script>

<style>
</style>