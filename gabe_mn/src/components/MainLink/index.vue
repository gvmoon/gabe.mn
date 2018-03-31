<template>
    <router-link
        :style="'background-image: url(' + backgroundImage + ');'"
        :to='to'
        class='gmn-link'
    >
        <div
            class='gmn-link-content'
            ref='content'
        >
            <div class='gmn-link-text'>
                - {{ text }} -
            </div>
            <div class='gmn-link-subtext'>
                {{ subtext }}
            </div>
        </div>
        <div
            :style="'background-image: url(' + gif + ');'"
            class='gmn-link-gif'
            ref='gif'
        ></div>
        <div
            @click='onClick'
            @mouseenter='onMouseEnter'
            @mouseleave='onMouseLeave'
            class='gmn-link-overlay'>
        </div>
    </router-link>
</template>

<style lang='scss'>
@import './scss/index.scss';
</style>

<script>
import props from './js/props';

import onClick from './js/methods/on-click';
import onMouseEnter from './js/methods/on-mouse-enter';
import onMouseLeave from './js/methods/on-mouse-leave';

import velocity from 'velocity-animate';

export default {
    props,
    methods: {
        onClick,
        onMouseEnter,
        onMouseLeave
    }
}
</script>
