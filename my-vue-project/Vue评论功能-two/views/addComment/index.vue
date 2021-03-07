<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="comtents.username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          v-model="comtents.content"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="AddSubmit"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddComment",
  data() {
    return {
      comtents: {
        username: "",
        content: "",
      },
    };
  },
  props: ["AddComments"],
  methods: {
    AddSubmit() {
      //解构是重新定义了一个值，相当于a=a，名字一样，但并不是原来的数据，所以清除解构后的数据不会让页面更新
      let { username, content } = this.comtents;
      //判断输入的内容是否为空
      if (!username || !content) {
        alert("请输入相应的内容");
        return;
      }
      this.AddComments(this.comtents);
      //提交后清空，要清除原来的值
      this.comtents.username = "";
      this.comtents.content = "";
    },
  },
};
</script>

<style>
</style>
