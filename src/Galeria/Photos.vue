<template>
	<div class="photos">
		<div ref="images" class="container">
			<img
				v-for="(image, index) in images"
				:key="index"
				:src="image.url"
				alt=""
				@click="$emit('see-photo', image.path)"
			/>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase';
export default {
	name: 'Photos',
	props: {
		thumbnailsFolderName: String,
		showingImageInPath: String,
		nextOrPrevImage: String,
	},
	data() {
		return {
			images: [],
			timeToOrganize: 2000,
		};
	},
	watch: {
		nextOrPrevImage: function() {
			if (this.nextOrPrevImage === 'next') {
				this.images.forEach((image, index) => {
					if (image.path === this.showingImageInPath) {
						this.$emit('see-photo', this.images[index + 1].path);
					}
				});
			}
		},
	},
	methods: {
		organizeImages() {
			let imageElements = this.$refs.images.childNodes;

			imageElements.forEach(image => {
				let ratio = image.naturalHeight / image.naturalWidth;
				if (ratio < 0.5) {
					image.classList.add('w-2');
				} else if (ratio > 1.2) {
					image.classList.add('h-2');
				}
			});
		},
		listAllThumbs() {
			const storeRef = firebase.storage().ref();

			let listOfthumbs = [];

			storeRef
				//Listing all the images availables in the given folder location
				.child(this.thumbnailsFolderName)
				.listAll()
				.then(({ _delegate }) => {
					const items = _delegate.items;

					items.forEach(item => {
						// Looking for the download url of images and storing them in the images array
						storeRef
							.child(item._location.path)
							.getDownloadURL()
							.then(url =>
								this.images.push({
									url: url,
									path: item._location.path,
								})
							)
							.catch(e => console.log(e));
					});
				})
				.catch(e => console.log(e));
		},
	},
	created() {
		this.listAllThumbs();
	},
	mounted() {
		//Wait a second for the images to load from firebase before organize
		setTimeout(() => {
			this.organizeImages();
		}, this.timeToOrganize);
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
	gap: 20px;
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
	cursor: pointer;
}
.w-2 {
	grid-column: span 2;
}
.h-2 {
	grid-row: span 2;
}
</style>
