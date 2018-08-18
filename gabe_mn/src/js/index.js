import 'babel-polyfill';
import App from '@components/App';
import Home from '@components/Home';
import NotFound from '@components/NotFound';
import CS from '@components/cs';
import SOM from '@components/som';
import PHX from '@components/phx';
import PTN from '@components/ptn';
import BTCEXPD from '@components/btcexpd';
import EXP from '@components/exp';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
	component: Home,
	name: 'home',
	path: '/'
}, {
	component: CS,
	name: 'cs',
	path: '/cs'
}, {
	component: SOM,
	name: 'som',
	path: '/som'
}, {
	component: PHX,
	name: 'phx',
	path: '/phx'
}, {
	component: PTN,
	name: 'ptn',
	path: '/ptn'
}, {
	component: BTCEXPD,
	name: 'btcexpd',
	path: '/btcexpd'
}, {
	component: EXP,
	name: 'exp',
	path: '/exp'
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
