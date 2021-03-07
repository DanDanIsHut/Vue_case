<template>
  <div>
    <p>C-------------------</p>
    <slot name="content" :count='count'></slot>
  </div>
</template>

<script>
export default {
  name: "C",
  data(){
      return{
          count:1
      }
  }
};
</script>

<style>
</style>