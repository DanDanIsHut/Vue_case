<template>
  <div>
    <!-- 一旦应用store，组件实例就会多一个$store的属性 -->
    <p>
      click {{ $store.state.count }} time , count is {{ $store.getters.parity }}
    </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="ofAdd">increment if odd</button>
    <button @click="setAsync">increment async</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    console.log(this);
    console.log(this.$store.state.count);
  },
  methods: {
    //mapMutations将mutations的内容映射到methods上面，就可以直接通过this.使用
    ...mapMutations(["INCREMENT", "DECREMENT"]),
    //mapActions映射到methods中
    ...mapActions(["incrementOfAdd", "incrementAsync"]),
    //因为count的数据不用通过发送请求之类的就可以拿到，所以直接在组件里触发mutations
    increment() {
      this.INCREMENT(1);
    },
    decrement() {
      this.DECREMENT(1);
    },

    ofAdd() {
      this.incrementOfAdd(1);
    },
    setAsync() {
      this.incrementAsync(1);
    },
  },
};
</script>

<style>
</style>