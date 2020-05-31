<template>
  <div class="mycomment">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">我的评论</p>
    </layoutheader>
    <!-- 评论列表 -->
    <!-- 评论列表 -->
    <div class="pl">
      <layoutcomment></layoutcomment>
    </div>
    <!-- 我的评论 -->
    <div class="comment">
      <div class="comment-right">
        <div class="right-top">
          <p>乐途</p>
          <span>2019-10-30 16:47</span>
        </div>
        <p class="right-text">那可要做好个人防护</p>
      </div>
      <div class="comment-right comment-right-t">
        <div class="right-top">
          <p>
            果小冻 回复
            <span>乐途：</span>
          </p>
          <span>2019-10-29 14:20</span>
        </div>
        <p class="right-text">
          嗯嗯，多喝水、多休息、避免熬夜、
          适度运动、提 高免疫力：注意营养、
          合理饮食，肉类、禽类和鸡 蛋类要煮熟后食用。
        </p>
        <div class="right-bottom">
          <span>剩余4条回复</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycomment'
}
</script>

<style lang="less" scoped>
.pl {
  margin-top: 125px;
}
.comment-right {
  margin-left: 8px;

  .right-top {
    line-height: 30px;
    p {
      font-size: 30px;
      font-family: Source Han Sans SC;
      font-weight: 700;
      color: rgba(18, 18, 18, 1);
    }
    span {
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
  }

  .right-text {
    // margin-top: 29px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 42px;
  }
  span {
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .right-bo {
    text-align: right;

    span {
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      position: relative;
    }
    span:nth-child(1) {
      .weidianzan {
        background: url(../../assets/zan1.png) no-repeat;
        width: 31px;
        height: 33px;
        background-size: 31px;
        position: absolute;
        top: -2px;
        left: -40px;
      }
      .dianzan {
        background: url(../../assets/zan2.png) no-repeat;
        width: 31px;
        height: 33px;
        background-size: 31px;
        position: absolute;
        top: -2px;
        left: -40px;
      }
    }
    span:nth-child(2) {
      margin-left: 44px;
      .liuyan {
        background: url(../../assets/liuyan.png) no-repeat;
        width: 31px;
        height: 33px;
        background-size: 31px;
        position: absolute;
        top: -2px;
        left: -40px;
      }
    }
  }
}
.comment {
  padding-left: 110px;
  .comment-right-t {
    margin-top: 30px;
    width: 639px;
    height: 275px;
    background: rgba(242, 242, 242, 1);
  }
  .right-bottom {
      line-height: 25px;
    span {
      font-size: 22px;
      font-family: Source Han Sans SC;
      color: rgba(41, 189, 175, 1);

    }
  }
}
</style>
