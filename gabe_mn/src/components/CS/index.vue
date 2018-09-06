<template>
    <AppContent
        video='https://player.vimeo.com/video/241723499?autoplay=0'
    >
        <template slot='middle'>
            <div class='container-fluid'>
                <div class='row gmn-project-content'>
                    <img src="static\img\png\cs0.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs1.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs2.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs3.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs4.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs5.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs6.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs7.png" alt="Counter Strike Economy">
                    <img src="static\img\png\cs8.png" alt="Counter Strike Economy">
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
                                        CS:GO
                                        <div class='gmn-home-header-right-subtext'>
                                            Economy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='row gmn-home-skills'>
                            <div class='col-xs-12'>
                                2D, 3D, Animation, Design, Motion</br>
                                After Effects, Cinema 4D, Illustrator, Premiere
                            </div>
                        </div>
                        <div class='row gmn-home-content'>
                            <div class='col-xs-12'>
                                I am actually ashamed of the amount of hours I have put into playing Counter-Strike. The original version of the game was created in 2000 as an online multi-player mod of the popular game Half Life. Counter-Strike would go on to become the most popular competitive first person shooter ever made. Now in its third iteration, Counter-Strike: Global Offensive has seen more engagement than any previous version thanks to the popularization of livestreaming platforms such as Twitch. This video explains the economic system in the game which is a crucial component that has made it suitable for a competitive environment.
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
