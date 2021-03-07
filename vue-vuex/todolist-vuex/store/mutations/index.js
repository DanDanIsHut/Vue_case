export default {
	//输入的内容添加，因为不涉及请求，处理之类的直接用组件触发当前函数
	ADD_TODO(state, content) {
		state.todos.push({ id: Date.now(), content, isDone: false });
	},

	//设置isDone的值
	ISDONE_TYPE(state, id) {
		const todo = state.todos.find((todo) => {
			return todo.id === id;
		});
		todo.isDone = !todo.isDone;
	},
	//点击删除
	SINGLE_REMOVE(state, id) {
		state.todos = state.todos.filter((todo) => {
			return todo.id !== id;
		});
	},

	//点击已完成旁边的check全部选中
	SINGL_CHECKBOX(state, isDone) {
		state.todos.forEach((item) => {
			return (item.isDone = isDone);
		});
	},

	//全部删除
	//纠正;用isDone来做判断,因为是true就会被删除
	ALL_DEL(state) {
		state.todos = state.todos.filter((item) => {
			return !item.isDone;
		});
	}
};
