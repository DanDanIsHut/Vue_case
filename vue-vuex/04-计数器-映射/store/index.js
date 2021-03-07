import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//使用Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
	//配置对象
	state,
	getters,
	// 一个包含n个用来间接修改数据的函数对象
	actions,
	// 一个包含n个用来直接修改数据的函数对象
	// 状态一旦修改，state管理的数据也会修改，vuex数据都是响应式的，所以页面也会自动更新
	mutations
});

export default store;
