<template>
  <div>
    <p>
      click {{ $store.state.count }} time , count is
      {{ $store.getters.countType }}
    </p>
    <button @click="incremeny">+</button>
    <button @click="deincremeny">-</button>
    <button @click="incrementOfAdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
/* 
组件操作vuex
    1. 读
    2. 写
*/
export default {
  name: "App",
  methods: {
    incremeny() {
      console.log(this);
      //触发actions 目的是用来循环加
      // 触发vuex更新 --> 触发action函数 --> dispatch
      this.$store.dispatch("increment");
    },
    deincremeny() {
      this.$store.dispatch("deincrement");
    },
    incrementOfAdd() {
      this.$store.dispatch("incrementOfAdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
</style>