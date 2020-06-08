<template>
  <div class="d-playpage">
   <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部 -->
    <layoutheader>
      <p slot="names">如何实现家庭和睦</p>
    </layoutheader>
    <!-- 主体区域 -->
    <layoutbanner >
      <template slot="yuanpan">
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
      </template>

    </layoutbanner>
    <!-- 播放区域 -->

    <layoutplayfooter>

      <template slot="f-follow">
        <div class="follow">
          <p>已关注</p>
          <p>关注</p>
        </div>
      </template>
    </layoutplayfooter>

  </div>
</template>

<script>
export default {
  name: 'playpage'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/d-p-bg.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>
