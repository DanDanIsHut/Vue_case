<template>
  <div>
    <p>Child...</p>
    <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  mounted() {
    this.$globalEventBus.$on("AppToChild", (msg) => {
      console.log(msg);
    });
  },
};
</script>

<style>
</style>