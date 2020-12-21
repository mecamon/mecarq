<template>
	<div class="galeria">
		<ImageModal
			v-if="showImageModal"
			v-on:close-modal="showImageModal = false"
			v-bind:image="currentImageURL"
		/>
		<div class="photos-area">
			<Photos v-on:see-photo="onSeePhoto" />
		</div>
	</div>
</template>
<script>
import Photos from './Photos';
import ImageModal from './ImageModal';
import firebase from 'firebase';
export default {
	name: 'Galeria',
	data() {
		return {
			showImageModal: false,
			currentImageURL: '',
		};
	},
	components: {
		Photos,
		ImageModal,
	},
	methods: {
		onSeePhoto(path) {
			let pathToFullSize = path.replace('thumbs', 'images');

			const storeRef = firebase.storage().ref();

			console.log(pathToFullSize);

			storeRef
				.child(pathToFullSize)
				.getDownloadURL()
				.then(url => {
					this.currentImageURL = url;
					console.log(url);
				})
				.catch(e => console.log(e));

			this.showImageModal = true;
		},
	},
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
