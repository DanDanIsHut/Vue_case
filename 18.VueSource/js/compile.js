//el  是根节点
//vm  是vm的实例
function Compile(el, vm) {
	this.$vm = vm;
	//判断el是不是一个元素节点，是就执行el，不是就获取
	this.$el = this.isElementNode(el) ? el : document.querySelector(el);

	if (this.$el) {
		this.$fragment = this.node2Fragment(this.$el);
		this.init();
		this.$el.appendChild(this.$fragment);
	}
}

Compile.prototype = {
	//在Compile原型上定义方法
	node2Fragment: function(el) {
		//创建一个文档碎片节点
		var fragment = document.createDocumentFragment(),
			child;

		// 将原生节点拷贝到fragment
		//将根节点的子元素赋值给child，
		//当节点被添加到文档碎片中的时候，页面中的DOM节点就会被删除
		//所以永远是第一个节点
		//为true执行里面
		while ((child = el.firstChild)) {
			//将child插入到文档碎片中
			fragment.appendChild(child);
		}
		//文档碎片此时的结构   0-text   1-p  2-text  3-p  4-text
		return fragment;
	},

	init: function() {
		//编译元素
		this.compileElement(this.$fragment);
	},

	compileElement: function(el) {
		//获取根元素下的每个子节点
		var childNodes = el.childNodes,
			me = this;

		//将每个子节点转换成真数组，遍历来获取每个子节点的内容
		[].slice.call(childNodes).forEach(function(node) {
			//获取子节点的内容
			var text = node.textContent;
			//设置一个正则，内容为插值语法的双大括号
			var reg = /\{\{(.*)\}\}/;

			//判断子节点是不是一个元素节点
			if (me.isElementNode(node)) {
				me.compile(node);

				//判断子节点是不是一个文本节点   并且符合正则
			} else if (me.isTextNode(node) && reg.test(text)) {
				//如果符合的话，RegExp.$1：获取正则里的第一个括号里的内容
				me.compileText(node, RegExp.$1);
			}

			//判断当前子节点是否还有子节点(子节点的子节点)，并且子节点的子节点里面有内容
			if (node.childNodes && node.childNodes.length) {
				//符合就执行递归调用，再次执行compileElement()函数,并且将子节点的子节点作为参数
				me.compileElement(node);
			}
		});
	},

	compile: function(node) {
		//获取当前节点的所有属性节点
		var nodeAttrs = node.attributes,
			me = this;

		//将每个属性节点转换成真数组，遍历
		[].slice.call(nodeAttrs).forEach(function(attr) {
			//console.log(attr  );
			//获取每个属性的名字
			var attrName = attr.name;
			//判断属性名是不是一个指令
			if (me.isDirective(attrName)) {
				//获取指令的值  v-on:click='handle'
				var exp = attr.value;
				// 截取属性名得到 on:click  判断是普通指令还是事件指令
				var dir = attrName.substring(2);

				//判断是普通指令还是事件指令
				// 事件指令
				if (me.isEventDirective(dir)) {
					compileUtil.eventHandler(node, me.$vm, exp, dir);
					// 普通指令
				} else {
					compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
				}
				//删除属性名，防止内存泄漏
				node.removeAttribute(attrName);
			}
		});
	},

	//node是#text   exp为{{}}双打括号里面的值
	compileText: function(node, exp) {
		//this.$vm是vm的实例(MVVM的实例)
		compileUtil.text(node, this.$vm, exp);
	},

	isDirective: function(attr) {
		return attr.indexOf('v-') == 0;
	},
	////判断属性名是不是一个指令
	isEventDirective: function(dir) {
		return dir.indexOf('on') === 0;
	},

	isElementNode: function(node) {
		return node.nodeType == 1;
	},

	isTextNode: function(node) {
		return node.nodeType == 3;
	}
};

// 指令处理集合
var compileUtil = {
	//node是#text   exp为{{}}双打括号里面的值
	//this.$vm是vm的实例(MVVM的实例)
	text: function(node, vm, exp) {
		this.bind(node, vm, exp, 'text');
	},

	html: function(node, vm, exp) {
		this.bind(node, vm, exp, 'html');
	},

	model: function(node, vm, exp) {
		this.bind(node, vm, exp, 'model');

		var me = this,
			val = this._getVMVal(vm, exp);
		node.addEventListener('input', function(e) {
			var newValue = e.target.value;
			if (val === newValue) {
				return;
			}

			me._setVMVal(vm, exp, newValue);
			val = newValue;
		});
	},

	class: function(node, vm, exp) {
		this.bind(node, vm, exp, 'class');
	},

	bind: function(node, vm, exp, dir) {
		//"text"Updater是更新DOM节点内容的函数
		//将textUpdater这个函数赋值给了updaterFn
		//updaterFn= function(node, value) {node.textContent = typeof value == 'undefined' ? '' : value;}
		var updaterFn = updater[dir + 'Updater'];

		//this._getVMVal(vm, exp)获得了{{key}}的值
		//node  是#text
		updaterFn && updaterFn(node, this._getVMVal(vm, exp));

		new Watcher(vm, exp, function(value, oldValue) {
			updaterFn && updaterFn(node, value, oldValue);
		});
	},

	// 事件处理
	//node 是 #text
	//vm 是vm实例
	//exp  是handle函数
	//dir  是  on:click
	eventHandler: function(node, vm, exp, dir) {
		//得到 click
		var eventType = dir.split(':')[1],
			//判断vm实例上是否有methods方法并且里面是否有函数
			fn = vm.$options.methods && vm.$options.methods[exp];
		//如果有事件和函数
		if (eventType && fn) {
			//给这个属性添加事件，并且将函数的this强制执行vm实例
			node.addEventListener(eventType, fn.bind(vm), false);
		}
	},

	//vm ：是vm的实例(MVVM的实例) exp为{{}}双打括号里面的值
	_getVMVal: function(vm, exp) {
		//val = MVVM原型上的data数据
		var val = vm._data;
		//将exp分割转换成数组，使用.分割是为了遇到person.msg的情况
		exp = exp.split('.');
		//将数组遍历
		exp.forEach(function(k) {
			//val = vm._data[msg]   拿到对象的value
			val = val[k];
		});
		return val;
	},

	_setVMVal: function(vm, exp, value) {
		var val = vm._data;
		exp = exp.split('.');
		exp.forEach(function(k, i) {
			// 非最后一个key，更新val的值
			if (i < exp.length - 1) {
				val = val[k];
			} else {
				val[k] = value;
			}
		});
	}
};

var updater = {
	textUpdater: function(node, value) {
		node.textContent = typeof value == 'undefined' ? '' : value;
	},

	htmlUpdater: function(node, value) {
		node.innerHTML = typeof value == 'undefined' ? '' : value;
	},

	classUpdater: function(node, value, oldValue) {
		var className = node.className;
		className = className.replace(oldValue, '').replace(/\s$/, '');

		var space = className && String(value) ? ' ' : '';

		node.className = className + space + value;
	},

	modelUpdater: function(node, value, oldValue) {
		node.value = typeof value == 'undefined' ? '' : value;
	}
};
