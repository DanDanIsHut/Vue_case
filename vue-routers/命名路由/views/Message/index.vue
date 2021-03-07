<template>
  <!-- 
   4. 命名路由  使用较多
          - 配置路由
            {
              name: 'xxx'
            }
          - 路由链接
            <router-link :to="{
              name: 'xxx', // 跳转到哪个命名路由
              params: {  }, // params参数
              query: {  }, // query参数
            }">xxx</router-link>    
          - 子路由使用
            this.$route.params
            this.$route.query
 -->
  <div>
    <div>Message...........</div>
    <ul>
      <!-- 遍历将data的数据中的id传递到Detail的路径上做参数, -->
      <li v-for="message in messages" :key="message.id">
        <router-link
          :to="{
            name: 'detail', //跳转到哪个命名路由
            //id为message.id
            params: { id: message.id }, //params参数
            query: {}, //query参数
          }"
          >{{ message.title }}</router-link
        >
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