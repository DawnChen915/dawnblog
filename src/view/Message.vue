<template>
	<div>
		<br>
		<br>

		<p> this is my message</p>
		
		<p>{{message}}</p>
		<div>
			<el-input type="text" name="bloginput" label="请输入">
				请输入
			</el-input>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: '',
			}
		}
	}
</script>


<style>
	.edit {
		border-radius: 5xp;
		width: 80%;
		height: 80%;

	}
	.el-input{
		width: 80%;
		height: auto;
	}
	
</style>
