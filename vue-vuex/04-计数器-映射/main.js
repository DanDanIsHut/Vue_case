import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
	render: (h) => h(App),
	/* store:store  应用vuex,组件就会多一个$store
  */
	store
}).$mount('#app');
