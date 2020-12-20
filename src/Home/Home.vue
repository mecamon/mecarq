<template>
	<div class="home">
		<div class="nav-area"></div>
		<div id="nav" ref="nav">
			<img
				src="../assets/icons/close.svg"
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
				src="../assets/icons/center-logo.svg"
				alt="logotipo"
			/>
		</div>
		<div class="hamburger-area">
			<button @click="showNavbar()">
				<img src="../assets/icons/icon-hamburger.svg" alt="" />
			</button>
		</div>
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
		showNavbar() {
			let navBar = this.$refs.nav;

			navBar.style.marginLeft = '0px';
		},
		hideNavbar() {
			let navBar = this.$refs.nav;

			navBar.style.marginLeft = '-300px';
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
.logo-area {
	grid-area: 1 / 1 / 2/ 6;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.logo-area .logo {
	margin-left: 90px;
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
}
#nav img {
	display: none;
}
/* @media only screen and (max-width: 1350px) {
	#nav img {
		display: block;
		width: 20px;
		height: auto;
	}
} */
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
		z-index: 150;
		width: 300px;
		height: 100%;
		margin-left: -300px;
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
	}
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
		width: 300px;
		height: 100%;
		margin-left: -300px;
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
	.nav-area {
		grid-area: 1 / 1 / 3 / 12;
		position: relative;
		background-image: url('../assets/icons/mec-cutted.svg');
		background-size: 60%;
		background-position: 0% 200%;
		background-repeat: no-repeat;
	}
	.logo-area {
		grid-area: 1 / 1 / 2/ 12;
		display: flex;
		justify-content: center;
		align-items: center;
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
