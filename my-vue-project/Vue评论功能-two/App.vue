<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
            <AddComment :AddComments="AddComments" />
            <CommentList :comment="comment" :delID="delID" />
          </div>
        </div>
      </div>
    </header>
    <div class="container"></div>
  </div>
</template>

<script>
import AddComment from "./views/addComment";
import CommentList from "./views/CommentList";
export default {
  name: "App",
  data() {
    return {
      comment: [
        { id: 1, username: "cxd", content: "good" },
        { id: 2, username: "cms", content: "num" },
      ],
    };
  },
  components: {
    AddComment,
    CommentList,
  },
  methods: {
    AddComments(comments) {
      this.comment.push({ ...comments, id: Date.now() });
    },
    delID(id) {
      this.comment = this.comment.filter((comment) => {
        return comment.id !== id;
      });
    },
  },
};
</script>

<style>
</style>