<template>
  <div class="container">
    <p class="row">Message</p>
    <ul class="col-md-4 nav nav-pills nav-stacked">
      <li v-for="message in messages" :key="message.id">
        <!-- 这样写和params传值是一样的只是没有这么麻烦 -->
        <router-link
          :to="{ name: 'detail', path: 'detail', params: { id: message.id } }"
          >{{ message.content }}</router-link
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
      messages: [
        { id: 1, title: "message001", content: "content001" },
        { id: 2, title: "message002", content: "content002" },
        { id: 3, title: "message003", content: "content003" },
      ],
    };
  },
};
</script>

<style>
</style>