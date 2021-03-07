
export default {
	//判断数据是否符合要求，符合就触发mutations
	incrementOfAdd(store,num) {
		if ((store.state.count & 1) === 0) return;
		store.commit('INCREMENT', num);
	},
	//发送请求之类要放在actions里面
	incrementAsync(store,num) {
		setTimeout(() => {
			store.commit('INCREMENT', num);
		}, 1000);
	}
};
