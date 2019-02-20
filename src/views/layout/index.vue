<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    xx
  @require:
-->
<template>
  <div id="app-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>

</style>

