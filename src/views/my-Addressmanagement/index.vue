<template>
<!-- 地址管理 -->
  <div class="Address-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">收货地址</p>
    </layoutheader>
    <!-- 收获人信息 -->
  <ul class="Address-information">
    <li>
      <p>李依依  1730160906 </p>
      <div class="Address-add">
        <i class="Address-icon1"></i>
        <span>北京 北京市 昌平区 沙河镇 北京市昌平区 沙河镇沙河北大桥尚品公寓</span>

          <i class="Address-icon2"></i>
          <i class="Address-icon3"></i>

      </div>
    </li>
    <li>
      <p>李依依  1730160906 </p>
      <div class="Address-add">
        <i class="Address-icon1"></i>
        <span>北京 北京市 昌平区 沙河镇 北京市昌平区 沙河镇沙河北大桥尚品公寓</span>

          <i class="Address-icon2"></i>
          <i class="Address-icon3"></i>

      </div>
    </li>
  </ul>
  <button></button>
  <!-- 弹出层 -->
  <deleteLayer/>
  </div>

</template>

<script>
export default {
  name: 'Address-page'
}
</script>

<style lang="less" scoped>
.Address-container {
  margin-top:110px;
  padding:0 20px;
  background-color: #F7F7F7;
}
  ul {
    background-color: #fff;
    li {
      height: 169px;
      border-bottom:1px solid #E9E9E9;
      p {
        font-size:26px;
        color:#191919;
      }
      .Address-add {
        margin-top:25px;
        position: relative;
        .Address-icon1 {
          background: url(../../assets/dizhi.png);
          width:30px;
          height:38px;
          background-size: 30px 38px;
          position: absolute;
          top:0;
          left:0;

        }
        span {
          display: block;
          box-sizing: border-box;
          font-size:26px;
          color:#888888;
          padding:0 194px 0 57px;

        }
        .Address-icon2 {
          background: url(../../assets/bianji@2x.png);
          width: 30px;
          height: 29px;
          background-size: 30px 29px;
          position: absolute;
          top:0;
          right:57px;
        }
        .Address-icon3 {
          background: url(../../assets/shanchu@2x.png);
          width: 30px;
          height: 29px;
          background-size: 30px 29px;
          position: absolute;
          top:0;
          right: 0;
        }
      }
    }
  }
  button {
    border:none;
    width: 680px;
    height: 90px;
    background: url(../../assets/Add-icon.png);
    background-size: 680px 90px;
  position: fixed;
  bottom:52px;
  left:35px;
  z-index: 1;
  }
</style>
