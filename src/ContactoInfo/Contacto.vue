<template>
	<div class="contacto">
		<div class="container">
			<h2 class="dark-text">contacto</h2>
			<span class="dark-text">
				<img src="../assets/icons/mail.svg" alt="" />
				mecarender@gmail.com
			</span>
			<span class="dark-text">
				<img src="../assets/icons/phone-call.svg" alt="" />
				829-343-6487
			</span>
			<span class="white-text">
				<img src="../assets/icons/linkedin.svg" alt="" />
				<a
					class="dark-text"
					href="https://www.linkedin.com/in/carlos-mejia-60660878/"
				>
					Perfil de Linked IN
				</a>
			</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Contacto',
};
</script>
<style scoped>
.contacto {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	background-image: url('../assets/icons/arq.svg');
	background-repeat: no-repeat;
	background-size: 30%;
	background-position: 80% 50%;
	z-index: 20;
}
.container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 15%;
}
h2 {
	text-transform: uppercase;
	margin-bottom: 20px;
}
span {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 18px;
	margin-top: 10px;
}
img {
	width: 40px;
	height: auto;
	margin-right: 30px;
}
a {
	text-decoration: none;
}
</style>
