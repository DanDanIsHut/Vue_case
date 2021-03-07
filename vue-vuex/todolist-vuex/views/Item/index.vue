<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <input type="checkbox" v-model="changeIsDone" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del_todo">
      删除
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Item",
  props: ["todo"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    ...mapMutations(["ISDONE_TYPE", "SINGLE_REMOVE"]),
    del_todo() {
      this.SINGLE_REMOVE(this.todo.id);
    },
  },
  computed: {
    //获取当前isDone的状态
    changeIsDone: {
      get() {
        return this.todo.isDone;
      },
      set() {
        //通过状态获取当前的id,并将id作为参数
        this.ISDONE_TYPE(this.todo.id);
      },
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>