<template>
  <div class="container">
    <Header />
    <List />
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
export default {
  name: "App",
  components: {
    Header,
    List,
  },
};
</script>

<style>
</style>