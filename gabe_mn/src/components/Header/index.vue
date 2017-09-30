<template>
	<header role='header'>
		<GMN_Nav>
			<template slot='left'>
				<a href='/' target='_blank'>GVM</a>
			</template>
			<template slot='center'>
				<a href='/' target='_blank'>Gabriel Vincent Moon</a>
			</template>
			<template slot='right'>
				<a href='http://twitter.com/gvmoon' target='_blank'>
					<img src='static/img/svg/twitter_icon.svg'>
				</a>
				<a href='http://instagram.com/leperprint' target='_blank'>
					<img src='static/img/svg/instagram_icon.svg'>
				</a>
			</template>
		</GMN_Nav>
	</header>
</template>

<style lang='scss'>
$height: 2.5em;
$margin: 5%;
$padding: 1.25%;

header {
	border-bottom: 2px solid #BFBFBF;
	top: 0px;

	& > nav {
		& > .nav-right {
			a:first-child {
				margin-right: .25em;
			}

			img {
				$imgHeight: 1em;

				height: $imgHeight;
				margin-top: ($height - $imgHeight) / 2;
			}
		}
	}
}
</style>

<script>
import GMN_Nav from '@components/Nav';

export default {
	components: {
		GMN_Nav
	}
};
</script>
