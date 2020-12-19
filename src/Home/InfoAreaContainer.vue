<template>
	<div class="info-area-container" ref="slider">
		<div class="white-area-info">
			<InfoArea
				descripcion="Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit eaque ipsa quae ab illo inventore veritatis 
            et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem"
				:isDark="false"
			/>
		</div>
		<div class="dark-area-info">
			<InfoArea
				descripcion="Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit eaque ipsa quae ab illo inventore veritatis 
            et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem"
				:isDark="true"
			/>
		</div>
	</div>
</template>
<script>
import InfoArea from './InfoArea';
export default {
	name: 'InfoAreaContainer',
	components: {
		InfoArea,
	},
	data() {
		return {
			slideTime: 15000,
			textInterval: null,
		};
	},
	mounted() {
		this.textInterval = setInterval(() => {
			this.sliderShow();
		}, this.slideTime);
	},
	beforeDestroy() {
		console.log('Destroying text interval');
		clearInterval(this.textInterval);
	},
	methods: {
		sliderShow() {
			let texto = this.$refs.slider;

			if (texto.style.marginLeft == '0%' || texto.style.marginLeft == 0) {
				texto.style.marginLeft = '-100%';
			} else if (texto.style.marginLeft == '-100%') {
				texto.style.marginLeft = '0%';
			}
		},
	},
};
</script>
<style scoped>
.info-area-container {
	display: flex;
	width: 200%;
	height: 100%;
	/* margin-left: -100%; */
	margin-left: -100%;
	transition: 2s;
}
.white-area-info {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 50%;
	height: 100%;
	background-color: #333333;
	background-image: url('../assets/icons/arq-cutted.svg');
	background-size: 35%;
	background-position: 100%;
	background-repeat: no-repeat;
}
.dark-area-info {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 50%;
	height: 100%;
	background-color: #ffffff;
	background-image: url('../assets/icons/arq-cutted.svg');
	background-size: 35%;
	background-position: 100%;
	background-repeat: no-repeat;
}
</style>
