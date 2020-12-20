<template>
	<div class="modal-container">
		<div class="image-modal">
			<img
				class="close"
				src="../assets/icons/close.svg"
				alt=""
				@click="$emit('close-modal')"
			/>
			<img
				class="image"
				src="../assets/thumb/codelpa-baño.jpg"
				alt="selected image"
			/>
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
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
}
.image-modal {
	padding: 30px;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}
.image-modal .close {
	width: 15px;
	height: auto;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
}
.image-modal .image {
	max-height: 70%;
	width: auto;
}
</style>
