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
      /* 在message里跳转时携带了message页面里的id,通过this.$route.params.id获取到，再进行比较时，相同则遍历，不同则不遍历 
      因为this.$route.params.id里的id是字符串，所以要先转化成Number
      */
      const id = +this.$route.params.id;
      //通过find方法找到符合条件的那一项
      //再到li里遍历
      this.detail = this.details.find((item) => item.id === id);
      console.log(this);
    }, 2000);
    console.log(this);
  },
  watch: {
    /* 
       默认情况下：
        监视的数据一定要发生变化才会触发，所以通常情况下数据一上来没有变化，是不会触发的
        解决：immediate: true, // 一上来触发一次
        监视数据是浅度监视，只监视第一层属性
        解决：deep: true, // 深度监视
      */
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