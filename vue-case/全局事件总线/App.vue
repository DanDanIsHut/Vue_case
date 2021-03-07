<template>
  <div>
    <p>App...</p>
    <button @click="send">按钮</button>
    <Child />
  </div>
</template>

<script>
import Child from "./Child";
import Child from "./Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  methods: {
    send() {
      this.$globalEventBus.$emit("AppToChild", "hello Chiled");
    },
  },
};
</script>

<style>
</style>