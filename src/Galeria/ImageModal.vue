<template>
	<div class="modal-container">
		<div class="image-modal">
			<div class="close" v-if="image">
				<img
					src="../assets/icons/close.svg"
					alt=""
					@click="$emit('close-modal')"
				/>
			</div>
			<div v-if="!image" class="loader">Loading...</div>
			<img class="image" :src="image" alt="selected image" v-if="image" />
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
	background-color: white;
}
.image-modal .close {
	width: 40px;
	height: 40px;
	border-radius: 20px;
	position: absolute;
	top: 20px;
	left: 50%;
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
	display: block;
	/* max-height: 90%;
	width: auto; */
	width: auto;
	max-width: 90vw;
	max-height: 90vh;
}

/*Spinner css---------------------------*/
.loader,
.loader:after {
	border-radius: 50%;
	width: 10em;
	height: 10em;
}
.loader {
	margin: 60px auto;
	font-size: 10px;
	position: relative;
	text-indent: -9999em;
	border-top: 1.1em solid rgba(255, 255, 255, 0.2);
	border-right: 1.1em solid rgba(255, 255, 255, 0.2);
	border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
	border-left: 1.1em solid #ffffff;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load8 1.1s infinite linear;
	animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
