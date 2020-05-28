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
        <div class="progress">

            <span class="start">01:05</span>
            <div class="progress-bar">
                <div class="now">
                    <i class="yuan"></i>
                </div>
            </div>
            <span class="end">30:15</span>
            <span><audio id="player" style="display:none" src=""></audio></span>
        </div>

        <div class="icon-ol">
            <i>
                <img src="../../assets/audio-icon1.png" alt="">
            </i>
            <i >
                <img src="../../assets/audio-icon2.png" alt="">
            </i>
            <span class="audio">
               <img src="../../assets/audio-icon3.png" alt="">
               <img src="../../assets/audio-icon4.png" alt="">
            </span>

            <i >
                <img src="../../assets/audio-icon5.png" alt="">
            </i>
            <i >
                <img src="../../assets/audio-icon6.png" alt="">
                <span class="count">999+</span>
            </i>
        </div>

        <!-- <div class="last">
            <p>
                拥抱着你的离去 <br/>
                数着一行行的泪滴<br/>
                数着一行一行的泪滴数着一行一行的泪滴
            </p>
        </div> -->

    </footer>
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

.progress {
 margin-top: 80px;
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
  top: 0;
  left: 30px;
  margin: -2.5px;
}
.icon-ol {
  width: 100%;
  height: 159px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 102px 0 101px;
}
.icon-ol i:nth-child(1) {
  width: 36px;
  height: 33px;
}
.icon-ol i:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.icon-ol i:nth-child(2),
.icon-ol i:nth-child(4) {
  width: 34px;
  height: 34px;
}
.icon-ol i:nth-child(2) img,
.icon-ol i:nth-child(4) img {
  width: 100%;
  height: 100%;
}
.audio {
  width: 159px;
  height: 159px;
  position: relative;
}
.audio img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.audio img:nth-child(2) {
  top: 0;
  left: 0;
}
i:nth-child(5) {
  width: 46px;
  height: 40px;
}
i:nth-child(5) img {
  width: 100%;
  height: 100%;

}
i:nth-child(5) {
 position: relative;
}
.count {
font-size:20px;
font-family:PingFangSC;
font-weight:400;
color:rgba(255,255,255,1);
position: absolute;
top:-10px;
left:35px;

  }
</style>
