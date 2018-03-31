<template>
	<div class='wrapper'>
		<AppHeader />
		<AppMain />
		<AppFooter />
	</div>
</template>

<style lang='scss'>
@import './scss/index.scss';

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s
}
.fade-enter, .fade-leave-to {
	opacity: 0
}
</style>

<script>
import AppFooter from '@components/Footer';
import AppHeader from '@components/Header';
import AppMain from '@components/Main';

import beforeCreate from './js/before-create';

export default {
	beforeCreate,
	components: {
		AppFooter,
		AppHeader,
		AppMain
	}
};
</script>
