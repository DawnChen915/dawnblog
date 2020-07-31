<template>
	<dir style="padding-top: 100px;">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="邮箱" prop="Email">
				<el-input type="email" v-model="ruleForm.Email" autocomplete="on"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="Pass">
				<el-input type="password" v-model="ruleForm.Pass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</dir>
</template>

<script>
	export default {
		data() {
			var validateEmail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			
		
			return {
				ruleForm: {
					Email:'',
					Pass: '',
				},
				rules: {
					Email: [{
						validator: validateEmail,
						trigger: 'blur'
					}],
					Pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
				
				
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
.el-input{
	width: 300px;
}
.el-form { 
  margin: auto;
  width: 70%;
}

</style>
