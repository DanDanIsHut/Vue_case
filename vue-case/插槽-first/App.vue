<template>
  <div>
    <!-- 
       
      插槽：用来父子组件间通信（通信的是标签数据）

        1. 默认插槽
          - 父组件给子组件设置要传递的标签数据
            <Child>xxx</Child>
          - 子组件声明使用
            <slot />  
        2. 具名插槽
          - 父组件给子组件设置要传递的标签数据
            <Child><template v-slot:xxx>xxx</template></Child>
            <Child><template #xxx>xxx</template></Child>
          - 子组件声明使用
            <slot name="xxx"/>
        3. 作用域插槽
          - 父组件给子组件设置要传递的标签数据
            <Child><template v-slot:xxx="{ yyy }">xxx</template></Child>
          - 子组件声明使用
            <slot name="xxx" :yyy="yyy" /> 
     -->

    <p>App .....</p>
    <!-- 默认插槽 -->
    <A>
      <h2>这个是默认插槽</h2>
    </A>

    <!-- 具名插槽  旧写法 -->
    <B>
      <div slot="Div">这是具名插槽1</div>
      <h3 slot="H3">这是具名插槽2</h3>
    </B>

    <B>
      <!--新写法 使用v-slot指令时要在外层写一个template包裹起来 -->
      <!-- 给个名字 -->
      <template v-slot:To>
        <div>这是具名插槽3 {{ num }}</div>
        <h3>这是具名插槽4</h3>
      </template>
    </B>

    <B>
      <!-- 简写 -->
      <!-- 直接写号加名字  #名字 -->
      <template #To>
        <div>这是具名插槽5</div>
        <h3>这是具名插槽6</h3>
      </template>
    </B>

    <!-- 作用域插槽 -->
    <C>
      <!--slotProps接收自组件传来的数据,是一个对象，对象里就是接收的数据  -->
      <!-- <template #content="slotProps">
        <p>count的值 {{ slotProps }}</p>
      </template> -->

      <template #content="{ count }">
        <p>count的值:{{ count }}</p>
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
  data() {
    return {
      num: 0,
    };
  },
  components: {
    A,
    B,
    C,
  },
};
</script>

<style>
</style>