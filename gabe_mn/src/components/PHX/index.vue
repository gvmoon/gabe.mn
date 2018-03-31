<template>
    <AppContent
        video='https://player.vimeo.com/video/241723499?autoplay=0'
    >
        <template slot='middle'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12 col-md-4'>
                        <div class='row'>
                            <div class='col-xs-12'>
                                <div class='gmn-phx-header'>
                                    City of Phoenix
                                </div>
                            </div>
                        </div>
                        <div class='row gmn-phx-tagline'>
                            <div class='col-xs-12'>
                                What is urban planning?
                            </div>
                        </div>
                        <div class='row gmn-home-content'>
                            <div class='col-xs-12'>
                                Motion design is to the 21st century what graphic design was to
                                the 20th century. The knowledge I gained by studying graphic
                                design was invaluable to my development as a creative and starting
                                a freelance motion design business was a no-brainer. As a proud
                                computer nerd, I love utilizing the latest technology to solve
                                complex problems for my clients and convey their ideas to the
                                world. Contact me with freelance opportunities: <a href='mailto:gabe@gabe.mn'>gabe@gabe.mn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template slot='bottom'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12'>
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
