<template>
  <div class="layout-list">
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
          <i class="list-top-icon">
            <slot name="icon"></slot>

          </i>
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
      <slot name="punch-list"></slot>
      <!-- <div class="list-two">
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
      </div> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
        // background: url(../../assets/punch-icon.png) no-repeat;
        width: 66.8px;
        height: 66.8px;
        // background-size: 66.8px;
        position: absolute;
        top: 41px;
        right: 49px;
        img {
          width: 100%;
          height: 100%;
        }
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

</style>
