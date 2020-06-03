<template>
  <div class="sign-container">

    <!-- 背景图片 -->
    <div class="bgc"></div>

    <!-- 头部区域 -->
    <punchheader></punchheader>

 <!-- 列表区域 -->
 <punchlist >
     <img src="../../assets/signin-bof.png" alt="" slot="icon">
<template slot="punch-list">
    <div class="list-two">
            <p>成光里是的梦人</p>
            <p>
              奋斗就是每天做好手头上的每件小事,不推
              不抱怨不推卸责任不偷懒。
            </p>
            <p>
              每天一点一滴的努力，才能汇聚起千万勇
              气，带着你的坚持，引领你到你想要到的
              地方去。
            </p>
          </div>
    </template>
 </punchlist>

    <!-- 问候语 -->
    <punchfooter>
        <template slot="footer">
            <a href="#">传递我的问候</a>
        </template>
    </punchfooter>
    <!-- 遮盖层 -->
    <div class="Coveringlayer">
        <img src="../../assets/signin-tc.png" alt="">
        <div class="success">
            <img src="../../assets/signin-icon.png" alt="">
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'siginInpage'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/punch-clockin-bg.png);
 background-size: 100% ;
  height: 570px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.greetings {
    text-align: center;
    position: fixed;
    bottom: 63px;
    left: 35px;

    a {
        display: block;
        width:680px;
height:80px;
line-height: 80px;
background:rgba(41,189,175,1);
border-radius:20px;
font-size:34px;
color:#FFFFFF;
text-align: center;
    }
}
.Coveringlayer {
    height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  img {
    height: 100%;
    width: 100%;
  }
  .success {
      width: 508px;
      height: 310px;
      position: fixed;
   left: 50%;
      top: 50%;
      margin: -155px 0 0 -254px;
      img {
          height: 100%;
    width: 100%;
      }
  }
}
</style>
