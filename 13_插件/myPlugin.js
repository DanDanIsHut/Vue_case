/* 
  插件：拓展某种功能，必须依赖于某个框架
  定义Vue的插件：扩展Vue的功能
    - 扩展全局功能：将来通过Vue使用的功能(给Vue自身添加)
    - 扩展局部功能：将来通过Vue的实例（vm/this）使用的功能(给prototype上添加)
  

  方式：
      1. 对象形式
      2. 函数形式
  
  使用/安装插件
    Vue.use(插件名)    
    注意: 先安装插件，在new Vue

*/

//对象形式
const myPlugin = {};
//扩展Vue的功能
myPlugin.install = function(Vue) {
	//扩展全局功能
	Vue.globalMethod = function() {
		console.log('globalMethod()');
	};

	//扩展局部  $localMethod自己定义，因为是Vue实例上添加，所以加$符
	Vue.prototype.$localMethod = function() {
		console.log('$localMethod()');
	};

	//自定义指令
	Vue.directive('uper-case', function(el, binding) {
		el.textContent = binding.value.toUpperCase();
	});

	//自定义过滤器
	Vue.filter('changeDate', function(value,str) {
		return dayjs(value).format(str);
	});
};
