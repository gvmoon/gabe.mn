<template>
    <AppContent
        video='link_to_video_for_this_page'
    >
        <template slot='middle'>
					<!--Main Content For your Page, can be normal html-->
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
