export default {
	//全部个数  因为数据是动态展示的，所以每次计算长度要考虑新增的值
	all_date(state) {
		return state.todos.length;
	},
	//判断isDone的值，为true就是已完成，加1
	accompulish(state) {
		//因为涉及到累加，所以用renduce
		return state.todos.reduce((prc, c) => {
			return prc + (c.isDone ? 1 : 0);
		}, 0);
	}
};
