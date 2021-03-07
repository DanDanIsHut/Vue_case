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
      this.$store.state 读取state数据
      this.$store.getters 读取getters数据
    2. 写
      this.$store.dispatch 触发action函数
      this.$store.commit 触发mutation函数
        传参只有一个参数

    this上多一个属性$store

    mapState, 映射state：将vuex中state数据映射到组件实例对象上
      将来可以直接通过this使用

      ...mapState(['count']) 将vuex中state中count数据映射到计算属性中

      mapState(['count'])是
        {
          count() {
            return this.$store.state.count
          }
        }

    mapGetters, 映射getters  映射到计算属性中
    mapActions,  映射actions  映射到mothods属性中
    mapMutations 映射mutations 映射到mothods属性中

    - redux
      connect(mapStateToProps, mapDispatchToProps)(App)
      connect(() => {}, {})(App)
*/
export default {
  name: "App",
  methods: {
    incremeny() {
      console.log(this);
      //触发actions 目的是用来循环加
      // 触发vuex更新 --> 触发action函数 --> dispatch
      //this.$store.dispatch("increment");
      //store.commit('INCREMENT', 1);
      this.$store.commit("INCREMENT", 1);
    },
    deincremeny() {
      //this.$store.dispatch("deincrement");
      this.$store.commit("DEINCREMENT", 1);
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