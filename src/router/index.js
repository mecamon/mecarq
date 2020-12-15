import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home/Home.vue';
import Galeria from '../Galeria/Galeria.vue';
import ContactoInfo from '../ContactoInfo/ContactoInfo.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/galeria',
		name: 'Galeria',
		component: Galeria,
	},
	{
		path: '/contacto-info',
		name: 'ContactoInfo',
		component: ContactoInfo,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
