import Vue from 'vue';
import App from './App.vue';

//将路由表导入使用
import router from './router';

new Vue({
	render: (h) => h(App),
	/* router:router 
     属性名为router
  */
	router
}).$mount('#app');
