<!--
  @author:  lzc
  @date:    2019-02-20
  @desc:    图片塌缩效应
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
                <h3>taxi</h3>
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
                <h3>Stay Foxy</h3>
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
                <h3>Klava Jinx</h3>
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
  clear: both;
}
.ch-grid li {
  width: 220px;
  height: 220px;
  display: inline-block;
  margin: 20px;
}
.ch-item {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: default;
}
.ch-info-wrap,
.ch-info {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
.ch-info-wrap {
  top: 20px;
  left: 20px;
  background: #f9f9f9;
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 3px rgba(115, 114, 23, 0.8);
}
.ch-info > div {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  /*Just for webkit to have a smooth font*/
  
  border-radius: 50%;
  background-position: center center;
  -webkit-backface-visibility: hidden;
}
.ch-info .ch-info-front {
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  -ms-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.ch-info .ch-info-back {
  opacity: 0;
  background: #223e87;
  pointer-events: none;
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -o-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: all 0.4s ease-in-out 0.2s;
  -moz-transition: all 0.4s ease-in-out 0.2s;
  -o-transition: all 0.4s ease-in-out 0.2s;
  -ms-transition: all 0.4s ease-in-out 0.2s;
  transition: all 0.4s ease-in-out 0.2s;
}
.ch-img-1 {
  background-image: url(/uploads/140923/1.jpg);
}
.ch-img-2 {
  background-image: url(/uploads/140923/2.jpg);
}
.ch-img-3 {
  background-image: url(/uploads/140923/3.jpg);
}
.ch-info h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  margin: 0 15px;
  padding: 40px 0 0 0;
  height: 80px;
  font-family: 'Open Sans', Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}
.ch-info p {
  color: #fff;
  padding: 10px 5px 0;
  font-style: italic;
  margin: 0 30px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}
.ch-info p a {
  display: block;
  color: #e7615e;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 4px;
  font-family: 'Open Sans', Arial, sans-serif;
}
.ch-info p a:hover {
  color: #fff;
}
.ch-item:hover .ch-info-front {
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  opacity: 0;
}
.ch-item:hover .ch-info-back {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}
</style>

