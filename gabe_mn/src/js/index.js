import App from '@components/App';
import Home from '@components/Home';
import Vue from 'vue';
import VueRouter from 'vue-router';

require('@scss/index.scss');

Vue.use(VueRouter);

const routes = [{
	component: Home,
	name: 'home',
	path: '/'
}];

const router = new VueRouter({
	mode: 'history',
  routes
})

new Vue({
	el: '#app',
	render (createElement) {
		return createElement(App);
	},
	router
});
