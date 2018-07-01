<template>
    <main role='main' class='gmn-main'>
        <transition name='fade' mode='out-in'>
            <router-view></router-view>
        </transition>
    </main>
</template>

<style lang='scss'>
@import '~@scss/variables.scss';

/*
.gmn-main {
    overflow-x: hidden;
    overflow-y: auto;
    //position: absolute;
    top: $navHeight - .08em;
    width: 100%;
}
*/
</style>
