<template>
	<div class="home">
		<div class="nav-area">
			<img
				class="logo"
				src="../assets/icons/center-logo.svg"
				alt="logotipo"
			/>
			<div id="nav">
				<router-link to="/">home</router-link>
				<router-link to="/galeria">galeria</router-link>
				<router-link to="/contacto-info">contacto e info</router-link>
			</div>
		</div>
		<div class="photo-1-area">
			<Photo1 v-bind:isStopped="isStopped" />
		</div>
		<div class="photo-1-title">
			<!-- <PhotoTitle title="Random 1" /> -->
		</div>
		<div class="photo-2-area">
			<Photo2 v-bind:isStopped="isStopped" />
		</div>
		<div class="photo-2-title">
			<!-- <PhotoTitle title="Random 2" /> -->
		</div>
		<div class="info-area">
			<InfoAreaContainer v-bind:isStopped="isStopped" />
		</div>
		<div class="play-pause">
			<PlayPause @stop-sliders="onStopSliders" />
		</div>
	</div>
</template>

<script>
import Photo1 from './Photo1';
import Photo2 from './Photo2';
import PhotoTitle from './PhotoTitle';
import InfoAreaContainer from './InfoAreaContainer';
import PlayPause from './PlayPause';
export default {
	name: 'Home',
	components: {
		Photo1,
		Photo2,
		PhotoTitle,
		InfoAreaContainer,
		PlayPause,
	},
	data() {
		return {
			isStopped: false,
		};
	},
	methods: {
		onStopSliders() {
			console.log('Stopping all sliders!');
			this.isStopped = !this.isStopped;
		},
	},
};
</script>
<style scoped>
.home {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: repeat(8, 1fr);
	grid-template-columns: repeat(11, 1fr);
}
.nav-area {
	grid-area: 1 / 1 / 5 / 6;
	position: relative;
	background-image: url('../assets/icons/mec-cutted.svg');
	background-size: 60%;
	background-position: -50px;
	background-repeat: no-repeat;
}
.photo-1-area {
	grid-area: 1 / 6 / 6 / 12;
	overflow: hidden;
}
.photo-1-title {
	grid-area: 5 / 6 / 6 / 9;
	z-index: 20;
}
.photo-2-area {
	grid-area: 5 / 1 / 9 / 5;
	overflow: hidden;
}
.photo-2-title {
	grid-area: 5 / 3 / 6 / 5;
	z-index: 20;
}
.info-area {
	grid-area: 6 / 5 / 9 / 12;
	overflow: hidden;
}
.play-pause {
	grid-area: 5 / 5 / 6 / 6;
}
</style>
