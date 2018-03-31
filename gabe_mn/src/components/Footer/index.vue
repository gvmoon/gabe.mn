<template>
	<footer role='footer'>
		<AppNav>
			<a href='skype:gabemoon?add'>gabemoon</a>
			<a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
			<div class='gmn-copyright'>
				&copy; {{ copyrightText }}
			</div>
		</AppNav>
	</footer>
</template>

<style lang='scss'>
footer {
	// .0125rem = 2px if font-size = 16px
	border-top: .0125rem solid #BFBFBF;
	bottom: 0;
	font-style: italic;

	.gmn-copyright {
		user-select: none;
	}
}
</style>

<script>
import axios from 'axios';
import AppNav from '@components/Nav';

export default {
	created () {
		let self = this;

		axios.get('/api/copyright')
			.then( (resp) => {
				const data = resp.data;

				if (data.start > data.end) {
					throw 'Copyright date range invalid.';
				}

				// The 'hyphen' in the string below is actually an en-dash
				// &ndash;
				self.copyrightText = `${data.start}–${data.end}`;
			})
			.catch( (error) => {
				throw error;
			});
	},
	components: {
		AppNav
	},
	data () {
		return {
			copyrightText: ''
		};
	}
};
</script>
