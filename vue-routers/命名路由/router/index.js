//配置路由表
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import About from '../views/About';
import Message from '../views/Message';
import News from '../views/News';
import Detail from '../views/Detail';

//使用vue-router插件
Vue.use(VueRouter);

//router是一个实例，不需要大写
//只有组件和构造函数要首字母大写
const router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home,
			//配置子路由，写一个children属性
			//第一种方法
			children: [
				{
					path: '/home/message',
					component: Message,
					children: [
						{
							name: 'detail',
							//后面加:id表示能匹配多个路径
							path: 'detail/:id',
							component: Detail
						}
					]
				},
				{
					//第二种写法
					//	path这里不用加/，否则会出问题
					path: 'news',
					component: News
				},
				{
					path: '/',
					//不用加/会自动找到前面父路由的地址
					redirect: 'message'
				}
			]
		},
		{
			path: '/about',
			component: About
		},
		{
			//配置默认路由 一般在最下面
			path: '/',
			//重定向
			redirect: '/home'
		}
	]
});

//默认暴露出去
export default router;
