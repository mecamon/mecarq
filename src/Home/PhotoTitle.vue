<template>
	<div class="photo-title">
		<h2>{{ title }}</h2>
	</div>
</template>
<script>
export default {
	name: 'PhotoTitle',
	props: ['title'],
};
</script>
<style scoped>
.photo-title {
	height: 100%;
	width: 100%;
	background-color: #ebebeb;
	display: flex;
	justify-content: center;
	align-items: center;
}
h2 {
	text-transform: uppercase;
	font-weight: 500;
}
</style>
