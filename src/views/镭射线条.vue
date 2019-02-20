<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    镭射线条
  @require:
-->
<template>
  <div class="stage">
    <div class="diamond-lines"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.stage {
  position: absolute;
  width: 500px;
  height: 500px;
  overflow: hidden;
  background-color: black;
  filter: blur(3.2px) brightness(1.4) contrast(15);
}
.diamond-lines {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.diamond-lines::before{
  content: "";
  position: absolute;
  top: 50%;
  display: block;
  width: 100%;
  height: 0;
  border: 1px solid #fff;
  box-shadow: 0 0 2px #45c0ff, 0 0 5px #45c0ff;
}
</style>

