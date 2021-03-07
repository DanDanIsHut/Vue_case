//奇偶数需要通过count来计算判断
// 存储只读的计算属性数据，
//getters的数据必须是state里已经有的
export default {
	countType(state) {
		//console.log(this); //undefined,
		return (state.count & 1) === 1 ? '奇数' : '偶数';
	}
};
