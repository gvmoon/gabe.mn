<template>
    <div class='gmn-content'>
        <div class='gmn-content-top'>
            <iframe
                src='https://player.vimeo.com/video/241723499?autoplay=0'
                frameborder='0'
                webkitAllowFullScreen mozallowfullscreen allowFullScreen
            ></iframe>
        </div>
        <slot name="middle" />
        <slot name="bottom" />
    </div>
</template>

<style lang='scss' scoped>

.gmn-content {
    // .gmn-content-top styles from http://embedresponsively.com/
    & > .gmn-content-top {
        height: 0;
        margin-bottom: 1em;
        max-width: 100%;
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;

        & iframe,
        & object,
        & embed {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }
    }
}
</style>

<script>
export default {
  props: ['img', 'title'],
  mounted() {

  }
};
</script>
