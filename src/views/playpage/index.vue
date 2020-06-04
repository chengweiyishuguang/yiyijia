<template>
  <div class="playpage">
    <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部 -->
    <layoutheader>
      <p slot="names">夜听</p>
    </layoutheader>
    <!-- 主体区域 -->
    <layoutbanner></layoutbanner>
    <!-- 播放区域 -->
    <layoutplayfooter>
      <template slot="f-follow">
        <div class="follow">
          <p>已关注</p>
          <p>关注</p>
        </div>
      </template>
    </layoutplayfooter>
    <!-- 弹出层播放明细 -->
    <!-- <listoptions></listoptions> -->
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
</style>
