<template>
	<div class='gmn-container'>
		<GMN_Header></GMN_Header>
		<main role='main'>
			<transition name='fade' mode='out-in'>
				<router-view></router-view>
			</transition>
	    <nav class='gmn-links'>
	      <template v-for='link in links'>
	        <router-link :to='link.to'>
	          <div class='gmn-link-container'>
	            <div>
	              - {{ link.text }} -
	            </div>
	            <div class='gmn-link-subtext-container'>
	              {{ link.subtext }}
	            </div>
	          </div>
	        </router-link>
	      </template>
	    </nav>
		</main>
		<GMN_Footer></GMN_Footer>
	</div>
</template>

<style lang='scss'>
@import '~@scss/variables.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.gmn-container {
	background-color: $primaryBgColor;
	margin-top: $navHeight;
	height: calc(100vh - #{2 * $navHeight});
	overflow-y: auto;
	position: relative;

	@media (min-width: 1200px) {
		margin-left: $containerMargin;
		margin-right: $containerMargin;
	}

	& > main {
		color: $primaryFontColor;
		padding: $containerPadding;
		width: 100% - 2 * $containerPadding;

    & > nav.gmn-links {
      & > a {
        color: #FFFFFF;
        float: left;
        height: 5em;
        position: relative;
        text-decoration: none;
        width: percentage(1 / 3);

      	@media (max-width: 1199px) {
      		width: 50%;
      	}

        @media (max-width: 991px) {
      		width: 100%;
        }

        & > .gmn-link-container {
          position: absolute;
          text-align: center;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;

          & > .gmn-link-subtext-container {
            color: $blueTextColor;
          }
        }
      }
    }
	}
}
</style>

<script>
import GMN_Footer from '@components/Footer';
import GMN_Header from '@components/Header';

export default {
  data () {
    return {
      links: [{
        subtext: 'animation, design, explainer, motion',
        text: 'City of Phoenix',
        to: { name: 'phx' }
      }, {
        subtext: '3d, animation, design, motion',
        text: 'School of Motion',
        to: { name: 'home' }
      }, {
        subtext: 'animation, design, explainer, motion',
        text: 'Bitcoin',
        to: { name: 'home' }
      }, {
        subtext: 'animation, design, motion',
        text: 'Breaking Bad',
        to: { name: 'home' }
      }, {
        bg: 'ptnbg',
        subtext: 'animation, design, motion',
        text: 'Protect the Net',
        to: { name: 'home' }
      }, {
        subtext: 'animation, design, motion',
        text: 'Experimental',
        to: { name: 'home' }
      }]
    }
  },
	components: {
		GMN_Footer,
		GMN_Header
	}
};
</script>
