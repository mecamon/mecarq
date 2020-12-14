<template>
	<div class="home">
		<div class="nav-area">
			<div id="nav">
				<router-link to="/">home</router-link> |
				<router-link to="/galeria">galeria</router-link> |
				<router-link to="/contacto-info">contacto e info</router-link>
			</div>
		</div>
		<div class="photo-1-area"></div>
		<div class="photo-1-title"></div>
		<div class="photo-2-area"></div>
		<div class="photo-2-title"></div>
		<div class="info-area"></div>
		<div class="play-pause"></div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
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
	background-color: red;
}
.photo-1-area {
	grid-area: 1 / 6 / 6 / 12;
	background-color: yellow;
}
.photo-1-title {
	grid-area: 5 / 6 / 6 / 9;
	background-color: rgb(65, 65, 65);
}
.photo-2-area {
	grid-area: 5 / 1 / 9 / 5;
	background-color: green;
}
.photo-2-title {
	grid-area: 5 / 3 / 6 / 6;
	background-color: rgb(65, 65, 65);
}
.info-area {
	grid-area: 6 / 5 / 9 / 12;
	background-color: gray;
}
.play-pause {
	grid-area: 5 / 5 / 6 / 6;
	background-color: blue;
}
</style>
