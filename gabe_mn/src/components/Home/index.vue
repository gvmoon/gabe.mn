<template>
    <AppContent img='static/img/jpg/bridge.jpg' title='Gabe Moon'>
        <template slot='middle'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-xs-12 col-md-3'>
                        <div class='row'>
                            <div class='col-xs-12'>
                                <div class='gmn-home-header'>
                                    <div class='gmn-home-header-left'>
                                        GVM
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
                        <div class='row'>
                            <div class='col-xs-12'>
                                3D, Animation, Design, Live, Motion, UX/UI, VFX, Web
                                Animate, After Eects, Cinema 4D, Illustrator, Photoshop, XD
                                Motion design is to the 21st century what graphic design was to
                                the 20th century. e knowledge I gained by studying graphic
                                design was invaluable to my development as a creative and starting
                                a freelance motion design business was a no-brainer. As a proud
                                computer nerd, I love utilizing the latest technology to solve
                                complex problems for my clients and convey their ideas to the
                                world. Contact me with freelance opportunities: gabe@gabe.mn
                            </div>
                        </div>
                    </div>
                    <div class='col-xs-12 col-md-9'>
                        <MainLinks />
                    </div>
                </div>
            </div>
        </template>
        <template slot='bottom'>
            <div class='container-fluid'>
                <div class='row'>
                    Test
                </div>
            </div>
        </template>
</AppContent>
</template>

<style lang='scss'>
.gmn-home-header {
    display: flex;

    & > .gmn-home-header-left {
        align-items: center;
        display: flex;
        font-family: Helvetica;
        font-size: 1.5em;
        font-weight: bolder;
        justify-content: center;
    }

    & > .gmn-home-header-right {
        // Same as bootstrap padding-left on column
        margin-left: 15px;

        & > .gmn-home-header-right-subtext {
            color: #FFAE71;
        }
    }
}
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
