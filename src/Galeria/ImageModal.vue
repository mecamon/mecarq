<template>
	<div class="modal-container">
		<div class="image-modal">
			<button id="left-chevron" @click="$emit('previous-image')">
				<img src="../assets/icons/left-chevron.svg" alt="" />
			</button>
			<button id="right-chevron" @click="$emit('next-image')">
				<img src="../assets/icons/right-chevron.svg" alt="" />
			</button>
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
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
}
.image-modal #left-chevron,
.image-modal #right-chevron {
	grid-area: 1 / 1 / 2 / 2;
	align-self: center;
	width: 40px;
	height: auto;
	border: none;
	cursor: pointer;
	opacity: 0.9;
	outline: none;
	background-color: transparent;
	z-index: 100;
}
.image-modal #right-chevron {
	justify-self: end;
	margin-right: 20px;
}
.image-modal #left-chevron {
	justify-self: start;
	margin-left: 20px;
}
.image-modal .close {
	grid-area: 1 / 1 / 2 / 2;
	justify-self: end;
	align-self: start;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 20px;
	margin-right: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	z-index: 100;
}
.image-modal .close:hover {
	transform: scale(1.3);
}
.close img {
	width: 20px;
}
.image-modal .image {
	grid-area: 1 / 1 / 2 / 2;
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
