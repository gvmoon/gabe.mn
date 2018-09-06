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
                bg: '/static/img/jpg/cs.jpg',
                gif: '/static/img/gif/cs.gif',
                subtext: '2d, animation, design, motion',
                text: 'Counter-Strike',
                to: { name: 'cs' }
            }, {
                bg: '/static/img/jpg/som.jpg',
                gif: '/static/img/gif/som.gif',
                subtext: '3d, animation, design, motion',
                text: 'School of Motion',
                to: { name: 'som' }
            }, {
                bg: '/static/img/png/phx.png',
                gif: '/static/img/gif/phx.gif',
                subtext: '2d, animation, design, motion',
                text: 'City of Phoenix',
                to: { name: 'phx' }
            }, {
                bg: '/static/img/png/ptn.png',
                gif: '/static/img/gif/ptn.gif',
                subtext: '2d, animation, design, motion',
                text: 'Protect the Net',
                to: { name: 'ptn' }
            }, {
                bg: '/static/img/png/btc_bg.png',
                gif: '/static/img/jpg/btc_bg3.jpg',
                subtext: 'animation, design, motion',
                text: 'Bitcoin',
                to: { name: 'btc' }
            }, {
                bg: '/static/img/png/exp.png',
                gif: '/static/img/gif/exp.gif',
                subtext: '3d, animation, design, motion',
                text: 'Experimental',
                to: { name: 'exp' }
            }]
        }
    }
};
</script>
