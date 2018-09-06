<template>
    <AppContent
        video='https://player.vimeo.com/video/241723499?autoplay=0'
    >
        <template slot='middle'>
            <div class='container-fluid'>
                <div class='row gmn-project-content'>
                    <img src="static\img\png\ptn0.png" alt="Protect the Net">
                    <img src="static\img\png\ptn1.png" alt="Protect the Net">
                    <img src="static\img\png\ptn2.png" alt="Protect the Net">
                    <img src="static\img\png\ptn3.png" alt="Protect the Net">
                    <img src="static\img\png\ptn4.png" alt="Protect the Net">
                    <img src="static\img\png\ptn5.png" alt="Protect the Net">
                    <img src="static\img\png\ptn6.png" alt="Protect the Net">
                </div>
            </div>
            <div class='col-xs-12'></div>
        </template>
        <template slot='bottom'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12 col-md-4 no-padding gmn-description'>
                        <div class='row'>
                            <div class='col-xs-12'>
                                <div class='gmn-home-header'>
                                    <div class='gmn-home-header-left'>
                                        <img src="static/img/svg/gvm_logo.svg" height="32em">
                                    </div>
                                    <div class='gmn-home-header-right'>
                                        Protect the Net
                                        <div class='gmn-home-header-right-subtext'>
                                            Social Issue Campaign
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='row gmn-home-skills'>
                            <div class='col-xs-12'>
                                2D, Animation, Design, Motion</br>
                                After Effects, Illustrator
                            </div>
                        </div>
                        <div class='row gmn-home-content'>
                            <div class='col-xs-12'>
                                The internet is the most democratizing entity that the world has ever known. It gives every individual the opportunity to express their thought and ideas. Increasingly, governments and corporations will seek to control what information we have access to as we are able to rely less and less on centrailzed authorities as our source of truth in the world. We must maintain resilience to any powers that will try to censor and restrict our right free and open sources of information. Organizations such as <a href="https://www.fightforthefuture.org/">Fight for the Future</a> and the <a href="https://www.eff.org/">Electronic Frontier Foundation</a> continue to push for net neutrality. This was my very first motion graphic design explainer completed as my Visual Communication Design thesis project at Arizona State University in 2015.
                            </div>
                        </div>
                    </div>
                    <div class='col-xs-12 col-md-8 no-padding'>
                        <MainLinks />
                    </div>
                </div>
            </div>
        </template>
    </AppContent>
</template>

<style lang='scss'>
@import './scss/index.scss';
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';

import AppContent from '@components/Content';
import MainLinks from '@components/MainLinks';

export default {
    components: {
        AppContent, Carousel, MainLinks, Slide
    }
};
</script>
