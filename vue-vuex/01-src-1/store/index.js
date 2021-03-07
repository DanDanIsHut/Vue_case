//配置vuex
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

//使用
Vue.use(Vuex);

//调用
//配置对象里要不放模块化的文件，要不就是vuex
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});
