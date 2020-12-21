<template>
	<div class="galeria">
		<ImageModal
			v-if="showImageModal"
			v-on:close-modal="closeModal()"
			v-bind:image="currentImageURL"
			v-on:next-image="onNextImage()"
			v-on:previous-image="onPrevImage()"
		/>
		<div class="photos-area">
			<Photos
				v-on:see-photo="onSeePhoto"
				v-bind:thumbnailsFolderName="thumbnailsFolderName"
				v-bind:showingImageInPath="currentPathToImage"
				v-bind:nextOrPrevImage="nextOrPrevImage"
			/>
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
			currentPathToImage: '',
			currentImageURL: '',
			thumbnailsFolderName: 'thumbs',
			imagesFolderName: 'images',
			nextOrPrevImage: {},
		};
	},
	components: {
		Photos,
		ImageModal,
	},
	methods: {
		onSeePhoto(path) {
			this.currentPathToImage = path;

			let pathToFullSize = path.replace(
				this.thumbnailsFolderName,
				this.imagesFolderName
			);

			const storeRef = firebase.storage().ref();

			storeRef
				.child(pathToFullSize)
				.getDownloadURL()
				.then(url => {
					this.currentImageURL = url;
				})
				.catch(e => console.log(e));

			this.showImageModal = true;
		},
		closeModal() {
			this.showImageModal = false;
			this.currentImageURL = '';
		},
		onNextImage() {
			this.currentImageURL = '';
			this.nextOrPrevImage = {
				direction: 'next',
				id: Symbol('nextOrPrev'),
			};
		},
		onPrevImage() {
			this.currentImageURL = '';
			this.nextOrPrevImage = {
				direction: 'previous',
				id: Symbol('nextOrPrev'),
			};
		},
	},
};
</script>
<style scoped>
.galeria {
	width: 100vw;
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
