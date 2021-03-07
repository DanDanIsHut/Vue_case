export default {
	//只读计算属性，通过count的值计算出奇偶
	parity(state) {
		return state.count & (1 === 1) ? '奇数' : '偶数';
	}
};
