<template>
	<div class="photo-1" ref="slider">
		<div class="photo-1-1"></div>
		<div class="photo-1-2"></div>
	</div>
</template>
<script>
export default {
	name: 'Photo1',
	data() {
		return {
			slideTime: 15000,
		};
	},
	mounted() {
		let photo1Interval = setInterval(() => {
			this.sliderShow();
		}, this.slideTime);
	},
	methods: {
		sliderShow() {
			let photo1 = this.$refs.slider;

			if (photo1.style.top == '-100%') {
				photo1.style.top = '0%';
			} else if (photo1.style.top == '0%' || photo1.style.top == 0) {
				photo1.style.top = '-100%';
			}
		},
	},
};
</script>
<style scoped>
.photo-1 {
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
	height: 200%;
	top: -100%;
	transition: 2s;
}
.photo-1-1 {
	height: 50%;
	width: auto;

	background-image: url('../assets/home-images/prop-1.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.photo-1-2 {
	height: 50%;
	width: auto;
	background-image: url('../assets/home-images/codelpa-edif-exterior-2.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
