<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delComments">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.username }}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  name: "CommontItem",
  props: ["comment", "delComment"],
  methods: {
    delComments() {
      console.log(this.comment, "comment");
      let { id,username } = this.comment;
      //警告
      if (confirm(`您确定删除${username}说`)) {
        this.delComment(id);
      }
    },
  },
};
</script>

<style lang='less'>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>