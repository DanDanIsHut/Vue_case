import Vue from 'vue';
import App from './App';

new Vue({
	render: (h) => h(App),
	//创建在beforeCreate函数里
	beforeMount() {
		//全局事件总线
		Vue.prototype.$bus = this;
	}
}).$mount('#app');
