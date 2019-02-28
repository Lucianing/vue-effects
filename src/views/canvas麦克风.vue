<!--
  @author:  lzc
  @date:    2019-02-27
  @file:    canvas麦克风
  @require:
-->
<template>
  <div>
    <div class="container">
      <div class="micbox">
        <i class="iconfont icon-mic"></i>
      </div>
      <canvas id="leftCanvas" style="position: absolute;left: 0"></canvas>
      <canvas id="rightCanvas" style="position: absolute;left: 0"></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  
  components: {},
  
  props: {},
  
  data() {
    return {}
  },
  
  computed: {},
  
  watch: {},
  
  created() {},
  
  mounted() {
    var clientWidth = document.documentElement.clientWidth
    var canvasWidth = Math.floor(clientWidth * 0.25)
    var boxWidth = Math.floor(clientWidth * 0.20)
    
    var micbox = document.getElementsByClassName('micbox')[0]
    micbox.style.width = boxWidth + 'px'
    micbox.style.height = boxWidth + 'px'
    micbox.style.marginLeft = (canvasWidth - boxWidth) / 2 + 'px'
    var canvasL = document.getElementById('leftCanvas'),
      cxtL = canvasL.getContext('2d')
    canvasL.setAttribute('width', canvasWidth + 'px')
    canvasL.setAttribute('height', canvasWidth + 'px')
    var cWidthL = canvasL.width
    var cHeightL = canvasL.height
    var animationId = window.requestAnimationFrame(paint)
    var startL = -1 / 2 * Math.PI
    var endL = startL + 1 / 6 * Math.PI
    
    var canvasR = document.getElementById('rightCanvas'),
      cxtR = canvasR.getContext('2d')
    canvasR.setAttribute('width', canvasWidth + 'px')
    canvasR.setAttribute('height', canvasWidth + 'px')
    var cWidthR = canvasR.width
    var cHeightR = canvasR.height
    var startR = -1 / 2 * Math.PI
    var endR = startL - 1 / 5 * Math.PI
    
    function paint() {
      // l
      cxtL.lineCap = 'round'
      cxtL.strokeStyle = '#1da1f2'
      cxtL.lineWidth = 3
      cxtL.clearRect(0, 0, cWidthL, cHeightL)
      cxtL.beginPath()
      cxtL.arc(cWidthL / 2, cHeightL / 2, cWidthL / 2 - 7, startL, endL, false)
      cxtL.stroke()
      // r
      cxtR.clearRect(0, 0, cWidthR, cHeightR)
      cxtR.beginPath()
      cxtR.lineCap = 'round'
      cxtR.strokeStyle = '#1da1f2'
      cxtR.lineWidth = 3
      cxtR.arc(cWidthR / 2, cHeightR / 2, cWidthR / 2 - 2, startR, endR, true)
      cxtR.stroke()
      
      if (endL < 3 / 2 * Math.PI) {
        startL += 2 / 180 * Math.PI
        endL += 2 / 180 * Math.PI
        startR -= 2.0001 / 180 * Math.PI
        endR -= 2.0001 / 180 * Math.PI
        animationId = window.requestAnimationFrame(paint)
      } else {
        if (startL < 3 / 2 * Math.PI) {
          startL += 2 / 180 * Math.PI
          startR -= 2.001 / 180 * Math.PI
          animationId = window.requestAnimationFrame(paint)
        } else {
          cxtL.clearRect(0, 0, cWidthL, cHeightL)
          cxtR.clearRect(0, 0, cWidthR, cHeightR)
          window.cancelAnimationFrame(animationId)
        }
      }
    }
  },
  
  destroyed() {},
  
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.micbox {
  width: 100px;
  height: 100px;
  background-color: #1da1f2;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.micbox i {
  font-size: 66px;
}
</style>
