/* 
//写一个全局事件总线事件的封装 

用
on  绑定持续事件
once 绑定一次事件
off 解绑事件
emit 触发事件

on绑定事件，创建回调函数，等emit触发事件，将参数传给on，后调用on里的回调函数

[
    {eventName,cb},
    {eventName,cb},
    {eventName,cb}
]

*/

class Event {
	constructor() {
		this._event = [];
	}

	on(eventName, cb) {
		//{ eventName:eventName, cb:cb }
		this._event.push({ eventName, cb });
	}

	once(eventName, cb) {
        
		const fn = (...args) => {
			cb(args);
			this.off(eventName, fn);
		};
		this.on(eventName, fn);
	}

	off(eventName) {
		//遍历每项过滤
		this._event.filter((item) => {
			return item.eventName !== eventName;
		});
	}

	emit(eventName, ...args) {
		//遍历里面每一项，找到相同的eventName值，触发
		this._event.forEach((item) => {
			item.eventName === eventName;
			//触发函数
			item.cb(...args);
		});
	}
}

const bus = new Event();

bus.on('aa', function(a) {
	console.log(a, 'on');
});
bus.emit('aa', 1111);
