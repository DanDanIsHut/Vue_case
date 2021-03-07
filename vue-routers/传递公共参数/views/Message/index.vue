<template>
  <div>
    <div>Message...........</div>
    <ul>
      <!-- 遍历将data的数据中的id传递到Detail的路径上做参数, -->
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{
          message.title
        }}</router-link>
      </li>
    </ul>

    <!-- 

      5. 通过router-view给显示的路由组件传递公共参数
          - 配置
             <router-view xxx="xxx"></router-view>
          - 子路由声明接受props
            props: ['xxx']
          - 子路由使用
            this.xxx   
     -->

    <router-view sex="nv"></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
      ];
    }, 1000);
  },
};
</script>

<style>
</style>