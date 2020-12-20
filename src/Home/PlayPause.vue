<template>
	<div class="play-pause">
		<img
			:src="require(`../assets/icons/${button}`)"
			alt=""
			@click="playClickHandler($event)"
		/>
	</div>
</template>
<script>
export default {
	name: 'PlayPause',
	data() {
		return {
			button: 'pause-button.svg',
		};
	},
	methods: {
		playClickHandler(event) {
			if (this.button == 'pause-button.svg') {
				this.button = 'play-button.svg';
			} else {
				this.button = 'pause-button.svg';
			}
			this.$emit('stop-sliders');
		},
	},
};
</script>

<style scoped>
.play-pause {
	width: 100%;
	height: 100%;
	background-color: #1c1c1c;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.play-pause img {
	width: 45%;
	height: auto;
}
</style>
