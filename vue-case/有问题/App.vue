<template>
  <div>
    <p>App</p>
    <!-- 默认插槽 -->
    <!-- 
        用A包裹着可以传递多条数据
     -->
    <A>
      我是App，要将数据传给A <br />

      <h2>这里有多条数据</h2>
    </A>
    <!-- 
        <A/>只能用来传递一条数据，不建议使用
     -->
    <!-- <A/><h2>我是App，要将数据传给A</h2> -->

    <!-- 具名插槽/命名插槽 -->
    <!-- 必须在外面套一层template -->
    <B>
      <!-- 旧写法  已废弃 -->
      <template slot="H4">
        <h4>我是具名插槽</h4>
      </template>
      <!-- <template v-slot:H4>
        <h4>我是具名插槽</h4>
      </template> -->

      <!-- 简写 -->
      <!--  <template #H4>
        <h4>我是具名插槽</h4>
      </template> -->
    </B>

    <!-- 作用域插槽 -->
     <!--slotProps接收自组件传来的数据,是一个对象，对象里就是接收的数据  -->
    <C>
      <template #conment="slotProps">
        <h3>作用域插槽{{ slotProps }}</h3>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";
export default {
  name: "App",
  components: {
    A,
    B,
    C,
  },
};
</script>

<style>
</style>