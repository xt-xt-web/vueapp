<template>
	<div>
		<top-menu></top-menu>
		<div class="myform">
			<!--elementui库 表单-->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名：" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="密码：" prop="password">
					<el-input v-model="ruleForm.password"></el-input>
				</el-form-item>
				<el-form-item label="记住密码" prop="delivery">
					<el-switch v-model="ruleForm.delivery"></el-switch>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			//进行自定义验证
			function passRule(rule,value,callback){
				//验证成功之后回调callback函数
				if((/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*_+).{6,16}$/img).test(value)){
					callback();
				}else {
					callback(new Error("请输入6-16位数字字母下划线密码"))
				}
			};
			return {
				ruleForm: {
					name: '',
					password:'',
					delivery: false,
					
				},
				//这是父
				rules: {
					name: [{
							//设置是否可以为空
							required: true,
							//提升信息
							message: '请输入用户名',
							//设置失去焦点时就进行验证
							trigger: 'blur'
						},
						{
							//验证输入长度
							min: 6,
							max: 11,
							message: '长度在 6 到 11 个字符',
							trigger: 'blur'
						}
					],
					password: [
						{required: true,message: '请输入密码',trigger: 'blur'},
						{min: 6,max: 16,message: '长度在 6 到 16 个字符',trigger: 'blur'},
						//添加自定义验证规则
						{validator: passRule,trigger:'blur'}
					]
				},
			};
		},
		methods: {
			submitForm(formName) {
				//验证
				this.$refs[formName].validate((valid) => {
					if(valid) {//成功  跳转
						this.axios.post("/login",{
							username:this.ruleForm.name,
							password:this.ruleForm.password
						})
						.then((response)=>{
							if(response.data.status==1){
								this.$router.push({path:'/'})
								//this.loginInfo=false
								//执行状态保存里面的函数
								this.$store.commit('changeLogin',false)
								localStorage.setItem('logindata',true)

							}else {
								this.$message(`${response.data.msg}`)
							}
						})
						.catch(function (error){
							console.log(error)
						})
						
					} else {
						console.log('前端验证失败');
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
	.myform {
		width: 400px;
		margin: 0 auto;
		margin-top: 50px;
	}
</style>