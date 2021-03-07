<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="check" />
    </label>
    <span>
      <span>已完成 {{ compulate }}</span> / 全部 {{ all_compulate }}
    </span>
    <button class="btn btn-danger" @click="del">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["all_compulate", "compulate"]),

    check: {
      get() {
        return this.compulate === this.all_compulate;
      },
      set(newVal) {
        console.log(newVal)
        this.DEL_ALLISDONE(newVal);
      },
    },
  },
  methods: {
    ...mapMutations(["DEL_ALLISDONE", "BATCH_TODOS"]),
    del() {
      this.BATCH_TODOS();
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