<template>

  <div class="lis-public">
    <!-- 背景图 -->
    <div class="bgc"></div>
      <!-- banner区域 -->
    <div class="banner">
      <img src alt />
      <span class="play">
        <i class="play-icon"></i>
        <span>播放</span>

      </span>
    </div>
<!-- 简介收藏 分享 -->
    <div class="bref-i">
        <slot name="text1"> </slot>

      <div  class="p-collent">
                    <p>已关注</p>
                    <p>关注</p>
                </div>
    </div>

  </div>
</template>

<script>
export default {

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
// banner区
.banner {
  margin: 105px 35px 50px 35px;
  width: 680px;
  height: 362px;
  border-radius: 20px;
  background-color: #ccc;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .play {
      display: block;
      width: 60px;
      height: 40px;
      line-height: 40px;
      position: absolute;
       bottom: 23px;
      right: 30px;
      text-align: center;
      span {
           font-size: 26px;
      font-family: Source Han Sans SC;
      color: rgba(18, 18, 18, 1);

      }

    //   line-height:10px;
      .play-icon {
      background: url(../../assets/program-icon.png) no-repeat;
      margin-right: 20px;
      width: 62px;
      height: 62px;
      background-size: 62px;
      position: absolute;
        right: 40px;

    }

  }
}
// 简介收藏
.bref-i {

width: 670px;
margin: 0 auto;
border-bottom:2px solid rgba(233,233,233,1);
position: relative;
padding-bottom:65px;
p{

    font-size:32px;
font-family:Source Han Sans SC;
font-weight:500;
color:rgba(51,51,51,1);

}
.p-collent {
     display: flex;
    position: absolute;
    bottom:15px;
    right: 20px;
    p {

      width:96px;

height:50px;
line-height: 41px;
  font-size:28px;
  font-family:Source Han Sans SC;

  border-radius: 10px;
  text-align: center;

border:1px solid rgba(229,229,229,1);
border-radius:10px;

font-family:Source Han Sans SC;
font-weight:400;
color:rgba(102,102,102,1);
    }
    p:nth-child(2) {
         margin-left:10px;
         background:rgba(41,189,139,1);
    }
}
}

</style>
