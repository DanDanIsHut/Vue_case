<template>
  <div>
    <div>Message...........</div>
    <ul>
      <!-- 遍历将data的数据中的id传递到Detail的路径上做参数, -->
      <li v-for="message in messages" :key="message.id">
        <!-- 使用query传参  查询字符串方式 在这个案例没有用处 -->
        <!-- 
          query
          - 路由链接
            <router-link :to="/xxx?key=value">xxx</router-link>  
          - 子路由使用
            this.$route.query.key 
         -->
        <router-link :to="`/home/message/detail/${message.id}?cxd=xxx`">{{
          message.title
        }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
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