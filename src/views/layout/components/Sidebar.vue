<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    xx
  @require:
-->
<template>
  <div class="sidebar-wrapper">
    <el-menu
      default-active="0"
      class="menu-box">
      <template v-for="(route, index) in routes">
        <router-link :to="resolvePath(route.path)">
          <el-menu-item
            :key="index"
            :index="`${index}`">
            <span slot="title">{{ route.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
import path from 'path'

@Component
export default class Home extends Vue {
  routes: [] = []
  created() {
    this.routes = this.$router.options.routes[0].children
  }

  resolvePath(routePath) {
    return path.resolve('', routePath)
  }
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .menu-box{
    min-height: 100%;
    overflow-y: auto;
  }
}
</style>

