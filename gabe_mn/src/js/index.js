import Vue from 'vue';
import App from '@components/App';

require('@scss/index.scss');

new Vue({
	el: '#app',
	render (createElement) {
		return createElement(App);
	}
});
