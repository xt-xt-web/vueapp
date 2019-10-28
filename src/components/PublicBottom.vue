<template>
	<div class="publicbottom">
		<div class="bottomtop">
			<div class="logoer">
				<img class="bottomlogo" src="../assets/logo1.png"/>
				<div class="bottomtext">
					<a href="#">联系我们</a>
					<a href="#">加入我们</a>
					<a href="#">关于我们</a>
				</div>
				<p class="p1">Copyright © 2015 智医疗网 All rights reserved </p>
				<p>京ICP备14056780号</p>
			</div>
			<div class="erweimabox">
				<img class="erweima" src="http://www.mhealthchina.org/wp-content/uploads/2015/08/2015081903071622.jpg"/>
				<br />
				<p>搜索“智医疗”</p>
				<p>或扫描二维码</p>
			</div>
			
		</div>
		<div class="bottombottom"">
			<div>
				<span>友情链接：</span>
				<div class="abox">
					<a href="#">CHIMA</a>
					<a href="#">中华医学会</a>
					<a href="#">中国中医科学院</a>
					<a href="#">中国信息通信研究院</a>
					<a href="#">中国健康促进基金会</a>
					<a href="#">中国健康管理协会</a>
					<a href="#">中国医学科学院</a>
					<a href="#">中国医院协会</a>
					<a href="#">中国卫生信息学会</a>
					<a href="#">中国妇女发展基金会</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	a {
		color: #6F6F6F;
		text-decoration: none;
	}
	/*底部中上面部分的前面部分*/
	.publicbottom {
		width: 100%;
		height: 400px;
		background-color: #313131;
	}
	.bottomtop {
		width: 80%;
		height: 250px;
		margin: 0 auto;
		/*background-color: red;*/
		display: flex;
		justify-content: space-between;
	}
	
	.logoer {
		width: 400px;
		color: #6F6F6F;
		margin-top: 40px;
	}
	.bottomlogo {
		width: 250px;
		height: 100px;
	}
	.bottomtext {
		width: 250px;
		height: 30px;
		line-height: 30px;
		/*background-color: #000000;*/
		display: flex;
		justify-content: space-around;
	}
	
	.logoer>p {
		margin-left: 8px;
		margin-top: 8px;
	}
	/*二维码部分*/
	.erweimabox {
		width: 120px;
		height: 180px;
		/*background-color: teal;*/
		margin-top: 40px;
		text-align: center;
		color: #6F6F6F;
	}
	.erweima {
		width: 120px;
		height: 120px;
	}
	/*最后部分*/
	.bottombottom {
		width: 80%;
		height: 150px;
		margin: 0 auto;
		color: #6F6F6F;
	}
	.abox {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
	}
	.bottombottom a {
		display: inline-block;
		width: 204px;
		font-size: 14px;
	}
	.bottombottom span {
		/*color: black;*/
	}
</style>