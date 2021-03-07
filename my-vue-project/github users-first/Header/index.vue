<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="Search1"
      />
      <!-- 在组件中，事件都是自定义事件 -->
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      Search1: "",
      oldSearch: "",
    };
  },
  methods: {
    search() {
      //判断输入的内容是否为空
      const Search1 = this.Search1.trim();
      if (!Search1) {
        alert("请输入内容");
        //不执行后面代码
        return;
      }
      //判断输入的内容是否一致
      //在data中要有一个数据接收旧值
      if (this.Search1 === this.oldSearch) {
        return;
      }

      this.$bus.$emit("searchText", this.Search1);
      // console.log(1)
      //每执行一次，新的值就变成旧值
      this.oldSearch = this.Search1;
    },
  },
};
</script>

<style>
</style>