<template>
	<footer role='footer'>
		<nav role='nav'>
			<div class='nav-left'>
				<a href='skype:gabemoon?add'>gabemoon</a>
			</div>
			<div class='nav-center'>
				<a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
			</div>
			<div class='nav-right'>
				&copy; {{ copyrightText }}
			</div>
		</nav>
	</footer>
</template>

<style lang='scss'>
$height: 2.5em;
$margin: 5%;
$padding: 1.25%;

footer {
	background-color: #121212;
	border-top: 2px solid #BFBFBF;
	bottom: 0px;
	color: #FFFFFF;
	height: $height;
	left: 0px;
	line-height: $height;
	margin-left: $margin;
	margin-right: $margin;
	padding-left: $padding;
	padding-right: $padding;
	position: fixed;
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
		}
	}
}
</style>

<script>
import axios from 'axios';

export default {
	created () {
		let self = this;

		axios.get('/api/copyright')
			.then( (resp) => {
				const data = resp.data;
				let copyrightText = data.start;

				if (data.start < data.end) {
					copyrightText += ` - ${data.end}`;
				}
				else if (data.start > data.end) {
					throw 'Copyright date range invalid.';
				}

				self.copyrightText = copyrightText;
			})
			.catch( (error) => {
				throw error;
			});
	},
	data () {
		return {
			copyrightText: ''
		};
	}
};
</script>
