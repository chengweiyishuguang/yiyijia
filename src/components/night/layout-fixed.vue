<template>
  <div class="layout-fixed">
       <a href="#" id="fix">
      <span>上传自己的节目</span>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
body #fix {
  position: fixed;
  display: block;
  width: 268px;
  height: 91px;
  background: rgba(255, 68, 68, 1);
  border-radius: 46px 0 0 46px;
   bottom: 39px;
 right: 0;
text-align: center;
  z-index: 999;

  span {
    width: 205px;
    height: 29px;
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;

  }

}
</style>
