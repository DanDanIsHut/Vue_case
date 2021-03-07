<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
            <AddCommont :Addsubmit="Addsubmit" />
            <CommontList :comment="comment" :delComment="delComment" />
          </div>
        </div>
      </div>
    </header>
    <div class="container"></div>
  </div>
</template>

<script>
import AddCommont from "./views/addCommont";
import CommontList from "./views/commontList";
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
  methods: {
    Addsubmit(comments) {
      this.comment.push({ ...comments, id: Date.now() });
    },

    delComment(id) {
      //filter会返回一个新数组，所以要将原来的数据重新赋值这个新数组
      this.comment = this.comment.filter((comment) => comment.id != id);
    },
  },
  //注册组件
  components: {
    AddCommont,
    CommontList,
  },
};
</script>


<style lang='less'>
</style>