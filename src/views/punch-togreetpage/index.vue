<template>
  <div ckass="togreet-container">
    <!-- 背景图片 -->
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <div class="layout-header">
      <header>
        <div class="left">
          <i class="iconfont icon-zhaoshangxiaochengxu-jiantou-zuo"></i>
        </div>
        <p>【早安第24天】这个世界...</p>
        <div class="right">
          <i class="iconfont icon-xiaochengxu-gengduo"></i>
          <i class="iconfont icon-vertical_line"></i>
          <i class="iconfont icon-xiaochengxu-guanbi"></i>
        </div>
      </header>
    </div>
    <!-- 列表区域 -->
    <div class="togreet-list">
      <div class="togreet-list-box">
        <div class="list-top">
          <div class="list-top-img">
            <img src alt />
          </div>
          <div class="list-top-name">
            <p>黑衣LU霞</p>
            <span>182184正在共同打卡</span>
          </div>
          <i class="list-top-icon"></i>
        </div>
        <div class="list-bottom">
          <p>
            守护健康
            <span>第24天</span>
          </p>
          <span>03/26 星期四</span>
          <span>农历三月初三</span>
        </div>
      </div>
      <!-- 列表二层 -->
      <div class="list-two">
        <p>成光里是的梦人</p>
        <p>
          奋斗就是每天做好手头上的每件小事,不推
          不抱怨不推卸责任不偷懒。
        </p>
        <p>
          每天一点一滴的努力，才能汇聚起千万勇
          气，带着你的坚持，引领你到你想要到的
          地方去。
        </p>
      </div>
    </div>
    <!-- 问候语 -->
    <div class="greetings">
        <a href="#">变成我的问候</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'togreet-page'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/bg-@2x.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
header {
  position: fixed;
  width: 750px;
  height: 88px;
  min-width: 320px;
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
  font-size: 36px;
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
.togreet-list {
  padding: 0 35px;
  .togreet-list-box {
    display: flex;
    flex-direction: column;
    margin-top: 374px;
    width: 679px;
    height: 375px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.31);
    border-radius: 20px;
    .list-top
     {
      padding: 30px 0 41px 31px;
      position: relative;
      display: flex;
      .list-top-img {
        width: 135px;
        height: 136px;

        border-radius: 50%;
        background-color: #ccc;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .list-top-name {
        margin-top: 30px;
        margin-left: 20px;
        p {
          font-size: 32px;
          color: rgba(85, 85, 85, 1);
          line-height: 25px;
        }
        span {
          font-size: 26px;
          color: rgba(153, 153, 153, 1);
        }
      }

      .list-top-icon {
        background: url(../../assets/punch-icon.png) no-repeat;
        width: 66.8px;
        height: 66.8px;
        background-size: 66.8px;
        position: absolute;
        top: 41px;
        right: 49px;
      }
    }

    .list-bottom {
      padding-left: 31px;
      display: flex;
      flex-direction: column;
      p {
        font-size: 42px;
        span {
          color: #f77d00;
          font-size: 42px;
        }
      }
      span {
        font-size: 26px;
        color: #666666;
      }
      span:nth-child(2) {
        color: #333333;
      }
    }
  }
  .list-two {
      margin-top:19px;
    width: 679px;
    height: 375px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.31);
    border-radius: 20px;
    padding:40px 37px 56px 40px;
    box-sizing: border-box;

    p:nth-child(1) {

        text-align: center;
      font-size: 34px;

      font-weight: 700;
      color: rgba(68, 68, 68, 1);
      line-height: 36px;
    }
    p:nth-child(2) {
         margin-top:40px;
    }
    p:nth-child(3) {
         margin-top:35px;
    }
    p:nth-child(2),
     p:nth-child(3) {

      font-size:30px;
color:#565656;

     }

  }
}
.greetings {
    text-align: center;
    position: fixed;
    bottom: 63px;
    left: 35px;

    a {
        display: block;
        width:680px;
height:80px;
line-height: 80px;
background:rgba(41,189,175,1);
border-radius:20px;
font-size:34px;
color:#FFFFFF;
text-align: center;
    }
}
</style>
