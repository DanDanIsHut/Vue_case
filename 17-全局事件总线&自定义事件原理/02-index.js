/* 
//写一个全局事件总线的封装 

用
on  绑定持续事件
once 绑定一次事件
off 解绑事件
emit 触发事件

on绑定事件，创建回调函数，等emit触发事件，将参数传给on，后调用on里的回调函数
可能会存在事件名相同的函数，这样也好依次调用

{
	eventName:[callback,callback,callback],
	eventName:[callback,callback,callback]
}

*/

class Event {
	//要让全局使用，所以定义在原型上
	//执行多个事件，就有多个事件名和回调函数，
	constructor() {
		//定义一个空对象存储
		this._event = {};
	}

	//on绑定事件，
	on(eventName, callback) {
		//判断
		//因为是空对象，所以key值不能一样
		//有就直接在前一个回调的后面加上
		if (this._event[eventName]) {
			//相当于this._event[key] ==> value
			//this._event ={eventName:[callback,callback] }
			this._event[eventName].push(callback);
			return;
		}
		//没有就直接放进去
		/* 
        this._event ={eventName:[callback] }
        */
		this._event[eventName] = [ callback ];
	}
	once(eventName, callback) {
		//如果在this._event={}，{}里没有eventName这个事件名称不执行
		//在里面在定义一个函数，通过on来绑定这个函数
		const cb = (...args) => {
			callback(...args);
			this.off(eventName, cb);
		};
		//一旦emit触发callback(...args)就会自调用
		this.on(eventName, cb);
		//执行一次就是绑定再解绑，但这样就相当于没写
		/* this.on(eventName, callback);
        this.emit(eventName, ...args); */
	}

	off(eventName, callback) {
		//如果在this._event={}，{}里没有这个回调不执行
		if (!this._event[eventName]) return;
		//遍历数组中的回调函数，每一项的值都不等于callback的时候，就过滤掉了
		this._event[eventName] = this._event[eventName].filter((item) => {
			return item !== callback;
		});
	}

	emit(eventName, ...args) {
		//如果在this._event={}，{}里没有这个回调不执行
		if (!this._event[eventName]) return;
		//有的话，遍历this._event={}里找到eventName并且遍历所有的回调
		this._event[eventName].find((item) => {
			item(...args);
		});
	}
}

const bus = new Event();
bus.on('aa', function(a) {
	console.log(a, 'a');
});
bus.emit('aa', 333);
bus.off('aa', function(a) {
	console.log(a);
});
bus.once('bb', function(b) {
	console.log(b, 'b');
});
bus.emit('bb', 222);
