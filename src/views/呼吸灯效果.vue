<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    呼吸灯效果
  @require:
-->
<template>
  <div class="item-box">
    <span class="bubble">测试</span>
    <span class="out-side"></span>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: .2;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.item-box{
  width: 80px;
  height: 80px;
  position: relative;
  .out-side, .bubble{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .out-side {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    opacity: .2;
    background-color: white;
    z-index: 1;
    animation: pulse 2s infinite ease-out;
  }
  .bubble {
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    display: block;
    text-align: center;
    line-height: 80px;
    color: #fff;
    z-index: 2;
    background: radial-gradient(circle closest-side, rgba(84, 215, 242, 0.1) 40%, rgba(139, 244, 230, 0.2));
  }
}
</style>

