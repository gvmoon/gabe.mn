<template>
	<footer role='footer'>
		<GMN_Nav>
			<template slot='left'>
				<a href='skype:gabemoon?add'>gabemoon</a>
			</template>
			<template slot='center'>
				<a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
			</template>
			<template slot='right'>
				&copy; {{ copyrightText }}
			</template>
		</GMN_Nav>
	</footer>
</template>

<style lang='scss'>
@import '~@scss/variables.scss';

footer {
	border-top: $primaryBorder;
	bottom: 0px;
}
</style>

<script>
import axios from 'axios';
import GMN_Nav from '@components/Nav';

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
	components: {
		GMN_Nav
	},
	data () {
		return {
			copyrightText: ''
		};
	}
};
</script>
