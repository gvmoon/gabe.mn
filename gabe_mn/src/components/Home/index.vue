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
                                        <img src="static/img/svg/gvm_logo.svg" height="36em">
                                    </div>
                                    <div class='gmn-home-header-right'>
                                        Gabriel Vincent Moon
                                        <div class='gmn-home-header-right-subtext'>
                                            Motion Design Generalist
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='row gmn-home-skills'>
                            <div class='col-xs-12'>
                                2D, 3D, Animation, Design, Motion, Web</br>
                                After Effects, Cinema 4D, Illustrator, Photoshop
                            </div>
                        </div>
                        <div class='row gmn-home-content'>
                            <div class='col-xs-12'>
                                Motion is to the 21st century what graphic design was to the 20th century. The knowledge I gained studying graphic design was invaluable to my development as a creative and moving forward into motion design was a no-brainer. As a proud computer nerd, I love utilizing the latest technology to solve complex problems for my clients and convey their ideas to the world. I am currently available for freelance work: <a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
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
import AppContent from '@components/Content';
import MainLinks from '@components/MainLinks';

export default {
    components: {
        AppContent, MainLinks
    }
};
</script>
