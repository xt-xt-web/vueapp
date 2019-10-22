<template>
	<div>
		<!--最上部分-->
		<div class="topmenutop">
			<img class="log" src="../assets/logo1.png"/>
			<el-menu 
				:default-active="activeIndex" 
				class="el-menu-demo" 
				mode="horizontal" 
				@select="handleSelect">
			  <el-menu-item index="1">首页</el-menu-item>
			  <el-menu-item index="2">资讯</el-menu-item>
			  <el-menu-item index="3">观点</el-menu-item>
			  <el-submenu index="4">
			    <template slot="title">活动</template>
			    <el-menu-item index="4-1">选项1</el-menu-item>
			    <el-menu-item index="4-2">选项2</el-menu-item>
			    <el-menu-item index="4-3">选项3</el-menu-item>
			  </el-submenu>
			  <div class="inputbox">
					<input class="sous" type="text" name="" id="sous"  />
					<label class="label1 el-icon-zoom-in" for="sous"></label>
				</div>
			  <el-submenu class='loginbox' index="5">
					<template slot="title">用户</template>
					<el-menu-item index="5-1"><router-link to='/login'>登陆</router-link></el-menu-item>
					<el-menu-item index="5-2"><router-link to='/reg'>注册</router-link></el-menu-item>
				</el-submenu>
			</el-menu>
			<!--<div class="falselogin" @click="falselogin">退出登陆</div>-->
		</div>
		<!--蓝色导航栏部分-->
		<div>
			<el-menu
			  class="el-menu-demo topmenubutton"
			  mode="horizontal"
			  @select="handleSelect"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  <span class="span1">热门标签:</span>
			  <el-menu-item class='one' index="10-1">健康医疗</el-menu-item>
			  <el-menu-item  index="10-2">互联网+医疗</el-menu-item>
			  <el-menu-item  index="10-3">智慧医疗</el-menu-item>
			  <el-menu-item  index="10-4">医疗大数据</el-menu-item>
			  <el-menu-item  index="10-5">人工智能</el-menu-item>
			  <el-menu-item  index="10-6">医疗信息化</el-menu-item>
			  <el-menu-item index="10-7">移动医疗</el-menu-item>
			  <el-menu-item index="10-8">健康大数据</el-menu-item>
			  <el-menu-item index="10-9">远程医疗</el-menu-item>
			  <el-menu-item index="10-10">分级诊疗</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>


<style>
	/*最上部导航*/
	.log {
		width: 150px;
		height: 55px;
		display: inline-block;
		margin-top: 20px;
	}
	.topmenutop {
		width: 80%;
		position: relative;
		margin: 0 auto;
		height: 100px;
		display: flex;
		justify-content: space-around;
	}
	.el-menu-demo {
		display: inline-block;
		width: 91%;
		background-color:white !important;
		color: red !important;
	}
	.el-menu--horizontal>.el-menu-item {
		height: 100px;
		text-align: center;
		line-height: 100px;
		font-size: 20px;
		background-color:white !important;
		color: black !important;
	}
	.el-menu-demo>li:hover {
		color: blue !important;
	}
	/*登陆注册框*/
	.loginbox {
		position: absolute;
		right: 0;
	}
	/*搜索框*/
	.inputbox {
		position: absolute;
		right: 120px;
		width: 220px;
		height: 100px;
		/*border: 1px solid red;*/
		line-height: 100px;
		font-size: 30px;
	}
	.sous {
		width: 180px;
		height: 30px;
		border: 1px solid blueviolet;
	}
	.label1 {
		position: absolute;
		right: 45px;
		top: 43px;
		background-color: royalblue;
		color: white;
		cursor: pointer;
	}
	/*二级菜单*/
	.el-menu--horizontal>.el-submenu .el-submenu__title {
		height: 100px;
		line-height: 100px;
		font-size: 20px;
		background-color:white !important;
		color: black !important;
	}
	/*中间蓝色导航栏*/
	.topmenubutton {
		margin-top: 10px;
		width: 100%;
		background-color: #2A9EE0 !important;
		height: 50px;
		font-size: 18px;
	}
	.topmenubutton>.el-menu-item {
		background-color: #2A9EE0 !important;
		width: 113px;
		height: 50px;
		line-height: 50px;
		color: white !important;
		font-size: 16px;
		padding: 0 5px 0 5px;
	}
	.topmenubutton>.el-submenu>.el-submenu__title {
		background-color: #2A9EE0 !important;
		height: 50px;
		line-height: 50px;
		color: white !important;
	}
	.span1 {
		display: inline-block;
		height: 50px;
		line-height: 50px;
		position: absolute;
		left: 157px;
		color: white;
	}
	/*第一个*/
	.one {
		margin-left: 16% !important;
	}
	
	
	
	
	/*退出登陆按钮样式*/
	.falselogin {
		display: inline-block;
		width: 100px;
		height: 60px;
		position: absolute;
		top: 0;
		right: 0;
		line-height: 60px;
		text-align: center;
	}
</style>
<script>
	export default {
		data() {
			return {
				//默认页面是否有样式（显示的页面，路由不变）
				activeIndex: '1',
				activeIndex2:'1'
			};
		},
		//用于保存登陆之后的状态，
		computed: {
			info: function() {
				return this.$store.state.loginstate
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath)
				switch(key) {
					case '1':
						//如果当前已经在这个路由了   则不再重复发送这个路由
						if(this.$route.path == '/') {
							return;
						}
						this.$router.push({
							path: '/'
						});
						break;

					case '5':
						this.$router.push({
							path: '/loginreg'
						});
						break;
				}
			},
			falselogin: function() {
				if(confirm("确认删除吗?")) {
					localStorage.clear();
					console.log("localStorage已被清除");
				} else {
					console.log("localStorage未被清除");
				}

			}
		},
		//接收到父级的值
		props: ['myinfo'],
		created() {
			if(this.$route.path == '/loginreg') {
				this.activeIndex2 = '5'
			} else if(this.$route.path == '/') {
				this.activeIndex2 = '1'
			}
		}
	}
</script>