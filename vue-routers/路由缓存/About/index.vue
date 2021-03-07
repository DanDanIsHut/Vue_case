<template>
  <div class="container">
    <p class="row">About</p>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeCreate() {
    console.log("About beforeCreate");
  },
  created() {
    console.log("About created");
  },
  beforeMount() {
    console.log("About beforeMount");
  },
  mounted() {
    console.log("About mounted");
  },
  beforeDestroy() {
    console.log("About beforeDestroy");
  },
  destroyed() {
    console.log("About destroyed");
  },
  activated() {
    console.log("About activated");
  },
  // 未激活
  deactivated() {
    console.log("About deactivated");
  },
};
</script>

<style>
</style>