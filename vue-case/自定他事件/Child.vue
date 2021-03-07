<template>
  <div>
    <p>Child...</p>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  methods: {
    add() {
      //只有是给插件绑定事件，就是自定义事件
      //触发自定义事件方法
      //this.$emit("add", 2, 3);
      //触发自定义事件方法
      //在实例对象上有个$listeners的对象，里面是自定义事件的内容
      this.$listeners("add", 2, 3);
    },
  },
};
</script>

<style>
</style>