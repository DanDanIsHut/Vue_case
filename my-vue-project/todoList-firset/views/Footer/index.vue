<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="BusCheck" />
    </label>
    <span>
      <span>已完成{{ AllComplate }}</span> / 全部{{ AllNum }}
    </span>
    <button class="btn btn-danger" @click="delTrue">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["AllNum", "AllComplate", "Allchecks", "delAllIsDone"],
  computed: {
    BusCheck: {
      //当已完成的数量和全部的数量相等时就选中
      //全部的数量变成0也不选中
      //complete/finish -> 完成
      get() {
        return this.AllComplate > 0 && this.AllComplate === this.AllNum;
      },
      //如果有一个isDone为false就不选中
      set(Val) {
        this.Allchecks(Val);
      },
    },
  },
  methods: {
    delTrue() {
      this.delAllIsDone();
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>