<template>
  <div class="comment-cotainer">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">失传的营养学</p>
    </layoutheader>

    <layoutpublic>
      <p slot="text1">失传的营养</p>
    </layoutpublic>
    <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>节目列表</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#">
        <span>简介</span>
        <i class="line"></i>
      </a>
      <a href="#">
        <span>评论学习</span>
        <i class="line" style="display: none;"></i>
      </a>
    </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment'
}
</script>

<style lang="less" scoped>
// 导航2
.navigation-bar {
  margin: 15px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.07);
  a:nth-child(2) {
    margin: 0 72px 0 76px;
  }

  span {
    padding-left: 5px;
    width: 102px;
    height: 25px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    line-height: 36px;
    color: rgba(115, 115, 115, 1);
  }
  a:nth-child(2) span {
    color: #29bdaf;
  }

  .line {
    display: block;

    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
.introduce-text {
  padding: 0 34px;
  p {
    width: 683px;
    height: 133px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    color: rgba(85, 85, 85, 1);
  }
}
ul {
  padding: 0 34px 0 34px;
}
li {
  width: 100%;
  height: 100%;
  display: flex;

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
}
</style>
