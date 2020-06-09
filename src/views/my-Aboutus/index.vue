<template>
  <!-- 关于我们 -->
  <div class="Aboutus-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">实名认证</p>
    </layoutheader>
    <!-- 播放区域 -->
    <div class="Aboutus-player">
      <div class="Aboutus-video">
        <video src></video>
        <i class="Aboutus-icon"></i>
      </div>
    </div>

    <!--关于我们简介  -->

  <div class="Aboutus-bottom">
    <p class="Aboutus-bottom-title">关于我们</p>
    <div class="text-container">
      <i class="Aboutus-bottom-bg">

      </i>
      <p class="Aboutus-bottom-title2">
        关于我们
      </p>
      <p class="Aboutus-bottom-text">
      北京实益拓展科技有限责任公司(以下简称:北京实益企
       业)作为北京高新技术企业,拥有着30余年的创业经历,曾
      经在消防产业中做到行业标杆,旗下系列产品业内有口
      </p>
    </div>

  </div>
  <!-- 分享 -->
  <div class="Start-certification">
      <i class="button"></i>
      <span>分享</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Aboutus-page'
}
</script>

<style lang="less" scoped>
.Aboutus-player {
  margin-top: 110px;
  overflow: hidden;
  // 播放区域
  .Aboutus-video {
    width: 680px;
    height: 362px;
    border-radius: 20px;
    position: relative;
    margin: 0 auto;
    video {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: skyblue;
      border-radius: 20px;
      position: absolute;
      // z-index: -1;
    }
    .Aboutus-icon {
      background: url(../../assets/Aboutus-icon.png);
      width: 100px;
      height: 100px;
      background-size: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -50px 0 0 -50px;
    }

  }
}
// 关于我们
.Aboutus-bottom {
  padding:39px 27px 0;
  .Aboutus-bottom-title {
    font-size:34px;
    color: #2F2F2F;
    font-weight: 700;
    margin-left:8px;
  }
  .text-container {
    position: relative;
    padding:47px 38px 0 38px;
    box-sizing: border-box;
    i {
      background: url(../../assets/Aboutus-bottom-bg.png)no-repeat;
      width:697px;
      height:386px;
      background-size:679px 386px;
      position: absolute;
      top:0;
      left:0;
      z-index: -1;
    }
  .Aboutus-bottom-title2 {
      text-align: center;
      font-size:34px;
font-weight:700;
color:rgba(85,85,85,1);

    }
  }
}
.Aboutus-bottom-text {
  margin-top:29px;
      font-size:26px;
      color:#555;
    }

    .Start-certification {
  margin-top:520px;
  width: 750px;
  position: absolute;
  padding:0 35px 41px 35px;

  i {
    background: url(../../assets/certification.png) no-repeat;
    width:680px;
    height:90px;
    background-size:680px 90px;
    position: absolute;

    z-index: -1;

  }
  span {
    font-size:34px;
    color:#fff;
    margin-left:273px;
  }
}
</style>
