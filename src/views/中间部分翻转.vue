<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:   中间部分翻转
  @require:
-->
<template>
  <div>
    <ul class="ch-grid">
      <li>
        <div class="ch-item ch-img-1">
          <div class="ch-info-wrap">
            <div class="ch-info">
              <div class="ch-info-front ch-img-1"></div>
              <div class="ch-info-back">
                <h3>Bears Type</h3>
                <p>by Techbrood <a href="#">View on Dribbble</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="ch-item ch-img-2">
          <div class="ch-info-wrap">
            <div class="ch-info">
              <div class="ch-info-front ch-img-2"></div>
              <div class="ch-info-back">
                <h3>Salon Spaces illustrations</h3>
                <p>by Techbrood <a href="#">View on Dribbble</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="ch-item ch-img-3">
          <div class="ch-info-wrap">
            <div class="ch-info">
              <div class="ch-info-front ch-img-3"></div>
              <div class="ch-info-back">
                <h3>Leadership Series #3</h3>
                <p>by Techbrood <a href="#">View on Dribbble</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ch-grid {
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  display: block;
  text-align: center;
  width: 100%;
}

.ch-grid:after,
.ch-item:before {
  content: '';
  display: table;
}

.ch-grid:after {
  /* style.css */
  
  clear: both;
}

.ch-grid li {
  width: 220px;
  height: 220px;
  display: inline-block;
}

.ch-item {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: default;
}

.ch-info-wrap {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  -ms-perspective: 800px;
  perspective: 800px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  top: 20px;
  left: 20px;
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 3px rgba(115, 114, 23, 0.8);
}

.ch-info {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.ch-info > div {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: center center;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.ch-info .ch-info-back {
  -webkit-transform: rotate3d(0, 1, 0, 180deg);
  -moz-transform: rotate3d(0, 1, 0, 180deg);
  -o-transform: rotate3d(0, 1, 0, 180deg);
  -ms-transform: rotate3d(0, 1, 0, 180deg);
  transform: rotate3d(0, 1, 0, 180deg);
  background: #000;
}

.ch-img-1 {
  background-image: url(/uploads/140923/taxi.jpg);
}

.ch-img-2 {
  background-image: url(/uploads/140923/fox.jpg);
}

.ch-img-3 {
  background-image: url(/uploads/140923/jinx.jpg);
}

.ch-info h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin: 0 15px;
  padding: 40px 0 0 0;
  height: 90px;
  font-family: 'Open Sans', Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}

.ch-info p {
  color: #fff;
  padding: 10px 5px;
  font-style: italic;
  margin: 0 30px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.ch-info p a {
  display: block;
  color: #fff;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 4px;
  font-family: 'Open Sans', Arial, sans-serif;
}

.ch-info p a:hover {
  color: #fff222;
  color: rgba(255, 242, 34, 0.8);
}

.ch-item:hover .ch-info-wrap {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8), inset 0 0 3px rgba(115, 114, 23, 0.8);
}

.ch-item:hover .ch-info {
  -webkit-transform: rotate3d(0, 1, 0, -180deg);
  -moz-transform: rotate3d(0, 1, 0, -180deg);
  -o-transform: rotate3d(0, 1, 0, -180deg);
  -ms-transform: rotate3d(0, 1, 0, -180deg);
  transform: rotate3d(0, 1, 0, -180deg);
}
</style>

