<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="!comment.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group" v-for="comment in comment" :key="comment.id">
      <CommentItem :comment="comment" :delID="delID" />
    </ul>
  </div>
</template>

<script>
import CommentItem from "../CommentItem";
export default {
  name: "CommentList",
  components: {
    CommentItem,
  },
  props: ["comment", "delID"],
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>