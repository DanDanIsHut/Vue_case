import Vue from 'vue';
import Vuex from 'vuex';

//使用Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
	//配置对象
	//state集中存储数据的仓库(放置所有的vuex数据)
	state: {
		count: 1
	},

	//奇偶数需要通过count来计算判断
	// 存储只读的计算属性数据，getters的数据2必须是state里已经有的
	getters: {
		countType(state) {
			//console.log(this); //undefined,
			return (state.count & 1) === 1 ? '奇数' : '偶数';
		}
	},

	// 一个包含n个用来间接修改数据的函数对象
	actions: {
		//store是vuex自动传过来的参数，store只是一个形参
		increment(store) {
			//触发mutation函数
			store.commit('INCREMENT', 1);
		},
		//{commit}是将commit从store解构出来
		deincrement({ commit }) {
			commit('DEINCREMENT', 1);
		},
		//一般做写其他的操作都在actions里，mutations只负责改数据
		//{commit,state}是将commit从store解构出来.store对象上有一个state属性
		incrementOfAdd({ commit, state }) {
			console.log(store);
			if ((state.count & 1) === 0) return;
			commit('INCREMENT', 1);
		},
		incrementAsync({ commit }) {
			setTimeout(() => {
				commit('INCREMENT', 1);
			}, 1000);
		}
	},
	// 一个包含n个用来直接修改数据的函数对象
	// 状态一旦修改，state管理的数据也会修改，vuex数据都是响应式的，所以页面也会自动更新
	mutations: {
		//一般在mutations里的函数名都是大写的
		//state是原状态数据
		INCREMENT(state, num) {
			state.count += num;
		},
		DEINCREMENT(state, num) {
			state.count -= num;
			console.log(state.count);
		}
	}
});

export default store;
