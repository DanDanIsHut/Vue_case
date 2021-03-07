<template>
  <div>
    <h2 v-if="isSearchText">输入用户名搜索</h2>
    <h2 v-else-if="isLoading">Loading</h2>
    <div class="row" v-else>
      <div class="card" v-for="item in isList" :key="item.id">
        <a :href="item.html_url" target="_blank">
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
  //因为数据在LIst页面上展示，所以数据定义在List页面
  data() {
    return {
      isSearchText: true,
      isLoading: false,
      isList: [],
    };
  },
  mounted() {
    //将全局事件总数里的回调函数定义在methods上面方便卸载
    this.$bus.$on("searchText", this.search);
    console.log(1);
  },
  methods: {
    search(searchName) {
      //在点击搜索后立即把loading变成true
      this.isSearchText = false;
      this.isLoading = true;
      console.log(searchName);
      //接收参数后发送异步请求
      axios
        .get(`https://api.github.com/search/users?q=${searchName}`)
        .then((res) => {
          this.isLoading = false;
          //长度不变用map 长度变化用filter
          this.isList = res.data.items.map((item) => {
            return {
              id: item.id,
              avatar_url: item.avatar_url,
              login: item.login,
              html_url: item.html_url,
            };
          });
          console.log(res);
        })
        //只要有then就要有catch
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>