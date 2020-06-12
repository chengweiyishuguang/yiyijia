<template>
<!-- 我的订单待收货 -->
  <div class="To-be-received">
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
          <i class="line" style="visibility:hidden;"></i>
        </span>
      </a>
      <a class="order-middle2">
        <span>待收货</span>
        <i class="line" ></i>
      </a>
      <a class="order-right">
        <span>已完成</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
    </div>
    <!-- 订单列表 -->
    <div class="Order-information">
      <div class="information-top">
        <p>订单号：YJ43673765765</p>
        <span>待发货</span>
      </div>
      <div class="information-middle">
        <div class="information-middle-top">
          <div class="information-middle-img">
            <img src alt />
          </div>
          <p>华夏滋养精华液1号10ml</p>
        </div>
        <p>
          共1件 实付:
          <span>￥128.00</span>
        </p>
      </div>
      <div class="information-pay Buy-again">
          <span>已付款</span>
        <button>查看物流</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'To-b-received-page'
}
</script>

<style lang="less" scoped>
.To-be-received {
    margin-top:88px;
    background-color: #F2F2F2;
    height: 1334px;
}
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
  padding: 29px 0 14px 0;
}
.order-bar > a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
.order-bar > a:nth-child(3) {
  span {
    color: #29bdaf;
  }
}
.Order-information {
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;
  width: 680px;
  height: 413px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  .information-top {
    height: 71px;
    line-height: 71px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    .Payment-successful {
      color: #fc5931;
    }
    p {
      font-size: 26px;
      color: #666666;
    }
    span {
      font-size: 26px;
      color:#FC5931;
    }
  }
}
.information-middle {
  height: 245px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
  p {
    text-align: right;
    font-size: 24px;
    color: #121212;
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
      font-size: 26px;
      color: #121212;
      margin: 14px 0 0 26px;
    }
  }
  .information-middle-img {
    width: 165px;
    height: 148px;
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
  span {
      font-size:26px;
      color:#555555;
      margin-right: 19px;
  }
  button {
    border: none;
    height: 50px;
    width: 132px;
    font-size: 24px;
    border-radius: 10px;
  }
}

.Buy-again {
  button {
    background: url(../../assets/pay-bg2.png);
    height: 50px;
    width: 132px;
    color:#fff;
    background-size: 132px 50px;

  }
}

</style>
