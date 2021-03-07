<template>
  <div class="container">
    <p class="row">Message</p>
    <ul class="col-md-4 nav nav-pills nav-stacked">
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{
          message.content
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