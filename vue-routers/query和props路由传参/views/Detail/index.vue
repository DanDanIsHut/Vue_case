<template>
  <div>
    <div>Detail...........</div>
    <ul>
      <li v-for="(value, key) in detail" :key="key">{{ key }}---{{ value }}</li>
    </ul>
  </div>
</template>

<script>
/* 
props
          将params或query参数以props方式传递到组件内
          优点：可以通过this直接使用，简单方便
          - 配置路由
            {
              props($route) {
								return {
									...$route.query,
									...$route.params,
								};
							},
            }
          - 子路由声明接受props
            props: ['xxx']
          - 子路由使用
            this.xxx    

*/
export default {
  name: "Detail",
  //直接在子路由接收
  props: ["id"],
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
      const id = +this.id;

      this.detail = this.details.find((item) => item.id === id);
      console.log(this);
    }, 2000);
    console.log(this);
  },
  watch: {
    $route: {
      //newVal是$route的最新值
      handler() {
        //同样执行上面的代码
        const id = +this.id;
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