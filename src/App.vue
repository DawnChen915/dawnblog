<template>
	<div id="app">
		<div>
			<el-container class="container">
				<el-header>
					<h1 style="text-align: center;">
					{{title}}
					</h1>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="1">
							<router-link to="/">
								首页
							</router-link>
						</el-menu-item>
						<el-menu-item index="2">
							<router-link to='/blog'>
								blog
							</router-link>
						</el-menu-item>
						<el-menu-item index="3">
							<router-link to='/message'>
								消息中心
							</router-link>
						</el-menu-item>
						<el-menu-item index="4" style="float: right;">
							<router-link to='/login'>
								登录
							</router-link>
						</el-menu-item>
					</el-menu>
				</el-header>
				<el-main>
					<!-- 切换页面的  -->
					<router-view></router-view>
				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';
	import Vue from 'vue'
	Vue.use(ElementUI)
	export default {
		data() {
			return {
				title: 'myblog',
				
			}
		}

	}
</script>

<style>
#app{
	background-color: #99A9BF;
}
.el-menu{
	background-color: #475669;
}
</style>
