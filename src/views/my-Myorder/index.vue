<template>
<!-- 我的订单待付款 -->
  <div class="myorder-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">我的订单</p>
    </layoutheader>
    <!-- 订单频道信息 -->
    <div class="order-bar">
      <a class="order-left">
        <span>全部</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
      <a class="order-middle">
        <span>
          待付款
          <i class="line"></i>
        </span>
      </a>
      <a class="order-middle2">
        <span>待收货</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
      <a class="order-right">
        <span>已完成</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
    </div>
    <!-- 订单信息 -->
    <div class="Order-information">
      <div class="information-top">
        <p>订单号：YJ43673765765</p>
        <span>等待付款</span>
      </div>
      <div class="information-middle">
        <div class=" information-middle-top">
          <div class="information-middle-img">
          <img src="" alt="">
        </div>
        <p>华夏滋养精华液1号10ml</p>
        </div>
        <p> 共1件 实付:<span>￥128.00</span> </p>

      </div>
      <div class="information-pay">
        <button>去支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myorder-page'
}
</script>

<style lang="less" scoped>
.myorder-container {
  margin-top: 88px;
  background-color: #F2F2F2;
  height: 1334px;
}
// tabbar
.order-bar {
  display: flex;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 0 53px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.order-bar > a {
  text-align: center;

  span {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 32px;
    color: rgba(85, 85, 85, 1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .line {
    display: block;
    margin-top: 18px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
.order-bar > a:nth-child(2) {
  span {
    color: #29bdaf;
  }
}

.Order-information {
  margin: 0 auto;
  margin-top:20px;
  padding:0 20px;
  width:680px;
height:413px;
background:rgba(255,255,255,1);
border-radius:20px;
.information-top {
  height: 71px;
  line-height: 71px;
  border-bottom: 1px solid  #EEEEEE;
  display: flex;
  justify-content: space-between;

  p {
    font-size:26px;
    color:#666666;
  }
  span {
    font-size:26px;
    color:#FC5931;
  }
}
}
.information-middle {
height:245px;
width: 100%;
display: flex;
flex-direction: column;
border-bottom: 1px solid #EEEEEE;
p {
  text-align: right;
  font-size:24px;
  color:#121212;
  span {
    font-weight: 700;
  }
}
.information-middle-top {
  padding: 25px 0 23px 0;
  display: flex;
 flex-shrink: 0;
 box-sizing: border-box;
 p {
   font-size:26px;
   color:#121212;
   margin:14px 0 0 26px;
 }

}
  .information-middle-img {
    width:165px;
    height:148px;
    border-radius: 20px;
    background-color: #ccc;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
}
.information-pay {
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    border:none;
    background: url(../../assets/pay-bg.png) no-repeat;
    height: 50px;
    width: 132px;
    background-size: 132px 50px;
    font-size:24px;
    color:#fff;
  }
}
</style>
