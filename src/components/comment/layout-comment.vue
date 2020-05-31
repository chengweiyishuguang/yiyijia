<template>
  <div class="layout-comment">
      <!-- 评论学习列表 -->
    <ul>
      <li>
        <div class="comment-left">
          <!-- <img src alt /> -->
        </div>
        <div class="comment-right">
          <div class="right-top">
            <p>果小冻</p>
            <span>2019-10-29 14:20</span>
          </div>
          <p class="right-text">
            有些疾病在全世界流行，但各地的流行程度不同。
            如 流行性脑脊髓膜炎，流行于世界各地，但在温带地区
            较热带地区更为官方和严重。
          </p>
          <div class="right-bo">
            <span>
              <i class="weidianzan"></i>
              <i class="dianzan" style="display: none;"></i>
              416
            </span>
            <span>
              <i class="liuyan"></i>
              16
            </span>
          </div>
        </div>
      </li>
      <li>
        <div class="comment-left">
          <!-- <img src alt /> -->
        </div>
        <div class="comment-right">
          <div class="right-top">
            <p>果小冻</p>
            <span>2019-10-29 14:20</span>
          </div>
          <p class="right-text">
            有些疾病在全世界流行，但各地的流行程度不同。
            如 流行性脑脊髓膜炎，流行于世界各地，但在温带地区
            较热带地区更为官方和严重。
          </p>
          <div class="right-bo">
            <span>
              <i class="weidianzan" style="display: none;"></i>
              <i class="dianzan"></i>
              416
            </span>
            <span>
              <i class="liuyan"></i>
              16
            </span>
          </div>
        </div>
      </li>
    </ul>
    <!-- 留言输入框 -->
    <div class="last-fixed">
      <textarea name id placeholder="想评论点什么呢"></textarea>
      <span class="last-l">
        <i class="liuyan2"> </i>
        32
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
ul {
  padding: 0 34px 0 34px;
}
li {
  width: 100%;
  height: 100%;
  display: flex;
margin-top:130px;
  overflow: hidden;
}
.comment-left {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #ccc;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
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
    margin-top: 29px;
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
.last-fixed {
  width: 750px;
  height: 98px;
  line-height: 98px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
  box-sizing: border-box;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 999;

  textarea {
    border: 0;
    padding-left: 35px;
    width: 552px;
    height: 61px;
    line-height: 61px;
    background: rgba(242, 242, 242, 1);
    border-radius: 20px;
    resize: none;
    font-size: 24px;
    color: rgba(136, 136, 136, 1);
    box-sizing: border-box;
  }
  .last-l {
    margin-left:61px;
     font-size: 22px;
      font-family: Source Han Sans SC;
      color: rgba(85, 85, 85, 1);
      position: relative;
    top:-20px;
    .liuyan2 {
       background: url(../../assets/liuyan.png) no-repeat;
        width: 31px;
        height: 33px;
        background-size: 31px;
        position: absolute;
        top: 0px;
        left: -40px;
    }
  }

}
</style>
