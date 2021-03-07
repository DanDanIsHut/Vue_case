<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!comment.length">暂无评论，点击左侧添加评论！！！</h2>
    <!-- 遍历 -->
    <ul class="list-group" v-for="comment in comment" :key="comment.id">
      <!-- :comment="comment"将数据传递给Item -->
      <!-- delComment传给Item时被遍历了，所以这里传的是每项，就是一个对象 -->
      <CommoneItem :comment="comment" :delComment="delComment" />
    </ul>
  </div>
</template>

<script>
import CommoneItem from "../commontItem";
export default {
  name: "CommontList",
  /* 接收从App组件传来的数据 */
  props: ["comment", "delComment"],
  components: {
    CommoneItem,
  },
};
</script>

<style lang='less'>
.reply {
  margin-top: 0px;
}
</style>