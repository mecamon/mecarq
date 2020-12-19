<template>
	<div class="photo-2" ref="slider">
		<div class="photo-2-1"></div>
		<div class="photo-2-2"></div>
	</div>
</template>
<script>
export default {
	name: 'Photo2',
	data() {
		return {
			slideTime: 15000,
			photo2Interval: null,
		};
	},
	mounted() {
		this.photo2Interval = setInterval(() => {
			this.sliderShow();
		}, this.slideTime);
	},
	beforeDestroy() {
		clearInterval(this.photo2Interval);
	},
	methods: {
		sliderShow() {
			let photo2 = this.$refs.slider;

			if (photo2.style.top == '0%') {
				photo2.style.top = '-100%';
			} else {
				photo2.style.top = '0%';
			}
		},
	},
};
</script>
<style scoped>
.photo-2 {
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
	height: 200%;
	top: 0%;
	transition: 2s;
}
.photo-2-1 {
	height: 50%;
	width: auto;
	background-image: url('../assets/home-images/codelpa-edif-exterior-1.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.photo-2-2 {
	height: 50%;
	width: auto;
	background-image: url('../assets/home-images/rheum-social-2.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
