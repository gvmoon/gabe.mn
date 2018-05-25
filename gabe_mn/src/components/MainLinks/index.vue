<template>
    <nav class='container-fluid no-padding'>
        <div class='row no-gutters'>
            <template v-for='link in links'>
                <MainLink
                    class='col-xs-12 col-md-6 col-lg-4 col-xl-2'
                    :backgroundImage='link.bg'
                    :gif='link.gif'
                    :text='link.text'
                    :to='link.to'
                    :subtext='link.subtext'
                />
            </template>
        </div>
    </nav>
</template>

<script>
import MainLink from '@components/MainLink';

export default {
    components: { MainLink },
    data () {
        return {
            links: [{
                bg: '/static/img/png/city_of_phoenix_bg.png',
                gif: '/static/img/gif/city_of_phoenix_anim.gif',
                subtext: 'animation, design, explainer, motion',
                text: 'City of Phoenix',
                to: { name: 'phx' }
            }, {
                bg: '/static/img/png/school_of_motion_bg.png',
                gif: '/static/img/gif/school_of_motion_anim.gif',
                subtext: '3d, animation, design, motion',
                text: 'School of Motion',
                to: { name: 'som' }
            }, {
                bg: '/static/img/png/bitcoin_expounded_bg.png',
                gif: '/static/img/gif/experimental_anim.gif',
                subtext: 'animation, design, explainer, motion',
                text: 'Bitcoin',
                to: { name: 'btc' }
            }, {
                bg: '/static/img/png/counter_strike_bg.png',
                gif: '/static/img/gif/counter_strike_anim.gif',
                subtext: 'animation, design, motion',
                text: 'Counter-Strike',
                to: { name: 'cs' }
            }, {
                bg: '/static/img/png/protect_the_net_bg.png',
                gif: '/static/img/gif/experimental_anim.gif',
                subtext: 'animation, design, motion',
                text: 'Protect the Net',
                to: { name: 'ptn' }
            }, {
                bg: '/static/img/png/experimental_bg.png',
                gif: '/static/img/gif/experimental_anim.gif',
                subtext: 'animation, design, motion',
                text: 'Experimental',
                to: { name: 'exp' }
            }]
        }
    }
};
</script>
