import Vue from 'vue';
import App from './App.vue';

new Vue({
	render: (h) => h(App),
	//因为要从App里将数据传到Search里，它两是兄弟关系，用全局事件总线
	//要在页面没有渲染前定义
	beforeMount() {
		Vue.prototype.$Bus = this;
	}
}).$mount('#app');
