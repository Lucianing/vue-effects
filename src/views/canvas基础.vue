<!--
  @author:  lzc
  @date:    2019-02-27
  @file:    canvas基础
  @require:
-->
<template>
  <div class="wrapper">
    <canvas
      id="canvas"
      width="960"
      height="960"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  
  components: {},
  
  props: {},
  
  data() {
    return {
      ctx: null
    }
  },
  
  computed: {},
  
  watch: {},
  
  created() {},
  
  mounted() {
    this.ctx = window.document.getElementById('canvas').getContext('2d')
    this.rect()
    this.arc()
  },
  
  destroyed() {},
  
  methods: {
    /**
     * 方形
     */
    rect() {
      this.ctx.fillStyle = 'pink'
      this.ctx.fillRect(10, 10, 100, 100)
      
      this.ctx.strokeStyle = 'blue'
      this.ctx.strokeRect(120, 10, 100, 100)
    },
    /**
     * 圆
     */
    arc() {
      this.ctx.fillStyle = 'white'
      this.ctx.beginPath()
      this.ctx.arc(200, 200, 20, 0, 2 * Math.PI)
      this.ctx.shadowColor = 'white'
      this.ctx.shadowBlur = 50
      this.ctx.fill()
      this.ctx.closePath()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wrapper {
  width: 100%;
  height: calc(100vh);
  background-color: #ccc;
}
</style>
