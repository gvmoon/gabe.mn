<template>
	<header role='header'>
		<GMN_Nav>
			<template slot='left'>
				<router-link :to="{name: 'home'}">GVM</router-link>
			</template>
			<template slot='center'>
				<router-link :to="{name: 'home'}">Gabriel Vincent Moon</router-link>
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
@import '~@scss/variables.scss';

header {
	border-bottom: $primaryBorder;
	top: 0px;

	& > nav {
		& > .gmn-nav-right {
			a:first-child {
				margin-right: .25em;
			}

			img {
				$imgHeight: 1.125em;

				height: $imgHeight;
				margin-top: ($navHeight - $imgHeight) / 2;
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
