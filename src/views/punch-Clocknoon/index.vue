<template>

  <div class="clocknoon">
      <!-- 背景图片 -->
    <div class="bgc"></div>

    <!-- 头部区域 -->
    <punchheader></punchheader>

 <!-- 列表区域 -->
 <punchlist >
     <img src="../../assets/punch-icon.png" alt="" slot="icon">
    <template slot="punch-list">
        <div class="list-two">
          <div class="list-video">
            <video src=""></video>
          <p>成光里是的梦人</p>

            <i class="video-icn"></i>
          <span>每天一点一滴的努力</span>
          </div>
          <!-- 进度条 -->
          <div class="progress">

            <div class="progress-bar">
                <div class="now">
                    <i class="yuan"></i>
                </div>
            </div>

            <span><audio id="player" style="display:none" src=""></audio></span>
        </div>
      </div>
    </template>
 </punchlist>

    <!-- 问候语 -->
    <punchfooter>
        <template slot="footer">
            <a href="#">传递我的问候</a>
        </template>
    </punchfooter>
  </div>
</template>

<script>
export default {
  name: 'clocknoonpage'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/bg-@2x.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.list-two {
  position: relative;

}
.list-video {
border-radius: 20px;
width: 100%;
height: 100%;

p {
  margin: 0;
  position: absolute;
  top:0px;
  left:26px;
  font-size:24px;
  color:#fff;

}
video {
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  background-color:skyblue;
  border-radius: 20px;
  position: absolute;
  // z-index: -1;
}
.video-icn {
  background: url(../../assets/punch-clocknoon-bg.png);
  background-size: 100% ;
  height: 570px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

}
span {
  display: block;
  font-size:27px;
  color:#ccc;
  position: absolute;
  bottom:53px;
  left:223px;

}
}
.progress {
margin-top:29px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.progress span {
  font-size: 20px;
  color: #EDEDED;
}
.progress-bar {
  position: relative;
  width: 536px;
  height: 4px;
  background-color: #98989c;
  vertical-align: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin:0 23px;
}
.now {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #29bdaf;
  border-radius: 2px;
}
.now .yuan {
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #29bdaf;
  border-radius: 50%;
  top: -2px;
  left: 30px;
  margin: -2.5px;
}
</style>
