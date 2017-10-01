<template>
  <div class='gmn-content'>
    <div class='gmn-content-top'>

    </div>
    <div class='gmn-content-bottom'>
      <div>
        <h3>{{ title }}</h3>
        <p><slot name='text'></slot></p>
      </div>
      <div>
        <img :src='img' />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '~@scss/variables.scss';

div.gmn-content {
  display: inline-block;

  & > div {
    display: inline-block;
    width: 100%;


    &.gmn-content-bottom {
      & > div {
        float: left;
        width: 50%;

      	@media (max-width: 1199px) {
      		width: 100%;
      	}

        & > h3 {
          margin: 0px;
        }

        & > img {
          height: 100%;
          width: 100%;
        }

        & > p {
          color: $blueTextColor;
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ['img', 'title']
};
</script>
