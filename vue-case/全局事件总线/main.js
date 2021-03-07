import Vue from 'vue';

import App from './App';

//全局事件总线原理：
//要给vue原型上添加一个可以绑定/触发事件的对象。这样所有组件实例对象都能够通过原型的方法继承得到这个对象，在传数据的时候就不用一代一代传递

//Vue.prototype.$globalEventBus = new Vue();
//因为new Vue()里面没有执行

/* 
全局事件总线：
		适用于任意组件通信
		通常用于兄弟和祖孙组件，父子还是用props
		
		使用：
			1. 给Vue的原型上添加全局事件总线对象
				Vue.prototype.$globalEventBus = new Vue();

				beforeCreate() {
				 	Vue.prototype.$globalEventBus = this;
				},
			
			2. 使用
				绑定事件（接受数据方）
					mounted() {
						this.$globalEventBus.$on(事件名, (形参)=>{})
					}
				触发事件（发送数据方）[需要触发什么事件去发生数据]
					this.$globalEventBus.$emit(事件名, 参数1, 参数2...)


*/

new Vue({
	beforeCreate() {
		//Vue对象的显示原型对象上的prototype
		Vue.prototype.$globalEventBus = this;
	},
	render: (h) => h(App)
}).$mount('#app');
