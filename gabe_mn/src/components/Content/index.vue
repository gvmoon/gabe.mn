<template>
    <div class='gmn-content'>
        <div class='gmn-content-top'>
            <iframe
                :src='video'
                frameborder='0'
                webkitAllowFullScreen mozallowfullscreen allowFullScreen
            ></iframe>
        </div>
        <slot />
    </div>
</template>

<style lang='scss' scoped>
@import './scss/index.scss';
</style>

<script>
export default {
  props: {
      video: {
          required: true,
          type: String
      }
  }
};
</script>
