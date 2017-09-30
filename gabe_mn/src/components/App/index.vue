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
$margin: 5%;

div.container {
	background-color: #121212;
	height: 100%;
	margin-left: $margin;
	margin-right: $margin;

	& > main {
		height: 100%;
		width: 100%;
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
