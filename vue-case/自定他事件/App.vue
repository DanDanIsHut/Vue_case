<template>
  <div>
    <p>App...</p>
    <!-- 绑定自定义事件 -->
    <button @add="add">按钮</button>
    <Child />
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "App",
  components: {
    Child,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    add(x, y) {
      this.num = this.num + x + y;
    },
  },
};
</script>

<style>
</style>