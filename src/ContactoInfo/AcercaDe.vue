<template>
	<div class="acerca-de">
		<article>
			<h2 class="white-text">acerca de</h2>
			<p class="white-text">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
				quae ab illo inventore veritatis et quasi architecto beatae
				vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
				voluptas sit aspernatur aut odit aut fugit, sed quia
				consequuntur
			</p>
		</article>
	</div>
</template>
<script>
export default {
	name: 'AcercaDe',
};
</script>
<style scoped>
.acerca-de {
	width: 100%;
	display: flex;
	margin-top: 30px;
	justify-content: flex-end;
	align-items: flex-end;
	background-image: url('../assets/icons/mec-cutted.svg');
	background-repeat: no-repeat;
	background-size: 30%;
	background-position: 20% 70%;
}
.acerca-de article {
	margin-top: 1em;
	width: 42%;
	padding: 2.5em;
	background-color: #333333;
}
@media only screen and (max-width: 1500px) {
	.acerca-de article {
		width: 62%;
	}
}
@media only screen and (max-width: 1020px) {
	.acerca-de {
		width: 100%;
		height: 100%;
	}
	.acerca-de article {
		width: 100%;
		height: 80%;
	}
}
article h2 {
	text-transform: uppercase;
}
article p {
	margin-top: 2em;
	font-weight: 500;
	line-height: 1.7;
}
</style>
