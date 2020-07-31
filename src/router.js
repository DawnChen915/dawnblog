import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home'
import Blog from './view/Blog'
import Message from './view/Message'

import Login from './view/Login'


Vue.use(VueRouter)

let router = new VueRouter({
	routes: [{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/blog',
			component: Blog,
			name: 'blog'
		},
		{
			path:'/message',
			component:Message,
			name:'message'
		},
		{
			path:'/login',
			component:Login,
			name:'login'
		}
	]
})
export default router
