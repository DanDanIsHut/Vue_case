<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="all_accompulish" />
    </label>
    <span>
      <span>已完成{{ accompulish }}</span> / 全部{{ all_date }}
    </span>
    <button class="btn btn-danger" @click="del">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["all_date", "accompulish"]),

    all_accompulish: {
      get() {
        return this.all_date > 0 && this.accompulish === this.all_date;
      },
      set(newVal) {
        //已完成旁边的checkbox为true，所有的checkbox都为true
        this.SINGL_CHECKBOX(newVal);
      },
    },
  },
  methods: {
    ...mapMutations(["SINGL_CHECKBOX", "ALL_DEL"]),

    del() {
      this.ALL_DEL();
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