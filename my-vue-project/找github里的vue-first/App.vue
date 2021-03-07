<template>
  <div>
    <h3 v-if="isShow">loading</h3>
    <h3 v-else>
      most star repo is <a :href="user.html_url">{{ user.name }}</a>
    </h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      isShow: true,
      user: {
        name: "",
        html_url: "",
      },
    };
  },
  mounted() {
    axios
      .get(" https://api.github.com/search/repositories?q=v&sort=stars")
      .then((res) => {
        this.isShow = false;
        console.log(res);
        //因为只需要一条数据，所以从第一天解构出来就可以了
        let { name, html_url } = res.data.items[0];
        this.user.name = name;
        this.user.html_url = html_url;
      });
  },
};
</script>

<style>
</style>