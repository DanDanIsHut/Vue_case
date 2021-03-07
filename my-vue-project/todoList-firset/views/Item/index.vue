<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <!-- 这样在Item页面直接通过props修改了源数据的数据，不建议使用 -->
      <!--  <input type="checkbox" v-model='todo.isDone' /> -->
      <!-- input事件(v->M) & :value(M->V) -->
      <input type="checkbox" v-model="modifyIsDown" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delSingle">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "UpderIsDone", "delEvent"],
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    modifyIsDown: {
      get() {
        //获取页面的数据
        // input事件(v->M)
        console.log(this.todo.isDone);
        return this.todo.isDone;
      },
      set() {
        // 监听数据
        // :value(M->V)
        this.UpderIsDone(this.todo.id);
      },
    },
  },
  methods: {
    delSingle() {
      this.delEvent(this.todo.id);
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