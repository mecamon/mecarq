<template>
	<div class="modal-container">
		<div class="image-modal">
			<div class="close">
				<img
					src="../assets/icons/close.svg"
					alt=""
					@click="$emit('close-modal')"
				/>
			</div>
			<img class="image" :src="image" alt="selected image" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'ImageModal',
	props: {
		image: String,
	},
};
</script>
<style scoped>
.modal-container {
	position: fixed;
	width: 100vw;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 150;
}
.image-modal {
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: auto;
	height: 100vh;
}
.image-modal .close {
	width: 40px;
	height: 40px;
	border-radius: 20px;
	position: absolute;
	top: 60px;
	right: 20px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
}
.image-modal .close:hover {
	transform: scale(1.3);
}
.close img {
	width: 20px;
}
.image-modal .image {
	max-height: 90%;
	width: auto;
}
</style>
