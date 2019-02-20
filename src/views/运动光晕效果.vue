<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    运动光晕效果
  @require:
-->
<template>
  <div class="loader">
    <div class="double-pulse"></div>
    <div class="double-pulse"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
$loader-size: 5rem;
$animation-duration: 1.5s;

.loader {
  position: relative;
  width: 6rem;
  height: 6rem;
}

.double-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: $loader-size;
  height: $loader-size;
  margin: 0 auto;
  border-radius: 100%;
  background-color: white;
  opacity: .4;
  animation: double-pulse $animation-duration infinite ease-out;
  
  &:nth-of-type(2) {
    animation-delay: -350ms;
  }
}

@keyframes double-pulse {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

