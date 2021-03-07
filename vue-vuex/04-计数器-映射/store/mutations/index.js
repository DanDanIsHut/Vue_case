// 一个包含n个用来直接修改数据的函数对象
	// 状态一旦修改，state管理的数据也会修改，vuex数据都是响应式的，所以页面也会自动更新
export default {
	//一般在mutations里的函数名都是大写的
	//state是原状态数据
	INCREMENT(state, num) {
		state.count += num;
	},
	DEINCREMENT(state, num) {
		state.count -= num;
		console.log(state.count);
	}
};
