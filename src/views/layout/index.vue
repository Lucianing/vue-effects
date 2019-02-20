<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    xx
  @require:
-->
<template>
  <div id="app-wrapper">
    <Sidebar/>
    <div class="maim-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Sidebar from './components/Sidebar'

@Component({
  components: { Sidebar }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#app-wrapper{
  .maim-wrapper{
    padding-left: 280px;
    padding-top: 100px;
    min-height: 960px;
    background-color: #2c3e50;
  }
}
</style>

