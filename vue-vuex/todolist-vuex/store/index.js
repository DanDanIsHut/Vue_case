import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
//使用
Vue.use(Vuex);

export default new Vuex.Store({
	//配置对象
	state,
	getters,
	actions,
	mutations
});
