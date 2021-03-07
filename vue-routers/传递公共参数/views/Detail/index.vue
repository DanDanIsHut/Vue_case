<template>
  <div>
    <div>Detail...........</div>
    <ul>
      <li v-for="(value, key) in detail" :key="key">{{ key }}---{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  //直接在子路由接收
  props: ["id",'name','age','sex'],
  data() {
    return {
      details: [],
      detail: {},
    };
  },
  //在mounted时只执行一次，所以看不到变化，所以要将$route监听，一旦$route更新就更新
  mounted() {
    setTimeout(() => {
      this.details = [
        { id: 1, title: "details001", content: "details0001" },
        { id: 2, title: "details002", content: "details0002" },
        { id: 3, title: "details003", content: "details0003" },
      ];

      //使用
      const id = +this.$route.params.id;

      this.detail = this.details.find((item) => item.id === id);
      console.log(this);
    }, 2000);
    console.log(this);
    console.log(this.sex)
  },
  watch: {
    $route: {
      //newVal是$route的最新值
      handler(newVal) {
        //同样执行上面的代码
        const id = +newVal.params.id;
        this.detail = this.details.find((item) => {
          return item.id === id;
        });
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style>
</style>