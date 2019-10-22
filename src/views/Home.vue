<template>
	<div>
		<top-menu></top-menu>
		<!--<div class="rotationchart">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in 4" :key="item">
				<span>{{item}}</span>
				</el-carousel-item>
			</el-carousel>
		</div>	-->
		<public-bottom></public-bottom>
	</div>
</template>

<script>

	
</script>

<style>
	/*轮播图*/
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>