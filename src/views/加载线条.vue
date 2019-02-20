<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    加载线条
  @require:
-->
<template>
  <div class="line"></div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  margin-bottom: 3rem;
  background-color: white;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    background-color: #888;
    left: 0%;
    right: 100%;
    -webkit-animation: loading 2s ease infinite;
  }
  &.gradient {
    background-image: linear-gradient(to right, #333, red);
  }
  &.gradient:after {
    background-color: #333;
  }
}
@-webkit-keyframes loading {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
</style>

