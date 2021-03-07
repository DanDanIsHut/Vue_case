<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="comments.username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="comments.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="submit"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* 因为data的原数据是响应式的，所以改data的数据，其他页面的数据也会自动改 */
export default {
  name: "AddCommont", //目的是为了在调试工具上能够看到
  data() {
    return {
      comments: {
        username: "",
        content: "",
      },
    };
  },
  props: ["Addsubmit"],
  methods: {
    submit() {
      let { username, content } = this.comments;
      //判断输入的内容有空则弹出说明
      if (!username.trim() || !content.trim()) {
        alert("请输入相对应的内容");
        return;
      }
      this.Addsubmit(this.comments);

      this.comments.username = "";
      this.comments.content = "";
    },
  },
};
</script>

<style lang='less'>
</style>