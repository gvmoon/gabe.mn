<template>
	<div class='container'>
		<GMN_Header></GMN_Header>
		<main role='main'>
		Test
		</main>
		<GMN_Footer></GMN_Footer>
	</div>
</template>

<style lang='scss'>
@import '~@scss/variables.scss';

.container {
	background-color: $primaryBgColor;
	min-height: calc(100vh - #{2 * $navHeight});
	
	@media (min-width: 1200px) {
		margin-left: $containerMargin;
		margin-right: $containerMargin;
	}

	& > main {
		color: $primaryFontColor;
		margin-top: $navHeight;
		padding: $containerPadding;
		width: 100% - 2 * $containerPadding;
	}
}
</style>

<script>
import GMN_Footer from '@components/Footer';
import GMN_Header from '@components/Header';

export default {
	components: {
		GMN_Footer,
		GMN_Header
	}
};
</script>
