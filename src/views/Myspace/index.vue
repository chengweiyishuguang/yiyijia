<template>
  <!-- 我的空间 -->
  <div class="My-space-container">
    <!-- 背景图片 -->
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">我的空间</p>
    </layoutheader>
    <!-- 个人资料 -->
    <div class="names">
      <div class="names-top">
        <div class="n-top-left">
          <div class="n-top-img">
            <img src alt />
          </div>
          <p>吴小邪</p>
        </div>
        <div class="Edit-information">编辑资料</div>
      </div>
      <!-- 信息 -->
      <ul>
        <li>
          <p>260</p>
          <span>获赞</span>
        </li>
        <li class="line">|</li>
        <li>
          <p>38</p>
          <span>关注</span>
        </li>
        <li class="line">|</li>
        <li>
          <p>42</p>
          <span>粉丝</span>
        </li>
      </ul>
    </div>
    <!-- 导航栏 -->
    <div class="play-navigation">
      <a class="play-left">
        <span>
          作品10
          <i class="play-line"></i>
        </span>
      </a>
      <a class="play-middle">
        <span>
          动态65
          <i class="play-line" style="visibility:hidden;"></i>
        </span>
      </a>
      <a class="play-middle2">
        <span>喜欢99</span>
        <i class="play-line" style="visibility:hidden;"></i>
      </a>
    </div>
    <!-- 夜听列表 -->
    <div class="night-list">
      <div class="night-list-top">
        <span class="list-top-line"></span>
        <p>夜听</p>
      </div>
      <div class="list-item">

          <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>

          <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>
        <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>

      </div>

    </div>
    <!-- 身心灵 -->
    <div class="night-list">
      <div class="night-list-top">
        <span class="list-top-line"></span>
        <p>身心灵</p>
      </div>
      <div class="list-item">

          <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>

          <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>
        <div class="list-item-img">
            <img src alt />
            <div class="list-item-img-bottom">
              <i class="img-bottom-bof"></i>
              <p class="img-bottom-shu">13.3万</p>
            </div>

        </div>

      </div>

    </div>
    <footer>
      <div class="pl">
        <p>评论</p>
      </div>
      <span class="footer-line">|</span>
      <div class="sc">
        <button >上传</button>
      </div>
      <span class="footer-line">|</span>
      <div>
        <p class="zf">转发 </p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'My-space-page'
}
</script>

<style lang="less" scoped>
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
  .Edit-information {
    width: 89px;
    height: 33px;
    border: 1px solid rgba(210, 210, 210, 1);
    border-radius: 10px;
    font-size: 17px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
}
ul {
  display: flex;
  padding: 47px 94px 43px 83px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  li {
    line-height: 30px;
    p {
      font-size: 34px;
      color: #333333;
    }
    span {
      font-size: 24px;
      color: #565656;
    }
  }
  .line {
    color: #e2e2e2;
  }
}
.play-navigation {
  display: flex;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 21px 0 21px;
  margin-top: 41px;
  a {
    display: block;
    display: flex;
    span {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 32px;
      color: rgba(85, 85, 85, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .play-line {
      margin-top: 15px;
      width: 66px;
      height: 2px;
      background: rgba(41, 189, 175, 1);
      border-radius: 1px;
    }
  }
}
.night-list {
  .night-list-top {
    padding-left: 45px;
    height: 90px;
    display: flex;
    align-items: center;
    .list-top-line {
      display: block;
      width: 6px;
      height: 25px;
      background: rgba(41, 189, 175, 1);
      border-radius: 3px;
    }
    p {
      margin-left: 13px;
      font-size: 30px;
      color: #444444;
    }
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 34px;

      .list-item-img {
        width: 216px;
        height: 214px;
        border-radius: 10px;
        background-color: #ccc;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .list-item-img-bottom {
          width: 216px;
          height: 43px;
          line-height: 43px;
          background: rgba(0, 0, 0, 1);
          opacity: 0.38;
          border-radius: 10px 10px 0 0;
          position: absolute;

          bottom: 0;
          .img-bottom-bof {
            background: url(../../assets/all-icon.png);
            width: 20px;
            height: 20px;
            background-size: 20px;
            top: 12px;
            left: 21px;
            position: absolute;
          }
          .img-bottom-shu {
            font-size: 18px;
            color: #555555;
            margin-left: 50px;
          }
        }
      }

  }
}
footer {
  width:750px;
height:90px;
background:rgba(255,255,255,1);
box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.56);
display: flex;
justify-content:space-between;
align-items: center;
padding:0 96px;
box-sizing: border-box;

  .pl {
    p {
      font-size:30px;
      color:#333;
    }
  }
  .sc {
    width: 184px;
      height: 62px;
    button {
      width: 100%;
      height: 100%;
      border:none;
      border-radius: 10px;
      background-color: #FF4445;
      color:#fff;
      font-size:30px;
    }
  }
  .zf {
    font-size:30px;
   color:#333;
  }
  .footer-line {

    color:#E0E0E0;

  }
  }
</style>
