import Vue from 'vue';
import App from './App.vue';
import router from './router';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: 'AIzaSyByLdJyO5_RGurEwi7sH8cSf2OIPOtpovI',
	authDomain: 'mecarq-ef90d.firebaseapp.com',
	projectId: 'mecarq-ef90d',
	storageBucket: 'mecarq-ef90d.appspot.com',
	messagingSenderId: '1018374944792',
	appId: '1:1018374944792:web:971e49fba3212255c7ab6d',
};

firebase.initializeApp(firebaseConfig);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
