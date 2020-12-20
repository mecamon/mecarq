<template>
	<div class="contacto-info">
		<div class="first-half">
			<div class="nav-area">
				<img
					class="logo"
					src="../assets/icons/center-logo.svg"
					alt="logotipo"
				/>
				<div id="nav">
					<router-link to="/">home</router-link>
					<router-link to="/galeria">galeria</router-link>
					<router-link to="/contacto-info"
						>contacto e info</router-link
					>
				</div>
			</div>
			<AcercaDe />
		</div>
		<div class="second-half"><Contacto /></div>
	</div>
</template>
<script>
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
export default {
	name: 'ContactoInfo',
	components: {
		AcercaDe,
		Contacto,
	},
};
</script>
<style scoped>
.contacto-info {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	background-color: gray;
}
.first-half {
	grid-area: 1 / 1 / 2 / 5;
	background-color: white;
}
.second-half {
	grid-area: 2 / 1 / 3 / 5;
	background-image: url('../assets/home-images/bg-contacto-extruded.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
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
