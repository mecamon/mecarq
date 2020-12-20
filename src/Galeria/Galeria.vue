<template>
	<div class="galeria">
		<ImageModal
			v-if="showImageModal"
			v-on:close-modal="showImageModal = false"
		/>
		<div class="photos-area">
			<Photos />
		</div>
	</div>
</template>
<script>
import Photos from './Photos';
import ImageModal from './ImageModal';
export default {
	name: 'Galeria',
	data() {
		return {
			showImageModal: true,
		};
	},
	components: {
		Photos,
		ImageModal,
	},
	methods: {},
};
</script>
<style scoped>
.galeria {
	width: 100vw;
	/* background-color: gray; */
	overflow: hidden;
}
.photos-area {
	width: 100%;
}
#nav {
	padding-top: 50px;
	padding-left: 220px;
}
#nav a {
	font-size: 18px;
	font-weight: 500;
	color: #111111;
	text-decoration: none;
	margin-right: 40px;
}
</style>
