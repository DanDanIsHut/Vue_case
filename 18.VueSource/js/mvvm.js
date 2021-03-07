//MVVM是一个构造函数，new调用
function MVVM(options) {
	this.$options = options;
	var data = (this._data = this.$options.data);
	var me = this; //this指向实例对象

	// 数据代理
	// 实现 vm.xxx -> vm._data.xxx
	Object.keys(data).forEach(function(key) {
		//遍历属性名，将属性名作为参数传入_proxy中
		me._proxy(key);
	});

	//数据劫持
	observe(data, this);

	debugger;
	//模板编译
	//如果没有options.el就用document.body
	this.$compile = new Compile(options.el || document.body, this);
}

MVVM.prototype = {
	$watch: function(key, cb, options) {
		new Watcher(this, key, cb);
	},

	_proxy: function(key) {
		var me = this;
		//将key值作为一个属性定义在MVVM(原型对象上)上，这时候只定义了key值，没有value值
		Object.defineProperty(me, key, {
			configurable: false,
			enumerable: true,
			//当使用了this.key的时候自动调用get和set方法，完成key：value
			get: function proxyGetter() {
				return me._data[key];
			},
			set: function proxySetter(newVal) {
				me._data[key] = newVal;
			}
		});
	}
};
