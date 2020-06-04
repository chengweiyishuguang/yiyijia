<template>
  <div class="music-play">
        <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部 -->
    <layoutheader>
      <p slot="names">减压助眠</p>
    </layoutheader>
    <!-- 主体区域 -->
    <layoutbanner></layoutbanner>
    <!-- 播放区域 -->
    <layoutbanner >
        <template slot="yuanpan">
             <div class="banner">
            <div class="banner-img">
                <img src="../../assets/d-banner.png" alt="">
            </div>
        </div>
        </template>
    </layoutbanner>
    <!-- 播放区域进度条 -->
    <layoutprogress></layoutprogress>
    <!-- 弹出层播放明细 -->
    <!-- <listoptions></listoptions> -->
  </div>
</template>

<script>
export default {
  name: 'music-play'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/d-bg.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

}

.banner {
top:88px;
  position: relative;
//   margin-bottom:228px;

}
 .banner-img {
  width: 506px;
  height: 507px;
  margin: 25px 40px 0 122px;
  text-align: center;
  position: relative;
  top:32px;

}
.banner-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border:10px solid #75F1E4;
  text-align: center;
  box-sizing: border-box;
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

</style>
