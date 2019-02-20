<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    xx
  @require:
-->
<template>
  <div class="button"></div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.button{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: orange;
  -webkit-transition: -webkit-transform 800ms;
  transition: transform 800ms;
  position: relative;
  text-align: center;
  z-index: 10;
  &:before{
    content: '';
    box-shadow: 0px 0px 8px 2px rgba(255, 165, 0, 0.53);
    transform: scale(1);
    position: absolute;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    border-radius: 100%;
    pointer-events: none;
    opacity: 1;
    z-index: 1;
  }
  &:after{
    transition: opacity 600ms, transform 800ms;
    content: 'Hover Me';
    line-height: 100px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  &:hover {
    transform: scale(1.5);
    transition: transform 800ms, background-color 800ms;
  }
  &:hover:after {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
  &:hover:before {
    transition: transform 800ms, opacity 1000ms;
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>

