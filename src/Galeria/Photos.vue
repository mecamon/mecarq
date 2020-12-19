<template>
	<div class="photos">
		<div ref="images" class="container">
			<img src="../assets/thumb/rheumII-sala-3.jpg" alt="" />
			<img src="../assets/thumb/rheumII-exterior-dia.jpg" alt="" />
			<img src="../assets/thumb/prop-1.jpg" alt="" />
			<img src="../assets/thumb/rheumII-exterior-noche.jpg" alt="" />
			<img src="../assets/thumb/periodismo-1-2.jpg" alt="" />
			<img src="../assets/thumb/rheumII-hab-2.jpg" alt="" />
			<img src="../assets/thumb/periodismo-1-1.jpg" alt="" />
			<img src="../assets/thumb/rheumII-hab-1.jpg" alt="" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'Photos',
	data() {
		return {};
	},
	methods: {
		organizeImages() {
			let images = this.$refs.images.childNodes;

			images.forEach(image => {
				let ratio = image.naturalHeight / image.naturalWidth;

				if (ratio < 0.5) {
					image.classList.add('w-2');
				} else if (ratio > 1.2) {
					image.classList.add('h-2');
				}
			});
		},
	},
	mounted() {
		this.organizeImages();
	},
};
</script>
<style scoped>
.container {
	padding: 5rem;
	margin-top: 5rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 300px 280px;
	grid-auto-flow: row dense;
	gap: 10px;
}
@media only screen and (max-width: 1460px) {
	.container {
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 260px;
	}
}
@media only screen and (max-width: 1180px) {
	.container {
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 320px;
	}
}
@media only screen and (max-width: 980px) {
	.container {
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 260px;
	}
}
@media only screen and (max-width: 700px) {
	.container {
		grid-template-columns: 1fr;
		grid-auto-rows: 300px;
	}
}
@media only screen and (max-width: 400px) {
	.container {
		grid-template-columns: 1fr;
		grid-auto-rows: 200px;
	}
}
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 50%;
}
.w-2 {
	grid-column: span 2;
}
.h-2 {
	grid-row: span 2;
}
</style>
