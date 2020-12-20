<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {};
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
}
</style>
