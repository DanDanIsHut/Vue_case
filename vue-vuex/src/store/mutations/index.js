export default {
	ADD_CONTENT(state, content) {
		state.todos.push({ id: Date.now(), content, isDone: false });
	},

	CHANGE_ISDONE(state, id) {
		const todo = state.todos.find((item) => {
			return item.id === id;
		});
		todo.isDone = !todo.isDone;
		console.log(todo.isDone);
	},

	DEL_LIST(state, id) {
		state.todos = state.todos.filter((item) => {
			return item.id !== id;
		});
	},

	DEL_ALLISDONE(state, isDone) {
		state.todos.forEach((item) => {
			return (item.isDone = isDone);
		});
		//console.log(isDone);
	},

	BATCH_TODOS(state) {
		state.todos = state.todos.filter((item) => {
			return (item.isDone = !item.isDone);
		});
	}
};
