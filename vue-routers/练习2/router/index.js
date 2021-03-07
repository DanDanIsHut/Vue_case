//路由表

import VueRouter from 'vue-router';
import Vue from 'vue';

//导入组件
import Home from '../Home';
import About from '../About';
import Message from '../Message';
import News from '../News';
import Detail from '../Detail';

//在用的时候需要安装
Vue.use(VueRouter);

export default new VueRouter({
	//配置对象
	//路由配置项
	routes: [
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail',
							path: 'detail/:id',
							component: Detail
						}
					]
				},
				{
					path: 'news',
					component: News
				},
				{
					path: '/',
					redirect: 'message'
				}
			]
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
});
