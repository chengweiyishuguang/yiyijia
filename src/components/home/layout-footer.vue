<template>
  <div class="layout-footer">
       <footer>
      <div>
        <div class="footer-item1">
          <img src="../../assets/cl3.png" alt />
          <img src="../../assets/cl1.png" style="display: none;" alt />
        </div>
        <a href="#" class="selet Unchecked">首页</a>
      </div>
      <div>
        <div class="footer-item2">
          <img src="../../assets/shop.png" alt />
          <img src="../../assets/shop1.png" style="display: none;" alt />
        </div>

        <a href="#" class="selet Unchecked">商城</a>
      </div>
      <div>
        <div class="footer-item3">
          <img src="../../assets/car.png" alt />
          <img src="../../assets/car1.png" style="display: none;" alt />
        </div>

        <a href="#" class="selet Unchecked">购物车</a>
      </div>
      <div>
        <div class="footer-item4">
          <img src="../../assets/my1.png"  alt />
          <img src="../../assets/my.png" style="display: none;" alt />
        </div>

        <a href="#" class="selet Unchecked">我的</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 98px;
  position: fixed;
 box-shadow:0px 3px 10px 0px rgba(0, 0, 0, 0.52);
  bottom: 0;
 background:rgba(255,255,255,1);
  padding: 0 34px 0 79px;
  box-sizing: border-box;
  div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
width: 100%;
height: 100%;
  }
 .selet {
     display: block;
      width:48px;
      height:23px;
      font-size:24px;
      font-family:SourceHanSansCN;
      font-weight:500;
      color:rgba(18,18,18,1);
      line-height:36px;
  }

  .footer-item1,
  .footer-item2,
  .footer-item3,
  .footer-item4 {
      width: 38px;
      height: 40px;
      position: relative;
      img {
          width: 100%;
          height: 100%;
      }
      img:nth-child(2) {
          position: absolute;
           top:0;
           left:0;
      }
  }

}
</style>
