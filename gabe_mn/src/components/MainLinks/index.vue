<template>
    <nav class='container-fluid no-padding'>
        <div class='row no-gutters'>
            <template v-for='link in links'>
                <MainLink
                    class='col-xs-12 col-md-6 col-lg-4 col-xl-4'
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
                bg: '/static/img/jpg/phx_bg3.jpg',
                gif: '/static/img/gif/phx_bg.gif',
                subtext: 'animation, design, explainer, motion',
                text: 'City of Phoenix',
                to: { name: 'phx' }
            }, {
                bg: '/static/img/jpg/som_bg3.jpg',
                gif: '/static/img/gif/som_bg.gif',
                subtext: '3d, animation, design, motion',
                text: 'School of Motion',
                to: { name: 'som' }
            }, {
                bg: '/static/img/jpg/btc_bg3.jpg',
                gif: '/static/img/png/btc_bg.png',
                subtext: 'animation, design, explainer, motion',
                text: 'Bitcoin',
                to: { name: 'btc' }
            }, {
                bg: '/static/img/jpg/cs_bg3.jpg',
                gif: '/static/img/gif/cs_bg.gif',
                subtext: 'animation, design, motion',
                text: 'Counter-Strike',
                to: { name: 'cs' }
            }, {
                bg: '/static/img/jpg/ptn_bg3.jpg',
                gif: '/static/img/gif/ptn_bg.gif',
                subtext: 'animation, design, motion',
                text: 'Protect the Net',
                to: { name: 'ptn' }
            }, {
                bg: '/static/img/jpg/exp_bg3.jpg',
                gif: '/static/img/gif/experimental_anim.gif',
                subtext: 'animation, design, motion',
                text: 'Experimental',
                to: { name: 'exp' }
            }]
        }
    }
};
</script>
