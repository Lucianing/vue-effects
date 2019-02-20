<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    查看文字效果
  @require:
-->
<template>
  <div>
    <span class="text">试一下呗</span>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.text {
  color: whitesmoke;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .15em;
  display: inline-block;
  padding: 15px 20px;
  font-size: 28px;
  position: relative;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #65a835;
    transition: width .3s ease 0s, left .3s ease 0s;
    width: 0
  }
  &:hover:after {
    width: 100%;
    left: 0
  }
}
</style>

