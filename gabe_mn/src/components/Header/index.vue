<template>
	<header role='header'>
		<nav role='nav'>
			<div class='nav-left'>
				<a href='/' target='_blank'>GVM</a>
			</div>
			<div class='nav-center'>
				<a href='/' target='_blank'>Gabriel Vincent Moon</a>
			</div>
			<div class='nav-right'>
				<a href='http://twitter.com/gvmoon' target='_blank'>
					<img src='static/img/svg/twitter_icon.svg'>
				</a>
				<a href='http://instagram.com/leperprint' target='_blank'>
					<img src='static/img/svg/instagram_icon.svg'>
				</a>
			</div>
		</nav>
	</header>
</template>

<style lang='scss'>
$height: 2.5em;
$margin: 5%;
$padding: 1.25%;

header {
	background-color: #121212;
	border-bottom: 2px solid #BFBFBF;
	height: $height;
	left: 0px;
	line-height: $height;
	margin-left: $margin;
	margin-right: $margin;
	padding-left: $padding;
	padding-right: $padding;
	position: fixed;
	top: 0px;
	width: 100% - (2 * $margin + 2 * $padding);

	a {
		color: #FFFFFF;
		text-decoration: none;
	}

	& > nav {
		display: inline-block;
		width: 100%;

		& > div {
			float: left;
		}

		& > .nav-center{
			text-align: center;
			width: 50%;
		}

		& > .nav-left,
		& > .nav-right {
			width: 25%;
		}

		& > .nav-right {
			text-align: right;

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
export default {

};
</script>
