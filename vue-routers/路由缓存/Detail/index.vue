<template>
  <div class="container">
    <p class="row">Detail</p>
    <ul>
      <li v-for="(value, key) in detail" :key="key">{{ key }}:{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      details: [],
      detail: {},
    };
  },
  mounted() {
    setTimeout(() => {
      this.details = [
        { id: 1, title: "details001", content: "detail001" },
        { id: 2, title: "details002", content: "detail002" },
        { id: 3, title: "details003", content: "detail003" },
      ];
      //console.log(this);

      const id = +this.id;
      this.detail = this.details.find((item) => {
        return item.id === id;
      });
    }, 2000);
  },
  watch: {
    $route() {
      //当有变化时执行  最新的$route
      const id = +this.id;
      this.detail = this.details.find((item) => {
        return item.id === id;
      });
    },
  },
};
</script>

<style>
</style>