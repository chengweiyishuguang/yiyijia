<template>
  <div class="playpage">
    <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部 -->
    <layoutheader>
      <p slot="names">夜听</p>
    </layoutheader>
      <!-- 主体区域 -->
     <div class="main">
         <div class="logo">
            <img src="../../assets/logo@2x.png" alt="">
         </div>

        <div class="banner">
            <div class="banner-img">
                <img src="../../assets/newyuanban.png" alt="">
            </div>

            <div class="zhizhen">
                <img src="../../assets/zhizhen.png" alt="">
            </div>
        </div>
    </div>
    <!-- 播放区域 -->
    <footer>
        <div class="footer-top">
            <div class="footer-img">
                <img src="" alt="">
            </div>
            <div class="text">
                <p>打开心中的记事本</p>
                <span>播音：吴小闲</span>&nbsp;&nbsp;
                <span>撰写：曾小乙</span>
            </div>
            <div class="footer-right">
                <div  class="follow">
                    <p>已关注</p>
                    <p>关注</p>
                </div>
                <div class="icon-o">
                    <div class="icon-clock">
                        <img src="../../assets/bo-clock-icon.png" alt="">
                    </div>

                    <div class="footer-collent">

                            <img src="../../assets/collent.png" alt="">
                            <img src="../../assets/n-collent.png" style="display: none;" alt="">
                    </div>

                </div>
            </div>

        </div>

<!-- 进度条 -->
     <laypotpro/>

    </footer>
    <!-- 弹出层播放明细 -->
    <listoptions></listoptions>
  </div>
</template>

<script>
export default {
  name: 'playpage'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/b-bgc.png);

  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.main {
  margin-top:88px;
}
.main .logo {
  margin-top:68px;
  width: 64px;
  height: 47px;
  position: absolute;
  left: 33px;
}
img {
  width: 100%;
  height: 100%;
}
.main .banner {
  position: relative;

}
.main .banner-img {
  width: 506px;
  height: 507px;
  margin: 25px 40px 0 122px;
  text-align: center;
  position: relative;
  top:32px;

}
.main .banner-img img {
  width: 100%;
  height: 100%;
  text-align: center;
  transform-origin: center;
  animation: 10s rot linear infinite;
}
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.banner .zhizhen {
  position: absolute;
  width: 231px;
  height: 185px;
  right: 45px;
  top: -35px;
}
.banner .zhizhen img {
  width: 100%;
  height: 100%;
  padding: 0;
}
footer {
  margin-top: 99.9975px;

}
.footer-top {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 36px 0 33px;
}
.footer-top .footer-img {
  width: 92px;
  height: 92px;
  background-color: skyblue;
  border-radius: 50%;
}
.footer-top .footer-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.footer-top .text {
  margin-left: 15px;
}
.footer-top .text p {
 width:320px;
height:38px;
line-height: 38px;
font-size:40px;
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(255,255,255,1);

}
.footer-top .text span {
 font-size:22px;
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(227,229,231,1);
}
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.footer-right .follow {
  margin-left: 170px;
}
.footer-right .follow p {
  width:83px;
height:41px;
line-height: 41px;
  font-size:20px;
  font-family:Source Han Sans SC;
  font-weight:500;
  color:rgba(172,172,172,1);
  border-radius: 10px;
  text-align: center;
  background:rgba(255,255,255,1);
border:1px solid rgba(229,229,229,1);
border-radius:10px;
}
.footer-right .follow p:nth-child(2) {
  color: #29BDAF;
  margin-top:8px;
}
.icon-o {
  margin-top:20px;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding-left:130px;
  box-sizing: border-box;
}
.icon-o .icon-clock {
  width: 41px;
  height: 34px;
}
.icon-o .icon-clock img {
  width: 100%;
  height: 100%;
}

.icon-o .footer-collent {
  width: 41px;
  height: 34px;

}
.icon-o .footer-collent img {
 width: 100%;
  height: 100%;

}

</style>
