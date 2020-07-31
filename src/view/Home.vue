<template>
	<div style="padding-top: 100px;">
		
		
		<div>
			<el-carousel :interval="4000" type="card" height="300px">
				<el-carousel-item v-for="item in img" :key="item">
					<el-image :src='item' class="image"></el-image>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div>
			{{blog}}
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				img: [
					'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
					require("../../public/img/01.jpg"),
					require("../../public/img/02.jpg"),
					require("../../public/img/03.jpg"),
					require("../../public/img/04.jpg"),
					require("../../public/img/05.jpg"),
				],
				blog:'踏雪千里，梅香自溢。读书百遍，真理自现',
			}
		}
	}
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.img01 {
		height: 150px;
		width: 300px;
	}
</style>
