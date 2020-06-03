<template>
  <div class="person-container">
    <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">个人中心</p>
    </layoutheader>
    <!-- 播放区banner -->
    <detailsintroduce></detailsintroduce>
    <!-- 节目 -->
    <detailslist></detailslist>
<!-- 播放区域 -->
<layoutplayer/>
  </div>
</template>

<script>
export default {
  name: 'personpage'
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
