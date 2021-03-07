<template>
  <div>
    <p>Home</p>
    <ul class="nav nav-tab">
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>