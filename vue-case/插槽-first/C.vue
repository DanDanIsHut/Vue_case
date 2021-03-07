<template>
  <div>
    <p>CCCCCC</p>
    <!--:count="count" 将数据传给父组件  -->
    <slot name="content" :count="count"></slot>
  </div>
</template>

<script>
export default {
  name: "C",
  data() {
    return {
      count: 3,
    };
  },
};
</script>

<style>
</style>