<template>
	<div class="info-area">
		<h2>información de proyecto</h2>
		<p>{{ descripcion }}</p>
	</div>
</template>
<script>
export default {
	name: 'InfoArea',
	props: ['descripcion'],
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
	color: white;
	margin-bottom: 2em;
	padding-top: 2em;
}
p {
	color: white;
	line-height: 1.7;
}
</style>
