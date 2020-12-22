<template>
	<div id="app" @change="onchangeHandler()">
		<div id="nav" ref="nav">
			<img
				src="./assets/icons/close.svg"
				alt="close"
				@click="hideNavbar()"
			/>
			<router-link to="/">home</router-link>
			<router-link to="/galeria">galeria</router-link>
			<router-link to="/contacto-info">contacto e info</router-link>
		</div>
		<div class="logo-area">
			<img
				class="logo"
				src="./assets/icons/center-logo.svg"
				alt="logotipo"
			/>
		</div>
		<div class="hamburger-area">
			<button @click="showNavbar()">
				<img src="./assets/icons/icon-hamburger.svg" alt="" />
			</button>
		</div>
		<div class="view">
			<router-view />
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		showNavbar() {
			let navBar = this.$refs.nav;

			navBar.style.marginLeft = '0px';
		},
		hideNavbar() {
			let navBar = this.$refs.nav;

			navBar.style.marginLeft = '';
		},
	},
};
</script>
<style>
@font-face {
	font-family: 'Montserrat';
	src: local('./assets/fonts/Montserrat-Bold.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-ExtraBold.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-ExtraLight.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-Light.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-Medium.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-Regular.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype'),
		local('./assets/fonts/Montserrat-Thin.ttf') format('truetype');
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
}
.logo {
	width: 120px;
	height: auto;
}
.dark-text {
	color: #111111;
}
.white-text {
	color: white;
}
#app {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: repeat(8, 1fr);
	grid-template-columns: repeat(11, 1fr);
}
.view {
	width: 100%;
	height: 100%;
	grid-area: 1 / 1 / 9 / 12;
}
.logo-area {
	grid-area: 1 / 1 / 2/ 6;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.logo-area .logo {
	margin-left: 90px;
	z-index: 100;
}
.hamburger-area {
	grid-area: 1 / 1 / 2/ 2;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.hamburger-area button {
	display: none;
	cursor: pointer;
	outline: none;
	border: none;
	background-color: white;
}
#nav {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	grid-area: 1 / 1 / 2 / 6;
	width: 100%;
	height: 100%;
	margin-left: 70px;
}
#nav a {
	display: block;
	font-size: 18px;
	font-weight: 500;
	color: #111111;
	text-decoration: none;
	margin-right: 35px;
	z-index: 100;
}
#nav img {
	display: none;
}
/*Responsive nav area---------------------------------------------*/
@media only screen and (max-width: 1520px) {
	.logo-area .logo {
		margin-left: 60px;
	}
}
@media only screen and (max-width: 1350px) {
	.logo-area {
		grid-area: 1 / 1 / 2/ 6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-area .logo {
		margin-left: 0;
	}
	.hamburger-area button {
		width: 40px;
		height: auto;
		display: block;
		cursor: pointer;
		z-index: 100;
	}
	#nav {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-area: 1 / 1 / 5 / 2;
		background-color: white;
		box-shadow: 4px 0px 10px #888888;
		z-index: 120;
		width: 200px;
		height: 100%;
		margin-left: -200px;
		transition: 1s;
	}
	#nav img {
		position: absolute;
		display: block;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
		width: 22px;
		height: auto;
	}
	#nav a {
		display: block;
		font-size: 18px;
		font-weight: 500;
		color: #111111;
		text-decoration: none;
		margin: 30px 70px;
		text-align: center;
	}
}
@media only screen and (max-width: 940px) {
	.logo-area {
		grid-area: 1 / 1 / 2/ 12;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo-area .logo {
		margin-left: 0;
	}
	.hamburger-area button {
		margin-left: 1rem;
		width: 40px;
		height: auto;
		display: block;
		cursor: pointer;
		z-index: 100;
	}
	#nav {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-area: 1 / 1 / 5 / 2;
		background-color: white;
		box-shadow: 4px 0px 10px #888888;
		z-index: 150;
		width: 200px;
		height: 100%;
		margin-left: -200px;
		transition: 1s;
	}
	#nav img {
		position: absolute;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
	}
	#nav a {
		display: block;
		font-size: 18px;
		font-weight: 500;
		color: #111111;
		text-decoration: none;
		margin: 30px 70px;
		text-align: center;
	}
}
</style>
