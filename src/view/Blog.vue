<template>
	<div>

		<br>
		<br><br>

		<h1>this is my blog</h1>
		<link rel="shortcut icon" href="https://www.mdeditor.com/images/logos/favicon.ico" type="image/x-icon" />
		<table style="border:1">
			<tr>
				<td>id</td>
				<td>姓名</td>
				<td>性别</td>
				<td>年龄</td>
			</tr>
			<tr v-for="item in info" :key="item">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.sex}}</td>
				<td>{{item.age}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
						id: 1,
						name: "李四",
						sex: "男",
						age: 22
					},
					{
						id: 2,
						name: "宋晓青",
						sex: "女",
						age: 22
					},
					{
						id: 3,
						name: "杜明汉",
						sex: "男",
						age: 22
					},
					{
						id: 4,
						name: "阿德",
						sex: "男",
						age: 22
					},

				]
			}
		}
	}
</script>

<style>
</style>
