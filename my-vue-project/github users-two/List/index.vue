<template>
  <div>
    <h2 v-if="isSearch">输入用户名搜索</h2>
    <h2 v-else-if="isLoading">Loading</h2>
    <div class="row" v-else>
      <div class="card" v-for="item in user" :key="item.id">
        <a href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ item.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      isSearch: true,
      isLoading: false,
      user: [],
    };
  },
  //在挂载成功后立即接收数据,发送异步请求
  mounted() {
    this.$Bus.$on("searchToList", this.searchAjax);
  },
  methods: {
    searchAjax(searchName) {
      this.isSearch = false;
      this.isLoading = true;

      axios
        /* .get(`https://api.github.com/search/users?q=${searchName}`) */
        .get(`/search/users?q=${searchName}`)
        /* .get(`/api/search/users?q=${searchName}`) */
        .then((res) => {
          console.log(res);
          this.user = res.data.items.map((item) => {
            return {
              id: item.id,
              login: item.login,
              html_url: item.html_url,
              avatar_url: item.avatar_url,
            };
          });

          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>