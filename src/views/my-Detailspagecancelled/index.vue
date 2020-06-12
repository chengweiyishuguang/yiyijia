<template>
<!-- 已取消详情页 -->
  <div class="D-page-cancelled">
       <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">订单详情</p>
    </layoutheader>
    <!-- 面包屑组件 -->
    <bread>
      <p slot="state">已取消</p>
    </bread>

    <!-- 订单地址详情 -->
    <div class="Add-detail">

      <div class="Add-detail-bottom">
        <span>收货地址</span>
        <p>北京市昌平区沙河镇沙河北大桥商品公寓</p>
        <p>李依依 17301605060</p>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="Product-details">
      <div class="Product-top">
        <div class="Product-top-left">
          <div class="Product-top-img">
            <img src alt />
          </div>
          <div class="Product-top-middle">
            <p>华夏滋养精华液1号10...</p>
            <span>×1</span>
          </div>
        </div>
        <span>￥128.00</span>
      </div>
      <div class="Total-merchandise">
        <p>商品总额</p>
        <span>￥128.00</span>
      </div>
      <div class="freight">
        <p>运费</p>
        <span>￥0.0</span>
      </div>
    </div>
    <!-- 实际支付 -->
    <div class="Paid-in">
      <span>实际支付￥128.00</span>
    </div>
    <!-- 订单编号下单时间 -->
    <div class="Order-No">
      <div class="Order-No-top">
        <p>订单编号：YJ43673765765</p>
        <button>复制</button>
      </div>
      <p>下单时间：2020-03-02 14:43:41</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'D-page-cancelled'
}
</script>

<style lang="less" scoped>
.D-page-cancelled {
   background-color: #F2F2F2;
   height: 1334px;
}
.Add-detail {
  margin: 0 auto;
  width: 680px;
  height: 184px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 0 26px 0 22px;
  box-sizing: border-box;

  .Add-detail-top {
    height: 117px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;

    p {
      font-size: 24px;
      color: #121212;
    }
  }
  .Add-detail-bottom {
    span {
      font-size: 24px;
      color: #888888;
    }
    p {
      font-size: 24px;
      color: #121212;
    }
  }
}
.Product-details {
  margin: 0 auto;
  margin-top: 12px;
  width: 680px;
  height: 345px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
//   box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 30px 15px 31px 20px;
  box-sizing: border-box;
  .Product-top {
    display: flex;
    justify-content: space-between;
    .Product-top-left {
      display: flex;
      flex-shrink: 0;
      //   justify-content: space-between;

      .Product-top-img {
        width: 165px;
        height: 148px;
        background-color: #ccc;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .Product-top-middle {
        line-height: 30px;
        margin: 11px 0 0 26px;
        p {
          font-size: 26px;
          color: #121212;
        }
        span {
          font-size: 26px;
          color: #121212;
        }
      }
    }
    span {
      font-size: 28px;
      color: #121212;
    }
  }

  .Total-merchandise,
  .freight {
    margin-top: 31px;
    color: #121212;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 26px;
    }
    span {
      font-size: 28px;
    }
  }
}
.Paid-in {
    margin:14px auto;
    padding:15px;
    width:680px;
    height:107px;
    line-height: 107px;
    text-align: right;
    background:rgba(255,255,255,1);
    border-radius:20px;
    box-sizing: border-box;
span {
    font-size:32px;
    color:#121212;
}
}
.Order-No {
    width:680px;
height:137px;
background:rgba(255,255,255,1);
border-radius:20px;
margin: 14px auto;
padding:24px 16px 30px 15px;
box-sizing: border-box;
.Order-No-top {
    display: flex;
    justify-content: space-between;

    p {
        font-size:26px;
        color:#666666;

    }
    button {
        border:1px solid #DCDCDC;
        font-size:24px;
        color:#121212;
        width:68px;
        height:37px;
        border:1px solid rgba(220,220,220,1);
        border-radius:10px;
        background-color: #fff;
    }

}
p {
    font-size:26px;
        color:#666666;
}
}

</style>
