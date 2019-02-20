<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    xx
  @require:
-->
<template>
  <div>
    <div id='container'>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  background-color: #333;
  padding-top: 20px;
}
#container {
  display: inline-block;
  width: 84px;
  height: 84px;
  position: relative;
}
#container .circle {
  border-radius: 100%;
  border-style: solid;
  border-color: transparent;
  border-width: 8px;
}
#container .circle:nth-child(1) {
  width: 14px;
  height: 14px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 0.25s;
  position: absolute;
  top: 63px;
  left: 63px;
}
#container .circle:nth-child(2) {
  width: 28px;
  height: 28px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 0.5s;
  position: absolute;
  top: 56px;
  left: 56px;
}
#container .circle:nth-child(3) {
  width: 42px;
  height: 42px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 0.75s;
  position: absolute;
  top: 49px;
  left: 49px;
}
#container .circle:nth-child(4) {
  width: 56px;
  height: 56px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 1s;
  position: absolute;
  top: 42px;
  left: 42px;
}
#container .circle:nth-child(5) {
  width: 70px;
  height: 70px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 1.25s;
  position: absolute;
  top: 35px;
  left: 35px;
}
#container .circle:nth-child(6) {
  width: 84px;
  height: 84px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 1.5s;
  position: absolute;
  top: 28px;
  left: 28px;
}
#container .circle:nth-child(7) {
  width: 98px;
  height: 98px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 1.75s;
  position: absolute;
  top: 21px;
  left: 21px;
}
#container .circle:nth-child(8) {
  width: 112px;
  height: 112px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 2s;
  position: absolute;
  top: 14px;
  left: 14px;
}
#container .circle:nth-child(9) {
  width: 126px;
  height: 126px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 2.25s;
  position: absolute;
  top: 7px;
  left: 7px;
}
#container .circle:nth-child(10) {
  width: 140px;
  height: 140px;
  -webkit-animation: pweek 6s linear infinite;
  animation: pweek 30s linear infinite;
  -webkit-animation-delay: 2.5s;
  position: absolute;
  top: 0px;
  left: 0px;
}
#container:hover .circle {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

@keyframes pweek {
  0% {
    border-color: #789;
  }
  16.66667% {
    border-color: #F11E4A;
  }
  33.33333% {
    border-color: #FFF;
  }
  50% {
    border-color: #229C79;
  }
  66.66667% {
    border-color: #F8A527;
  }
  83.33333% {
    border-color: #266D7F;
  }
  100% {
    border-color: #789;
  }
}
</style>

