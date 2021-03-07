import Vue from 'vue';
import App from './App.vue';

import store from './store';

new Vue({
	render: (h) => h(App),
	//应用store
	store
}).$mount('#app');
