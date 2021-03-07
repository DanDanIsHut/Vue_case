<template>
  <div>
    <p v-if="isLoading">loading....</p>
    <p v-else>
      Most Star Repo Is <a :href="repo.html_url">{{ repo.name }}</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      isLoading: false,
      repo: {
        name: "",
        html_url: "",
      },
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get("https://api.github.com/search/repositories?q=v&sort=stars")
      .then((res) => {
        //因为只有一条数据，所有可以用解构
        const { name, html_url } = res.data.items[0];
        console.log(res);
        this.repo = {
          name,
          html_url,
        };
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>