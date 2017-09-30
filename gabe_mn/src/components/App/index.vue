<template>
	<div class='container'>
		<GMN_Header></GMN_Header>
		<main role='main'>
		Test
		</main>
		<GMN_Footer></GMN_Footer>
	</div>
</template>

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
