export default {
	all_compulate(state) {
		return state.todos.length;
	},
	compulate(state) {
		return state.todos.reduce((p, c) => {
			return p + (c.isDone ? 1 : 0);
		}, 0);
	}
};
