//函数形式
function myPluginFn(Vue) {
	//全局
	Vue.globaMethod = function() {
		console.log('globaMethod()');
	};
	//局部
	Vue.prototype.$loweMethod = function() {
		console.log('globaMethod()()');
	};
}
