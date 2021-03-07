//一个包含n个用来间接修改数据的函数对象
//actions一般要发送请求等操作时写在这里，
export default {
	//store是vuex自动传过来的参数，store只是一个形参
	/* increment(store) {
		//触发mutation函数
		//console.log(store);
		
		store.commit('INCREMENT', 1);
	}, */
	//{commit}是将commit从store解构出来
	/* deincrement({ commit }) {
		commit('DEINCREMENT', 1);
	}, */
	//一般做写其他的操作都在actions里，mutations只负责改数据
	//{commit,state}是将commit从store解构出来.store对象上有一个state属性
	incrementOfAdd({ commit, state }) {
		/*  //判断奇偶
        if ((state.count & 1) === 0) return;
        commit('INCREMENT', 1); */
		//三元
		state.count % 2 === 1 && commit('INCREMENT', 1);
		console.log(this); //指向Store对象
	},
	incrementAsync({ commit }) {
		setTimeout(() => {
			commit('INCREMENT', 1);
		}, 1000);
	}
};
