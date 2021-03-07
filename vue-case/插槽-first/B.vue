<template>
  <div>
    <p>Bbbbb .....</p>
    <!-- 具名插槽 -->
    <slot name="Div"></slot>
    <slot name="H3"></slot>

    <!-- <slot name='To' ></slot> -->
    <slot name='To' />
  </div>
</template>

<script>
export default {
  name: "B",
};
</script>

<style>
</style>