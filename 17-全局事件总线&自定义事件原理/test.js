/**
 * [
    *  {eventName:'add',cb:fn,flag:true},
    *  {eventName:'add',cb:fn,flag:true},
    *  {eventName:'add',cb:fn,flag:false},
   
   ]
 * 
 */
function Bus() {
	let stack = [];
	//let tag = false;
	this.on = function(eventName, cb) {
		stack.push({ eventName, cb });
	};
	this.emit = function(eventName, ...args) {
		const res = stack.find((item) => item.eventName === eventName);
		if (res) {
			res.cb(...args);
		}
		// once事件
	};
	this.off = function(eventName) {
		stack = eventName ? stack.filter((item) => item.eventName !== eventName) : [];
	};
	this.once = function(eventName, cb) {
		// 1. 先绑定事件，在解绑事件
		const fn = () => {
			cb();
			this.off(eventName);
		};
		this.on(eventName, fn);
	};
}
const bus = new Bus();

// bus.on('add', function(...args) {
// 	console.log(...args);
// });
// bus.emit('add', 1, 2, 3);
// bus.off('add');
// bus.emit('add', 1, 2, 3);
bus.once('test', function() {
	console.log(111111);
});
bus.once('test1', function() {
	console.log(222222);
});
bus.on('test2', function() {
	console.log(333333);
});
bus.emit('test');
bus.emit('test');
bus.emit('test');
bus.emit('test');
bus.emit('test1');
bus.emit('test1');
bus.emit('test1');
bus.emit('test2');
bus.emit('test2');
bus.emit('test2');

// function fn(){
//     fn1()
// }
// function fn1(){
//     console.log(1)
// }
// fn()

// button.onclick = function() {};
// 点击 emit
