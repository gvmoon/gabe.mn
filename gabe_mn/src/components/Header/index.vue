<template>
	<header role='header'>
		<AppNav>
			<div class='gmn-social-media-container'>
				<a href='https://dribbble.com/gvmoon' target='_blank'>
					<img src='static/img/svg/dribbble_icon.svg'>
				</a>
				<a href='https://mastodon.social/@print' target='_blank'>
					<img src='static/img/svg/mastodon_icon.svg'>
				</a>
				<a href='https://vimeo.com/gvmoon' target='_blank'>
					<img src='static/img/svg/vimeo_icon.svg'>
				</a>
			</div>
			<router-link
				:to="{name: 'home'}"
				class='h-font-style-italic'
			>Gabriel Vincent Moon</router-link>
			<div class='gmn-social-media-container'>
				<a href='http://ello.co/leperprint' target='_blank'>
					<img src='static/img/svg/ello_icon.svg'>
				</a>
				<a href='http://twitter.com/gvmoon' target='_blank'>
					<img src='static/img/svg/twitter_icon.svg'>
				</a>
				<a href='http://instagram.com/leperprint' target='_blank'>
					<img src='static/img/svg/instagram_icon.svg'>
				</a>
			</div>
		</AppNav>
</header>
</template>

<style lang='scss'>
@import './scss/index.scss';
</style>

<script>
import AppNav from '@components/Nav';

export default {
	components: {
		AppNav
	}
};
</script>
