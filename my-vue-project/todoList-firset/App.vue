<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addContent="addContent" />
      <List :todo="todo" :UpderIsDone="UpderIsDone" :delEvent="delEvent" />
      <Footer
        :AllNum="AllNum"
        :Allchecks="Allchecks"
        :delAllIsDone="delAllIsDone"
        :AllComplate="AllComplate"
      />
    </div>
  </div>
</template>

<script>
import Header from "./views/Hearder";
import Footer from "./views/Footer";
import List from "./views/List";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    List,
  },
  data() {
    return {
      todo: [
        { id: 1, content: "ccc", isDone: false },
        { id: 2, content: "xx", isDone: false },
        { id: 3, content: "dd", isDone: false },
      ],
    };
  },
  methods: {
    //增加内容
    addContent(content) {
      // this.todo.push({ id: Date.now(), content, isDone: false });
      this.todo.unshift({ id: Date.now(), content, isDone: false });
    },
    //改变isDone的值
    UpderIsDone(id) {
      console.log(id);
      let tod = this.todo.find((tod) => {
        return tod.id === id;
      });
      tod.isDone = !tod.isDone;
    },
    //删除单个
    delEvent(id) {
      this.todo = this.todo.filter((item) => {
        return item.id !== id;
      });
    },

    //总按钮
    Allchecks(isDone) {
      //如果有一个isDone为false就不选中
      this.todo.forEach((item) => {
        return (item.isDone = isDone);
      });
    },

    //删除全部已完成的
    //isDone为true就删除,filter保留满足条件的
    delAllIsDone() {
      this.todo = this.todo.filter((item) => !item.isDone);
    },
  },
  computed: {
    //计算总数  只读
    AllNum() {
      return this.todo.length;
    },

    //计算已完成的数  只读
    //通过isDone，如果为true就加1，如果为false就不加
    AllComplate() {
      //reduce累加器
      return this.todo.reduce((acc, cur) => {
        return acc + (cur.isDone ? 1 : 0);
      }, 0);
    },
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>