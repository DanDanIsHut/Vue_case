<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchText"
      />
      <!-- 点击后将数据发送给List -->
      <button @click="searchs">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      oldSearch: "",
    };
  },
  methods: {
    searchs() {
      //判断用户是否有输入
      const searchText = this.searchText.trim();
      if (!searchText) {
        alert("请输入您要搜索的内容");
        return;
      }
      //判断是否输入一样
      if (this.oldSearch === this.searchText) {
        return;
      }

      this.$Bus.$emit("searchToList", this.searchText);
      this.oldSearch = this.searchText;
    },
  },
};
</script>

<style>
</style>