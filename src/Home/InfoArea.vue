<template>
	<div class="info-area">
		<h2 :class="{ 'dark-text': isDark }">información de proyecto</h2>
		<p :class="{ 'dark-text': isDark }">{{ descripcion }}</p>
	</div>
</template>
<script>
export default {
	name: 'InfoArea',
	props: {
		descripcion: String,
		isDark: Boolean,
	},
};
</script>
<style scoped>
.info-area {
	height: 100%;
	width: 60%;
	margin-left: 4em;
}
h2 {
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 2em;
	padding-top: 2em;
	color: white;
}
p {
	line-height: 1.7;
	color: white;
}
.dark-text {
	color: #111111;
}
.white-text {
	color: white;
}
</style>
