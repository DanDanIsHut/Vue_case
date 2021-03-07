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