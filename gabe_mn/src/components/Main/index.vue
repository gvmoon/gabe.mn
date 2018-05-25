<template>
    <main role='main' class='gmn-main'>
        <transition name='fade' mode='out-in'>
            <router-view></router-view>
        </transition>
    </main>
</template>

<style lang='scss'>
@import '~@scss/variables.scss';

.gmn-main {
    height: calc(100% - #{2 * $navHeight});
    max-height: calc(100% - #{2 * $navHeight});
    overflow-x: hidden;
    overflow-y: overlay;
    position: absolute;
    top: $navHeight - .08em;
    width: 100%;
}
</style>
