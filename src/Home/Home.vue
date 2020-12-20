<template>
	<div class="home">
		<div class="nav-area"></div>
		<div class="photo-1-area">
			<Photo1 v-bind:isStopped="isStopped" />
		</div>
		<div class="photo-2-area">
			<Photo2 v-bind:isStopped="isStopped" />
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
.photo-2-area {
	grid-area: 5 / 1 / 9 / 5;
	overflow: hidden;
}
.info-area {
	grid-area: 6 / 5 / 9 / 12;
	overflow: hidden;
}
.play-pause {
	grid-area: 5 / 5 / 6 / 6;
}
@media only screen and (max-width: 940px) {
	.home {
		display: grid;
		width: 100%;
		height: 2500px;
		grid-template-rows: repeat(18, 1fr);
		grid-template-columns: repeat(11, 1fr);
	}
	.nav-area {
		grid-area: 1 / 1 / 4 / 12;
		position: relative;
		background-image: url('../assets/icons/mec-cutted.svg');
		background-size: 60%;
		background-position: 0% 70%;
		background-repeat: no-repeat;
	}
	.photo-1-area {
		grid-area: 4 / 1 / 9 / 12;
		overflow: hidden;
	}
	.photo-2-area {
		grid-area: 14 / 1 / 20 / 12;
		overflow: hidden;
	}
	.info-area {
		grid-area: 9 / 1 / 14 / 12;
		overflow: hidden;
	}
	.play-pause {
		grid-area: 9 / 10 / 10 / 12;
	}
}
@media only screen and (max-width: 680px) {
	.home {
		display: grid;
		width: 100%;
		height: 1800px;
		grid-template-rows: repeat(16, 1fr);
		grid-template-columns: repeat(11, 1fr);
	}
	.photo-1-area {
		grid-area: 3 / 1 / 7 / 12;
		overflow: hidden;
	}
	.photo-2-area {
		grid-area: 13 / 1 / 17 / 12;
		overflow: hidden;
	}
	.info-area {
		grid-area: 7 / 1 / 13 / 12;
		overflow: hidden;
	}
	.play-pause {
		grid-area: 7 / 10 / 8 / 12;
	}
}
</style>
