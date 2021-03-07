//入口文件
//导入 vue和App
import Vue from 'vue';
import App from './App.vue';

new Vue({
	//render内部将组件解析渲染到页面上
	render: (h) => h(App)
}).$mount('#app');
