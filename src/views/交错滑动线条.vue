<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    交错滑动线条
  @require:
-->
<template>
  <div class="text">
    交错滑动线条
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.text{
  display: block;
  position: relative;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
  color: #fff;
  &:before,
  &:after {
    transition: background, 0.6s ease-in-out;
    display: block;
    content: "";
    width: 400%;
    height: 2px;
    background-image: linear-gradient(to left, #fff 50%, rgba(255, 255, 255, 0) 0%);
    background-position: top;
    background-size: 50% 2px;
    background-repeat: repeat-x;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:after {
    top: 0;
    transform: translateX(-50%);
  }
  &:hover:before {
    transform: translateX(-50%);
  }
  &:hover:after {
    transform: translateX(0%);
  }
}

</style>

