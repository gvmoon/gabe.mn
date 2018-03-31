import 'babel-polyfill';
import App from '@components/App';
import Home from '@components/Home';
import NotFound from '@components/NotFound';
import Phoenix from '@components/Phx';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
	component: Home,
	name: 'home',
	path: '/'
}, {
	component: Phoenix,
	name: 'phx',
	path: '/phx'
}, {
	path: '*',
	component: NotFound
}];

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	render (createElement) {
		return createElement(App);
	},
	router
});
