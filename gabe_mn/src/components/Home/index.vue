<template>
    <AppContent
        video='https://player.vimeo.com/video/241723499?autoplay=0'
    >
        <template slot='middle'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12 col-md-4 col-lg-4 no-padding gmn-description'>
                        <div class='row'>
                            <div class='col-xs-12'>
                                <div class='gmn-home-header'>
                                    <div class='gmn-home-header-left'>
                                        <img src="static/img/svg/gvm_logo.svg" height="32em">
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
                                Motion design is to the 21st century what graphic design was to the 20th century. I help local Arizona businesses to create compelling motion graphic experiences by bringing my knowledge and expertise in current design technologies and trends with a specific focus on designed video which helps them to creatively and effectively communicate their complex ideas. I am currently available for freelance jobs. Feel free to give me a shout:
                            </div>
                        </div>
                        <div class='row gmn-home-skills'>
                            <div class='col-xs-12'>
                                <a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
                            </div>
                        </div>
                    </div>
                    <div class='col-xs-12 col-md-8 col-lg-8 no-padding'>
                        <MainLinks />
                    </div>
                </div>
            </div>
        </template>
        <template slot='bottom'>
            <div class='container-fluid'>
                <div class='row gmn-project-content'>
                    <!--<img src="static/img/jpg/bridge.jpg">-->
                </div>
            </div>
            <div class='col-xs-12'></div>
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
