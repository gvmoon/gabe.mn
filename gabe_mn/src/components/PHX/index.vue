<template>
    <AppContent
        video='https://player.vimeo.com/video/241723499?autoplay=0'
    >
        <template slot='middle'>
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
                                        City of Phoenix
                                        <div class='gmn-home-header-right-subtext'>
                                            What is urban planning?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='row gmn-home-skills'>
                            <div class='col-xs-12'>
                                2D, 3D, Animation, Design, Motion</br>
                                After Effects, Cinema 4D, Illustrator
                            </div>
                        </div>
                        <div class='row gmn-home-content'>
                            <div class='col-xs-12'>
                                Phoenix, Arizona is home to more than 1.5 million people, with the greater metropolitan area being home to more than 4.5 million. Divided into fifteen unique districts, each urban village takes input from within their own communities on how their village will take shape. Through collaboration with village planners, a series of videos was developed utilizing motion graphic design to describe the role of urban planning in Phoenix. These were some of my first real motion design projects out of school and it was a great crash course in the process of completing a video series and working directly with a client.
                            </div>
                        </div>
                    </div>
                    <div class='col-xs-12 col-md-8 no-padding'>
                        <MainLinks />
                    </div>
                </div>
            </div>
        </template>
        <template slot='bottom'>
            <div class='container-fluid'>
                <div class='row gmn-project-content'>
                    <img src="static\img\png\city_of_phoenix0.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix1.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix2.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix3.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix4.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix5.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix6.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix7.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix8.png" alt="City of Phoenix Urban Planning">
                    <img src="static\img\png\city_of_phoenix9.png" alt="City of Phoenix Urban Planning">
                </div>
            </div>
            <!--<div class='col-xs-12 col-md-12'>
                <Carousel
                    :autoplay='true'
                    paginationColor='white'
                    paginationActiveColor='#687886'
                    :perPage='1'
                    :loop='true'
                    class='gmn-carousel'
                >
                    <Slide>
                        <img src='/static/img/jpg/3d_bg.jpg' />
                    </Slide>
                    <Slide>
                        <img src='/static/img/jpg/3d_in.jpg' />
                    </Slide>
                    <Slide>
                        <img src='/static/img/jpg/basic.jpg' />
                    </Slide>
                </Carousel>
            </div>-->
            <div class='col-xs-12'></div>
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
