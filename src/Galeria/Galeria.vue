<template>
	<div class="galeria">
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
		<div class="photos-area">
			<Photos />
		</div>
	</div>
</template>
<script>
import Photos from './Photos';
export default {
	name: 'Galeria',
	components: {
		Photos,
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
