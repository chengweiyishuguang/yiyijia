<template>
  <div class="layout-header">
      <header>
      <div class="left">
        <i class="iconfont icon-zhaoshangxiaochengxu-jiantou-zuo"></i>
      </div>
      <slot name="names"></slot>
      <div class="right">
        <i class="iconfont icon-xiaochengxu-gengduo"></i>
        <i class="iconfont icon-vertical_line"></i>
        <i class="iconfont icon-xiaochengxu-guanbi"></i>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  width: 750px;
  height: 88px;
  min-width: 320px;
  background:rgba(41,189,175,1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 35px;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
  left: 0;
}
header .left i {
  font-size: 44px;
}
header p {
  font-size: 34px;
  font-weight: 700;
}
header .right {
  width: 135.9975px;
  height: 54px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50.0025px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header .right i {
  font-size: 30px;
}
</style>
