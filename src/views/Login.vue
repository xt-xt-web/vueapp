<template>
	<div>
		<top-menu></top-menu>
		<div class="myform">
			<!--上部文字-->
			<div class="userlogin">
				<br />
				<h1>用户登陆</h1>
				<br />
				<h3>欢迎回来</h3>
			</div>
			<!--elementui库 表单-->
			<div class="formbox">
				<el-form 
				:model="ruleForm" 
				:rules="rules" 
				ref="ruleForm" 
				label-width="100px" 
				class="demo-ruleForm">
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
			<!--三方-->
			<div class="sanfang">
				<span>使用三方账号登陆</span>
				<div>
					<span class="el-icon-question"></span>
					<span class="el-icon-info span2"></span>
				</div>
				<p>还没有账号？<a href="#">立即创建</a></p>
				<p>遇到问题？<a href="#">忘记密码</a></p>
			</div>
		</div>
		<public-bottom></public-bottom>
	</div>
</template>

<style>
	.myform {
		width: 400px;
		height: 500px;
		margin: 0 auto;
		margin-top: 50px;
		background-color: #F7F7F7;
		margin-bottom: 30px;
	}
	.userlogin {
		height: 130px;
		text-align: center;
	}
	.formbox {
		width: 350px;
		height: 220px;
	}
	.sanfang {
		height: 139px;
		margin-top: 10px;
		/*background-color: red;*/
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.sanfang>div {
		margin: 5px 0;
		font-size: 40px;
	}
	.span2 {
		margin-left: 15px;
	}
</style>

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

