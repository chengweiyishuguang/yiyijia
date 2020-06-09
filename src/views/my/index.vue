<template>
  <div class="my">
    <!-- 背景图片 -->
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">个人中心</p>
    </layoutheader>
    <!-- 个人信息 -->
    <div class="names">
      <div class="names-top">
        <div class="n-top-left">
          <div class="n-top-img">
            <img src alt />
          </div>
          <p>吴小邪</p>
        </div>
        <div class="changePassword">修改密码</div>
      </div>
      <ul class="names-bottom">
        <li>
          <a href="#">
            <i class="my-All-orders">
              <img src="../../assets/my-Allorders.png" alt />
            </i>
            <span>全部订单</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="my-To-be-paid">
              <img src="../../assets/my-clock-icon.png" alt />
            </i>
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="my-To-be-received">
              <img src="../../assets/my-car-icon.png" alt />
            </i>

            <span>待收货</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="my-comment">
              <img src="../../assets/my-liyan-icon.png" alt />
            </i>
            <span>评论</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="my-After-sales">
              <img src="../../assets/my-After-salesicon.png" alt />
            </i>
            <span>售后</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 我的收益 -->
    <div class="My-earnings">
      <div class="earnings-top">
        <div class="earnings-top-left">
          <div class="left-line"></div>
          <p>我的收益</p>
        </div>
        <i class="iconfont icon-zuojiantou"></i>
      </div>

      <div class="earnings-bottom">
        <div class="earnings-bottom-left">
          <p>新增收益(元)</p>
          <span>456.00</span>
        </div>
        <div class="bottom-line"></div>
        <div class="earnings-bottom-right">
          <p>累计收益(元)</p>
          <span>912.00</span>
        </div>
      </div>
    </div>
    <!-- 打卡用户 -->
    <div class="Punch-in-user">
      <div class="Punch-top">
        <div class="Punch-top-left">
          <div class="left-line"></div>
          <p>打开用户</p>
        </div>
        <i class="iconfont icon-zuojiantou"></i>
      </div>

      <div class="Punch-bottom">
        <div class="Punch-bottom-left">
          <p>今日谁看过我</p>
          <span>26</span>
        </div>
        <div class="bottom-line"></div>
        <div class="Punch-bottom-right">
          <p>总观看人(人)</p>
          <span>80</span>
        </div>
      </div>
    </div>

    <!-- 认证信息 -->
    <ul class="authentication">
      <li>
        <span>实名认证</span>
      </li>
      <li>
        <span>推送设置</span>
      </li>
      <li>
        <span>地址管理</span>
      </li>
      <li>
        <span>关于我们</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my'
}
</script>

<style lang="less" scoped>
.my {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
}
.bgc {
  background: url(../../assets/listen-bg.png);
  background-size: 100% 100%;
  height: 286px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.names {
  margin: 0 auto;
  margin-top: 202px;
  width: 680px;
  height: 275px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  border-radius: 22px;
  position: relative;
  padding: 30px 34px 39px 40px;
  box-sizing: border-box;
  .names-top {
    display: flex;
    justify-content: space-between;

    .n-top-left {
      display: flex;

      .n-top-img {
        width: 187.8px;
        height: 187.8px;
        background-color: #ccc;
        border-radius: 50%;
        position: absolute;
        top: -93.9px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
        }
      }
      p {
        font-size: 36px;
        font-weight: 700;
        color: rgba(51, 51, 51, 1);
        margin-left: 223px;
      }
    }
  }
  .changePassword {
    width: 89px;
    height: 33px;
    border: 1px solid rgba(210, 210, 210, 1);
    border-radius: 10px;
    font-size: 17px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}
.names-bottom {
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
  li {
    height: 150px;
    width: 150px;
    a {
      display: block;
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      i {
        width: 70px;
        height: 70px;

        img {
          width: 100%;
          width: 100%;
        }
      }

      span {
        font-size: 22px;
        color: rgba(85, 85, 85, 1);
      }
    }
  }
}

.My-earnings,
.Punch-in-user {
  margin: 0 auto;
  margin-top: 30px;
  width: 682px;
  height: 204px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 31px 35px 41px 33px;
  box-sizing: border-box;
  .earnings-top,
  .Punch-top {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    .earnings-top-left,
    .Punch-top-left {
      display: flex;
      align-items: center;
      justify-content: center;

      .left-line {
        width: 5px;
        height: 24px;
        background: rgba(41, 189, 175, 1);
        border-radius: 3px;
        margin: 0;
        padding: 0;
      }
      p {
        margin-left: 12px;
        font-size: 24px;
        color: rgba(85, 85, 85, 1);
      }
    }

    .icon-zuojiantou {
      font-size: 11px;
    }
  }
}
.earnings-bottom,
.Punch-bottom {
  padding: 0 144px 0 91px;
  margin-top: 33px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  text-align: center;
  .earnings-bottom-left,
  .earnings-bottom-right,
  .Punch-bottom-left,
  .Punch-bottom-right {
    p {
      font-size: 20px;
      color: #666666;
    }
    span {
      color: #ff3c00;
      font-size: 34px;
    }
  }
  .bottom-line {
    width: 2px;
    height: 58px;
    background: #eeeeee;
  }
  .earnings-bottom-right,
  .Punch-bottom-right {
    span {
      color: #333333;
    }
  }
}
// 认证信息
.authentication {
  margin-top: 28px;
  padding: 0px 37px 0;
  background-color: #fff;
  box-sizing: border-box;
  li {
    width: 100%;
    height: 99px;
    line-height: 97px;
    border-bottom: 1px solid #eeeeee;
    span {
      font-size: 30px;
      color: rgba(85, 85, 85, 1);
    }
  }
}
</style>
