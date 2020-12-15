<template>
	<div class="play-pause">
		<img src="../assets/icons/play-button.svg" alt="" />
	</div>
</template>
<script>
export default {
	name: 'PlayPause',
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
}
.play-pause img {
	width: 45%;
	height: auto;
}
</style>
