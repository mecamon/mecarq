<template>
	<div class="info-area-container">
		<InfoArea
			descripcion="Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit eaque ipsa quae ab illo inventore veritatis 
            et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem"
		/>
	</div>
</template>
<script>
import InfoArea from '../components/InfoArea';
export default {
	name: 'InfoAreaContainer',
	components: {
		InfoArea,
	},
};
</script>
<style scoped>
.info-area-container {
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #333333;
	background-image: url('../assets/icons/arq.svg');
	background-size: 35%;
	background-position: 100%;
	background-repeat: no-repeat;
}
</style>
