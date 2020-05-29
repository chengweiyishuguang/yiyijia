<template>
  <div class="person-container">
    <!-- 背景图 -->
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">个人中心</p>
    </layoutheader>
    <!-- 播放 -->
    <div class="details">
      <div class="details-left">
        <img src alt />
        <div class="details-img-b">
          <i></i>

          <span>416万</span>
        </div>
      </div>

      <div class="details-right">
        <p>打开心中的记事本</p>
        <div class="details-right-m">
          <div class="right-m-left">
            <img src alt />
          </div>
          <p>
            播音：吴小闲
            <span>|</span>已更新60期
          </p>
        </div>
        <span class="share">
          <i></i>
          分享
        </span>
      </div>
    </div>
    <!-- 节目 -->
    <div class="details-list">
      <div class="navigation">
        <a href="#" class="navigation-left">
          <span>节目60</span>
          <i class="line"></i>
        </a>
      </div>
      <div class="details-list-top">
        <i class="bofang"></i>
        <p>播放全部</p>
        <div class="container-icon">
          <i class="daoxu"></i>
          <div class="text">
            <i class="zx"></i>
            <span>正序</span>
          </div>
        </div>

        <div class="xuan">
          <i></i>
          选集
        </div>
      </div>
      <ul>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="">
              <i style="display:none">1</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none">
              <i>2</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none">
              <i>3</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none">
              <i>4</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none">
              <i>5</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none">
              <i>5</i>
            </div>

            <div class="li-img-a">
              <p>不在一起没有关系了</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon2">14:42</span>
            </div>
          </div>
          <span class="li-time">一个月</span>
        </li>
      </ul>
    </div>
    <div class="player">
      <div class="player-img">
        <img src="" alt="">
      </div>
      <div class="player-m">
        <p>3无论前面路多苦，都比站在原地更</p>
        <span>16:22</span>
      </div>
      <div class="player-again">
        <!-- 页面没找到这个图片找梦秋 -->
        <img src="../../assets/audio-icon4.png" alt="">
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'personpage'
}
</script>

<style lang="less" scoped>

.bgc {
  background: url(../../assets/b-bgc.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.details {
  margin-top: 163px;
  display: flex;
  padding-left: 34px;
  .details-left {
    width: 162px;
    height: 161px;
    border-radius: 10px;
    background-color: #ccc;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .details-img-b {
      padding-left: 50px;
      position: absolute;
      bottom: 0;
      width: 162px;
      height: 28px;
      background: rgba(0, 0, 0, 1);
      opacity: 0.47;
      display: flex;
      box-sizing: border-box;
      i {
        background: url(../../assets/bofang1.png) no-repeat;
        width: 20px;
        height: 20px;
        background-size: 20px;
        position: absolute;
        top: 2px;
        left: 10px;
      }
    }
    span {
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
    }
  }
}

.details-right {
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 36px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .details-right-m {
    display: flex;
    justify-content: center;
    align-items: center;
    .right-m-left {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-left: 17px;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(227, 229, 231, 1);
      span {
        padding: 0 14px 0 48px;
      }
    }
  }
  .share {
    margin-top: 27px;
    width: 199px;
    height: 57px;
    line-height: 57px;
    border: 1px solid rgba(227, 229, 231, 1);
    border-radius: 10px;
    position: relative;
    font-size: 22px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(227, 229, 231, 1);
    text-align: center;
    i {
      background: url(../../assets/fx@2x.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 20px;
      left: 50px;
    }
  }
}
.details-list {
  background: rgba(255, 255, 255, 1);
  height: 100%;
  margin-top: 50px;
}
.navigation {
  display: flex;
  width: 750px;
  height: 90px;
  padding-left: 45px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 2px solid rgba(239,239,239,1);
}

.navigation > a {
  text-align: center;

  span {
    font-size: 32px;
    font-family: Source Han Sans SC;
    font-weight: 700;
    color: rgba(47, 47, 47, 1);
  }
  .line {
    display: block;
    margin: 18px 0 11px 0;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
.details-list-top {
  width: 750px;
  height: 75px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid  rgba(239,239,239,1);
  padding: 0 34px;

  p {
    font-size: 32px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(47, 47, 47, 1);
  }
  .container-icon {
    margin-left: 316px;
    position: relative;

    .daoxu {
      background: url(../../assets/fan.png) no-repeat;
      width: 27px;
      height: 20px;
      background-size: 30px;
      position: absolute;
      top: 10px;
      left: 0px;
    }
  }
  .text {
    position: relative;
    .zx {
      background: url(../../assets/zheng.png);
      width: 27px;
      height: 20px;
      background-size: 30px;
      position: absolute;
      top: 40px;
      left: 0px;
    }

    span {
      margin-left: 40px;
      font-size: 26px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(96, 96, 96, 1);
      text-align: end;
    }
  }

  .xuan {
    margin-left: 60px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(96, 96, 96, 1);
    position: relative;
    i {
      background: url(../../assets/xuan.png) no-repeat;
      width: 27px;
      height: 18px;
      background-size: 20px;
      position: absolute;
      top: 15px;
      left: -30px;
    }
  }
}
ul {
padding:0 35px;
}
ul li {
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(239,239,239,1);
  padding: 0 34px;

  .li-bot {
    padding-left: 30px;

    .li-bot-a {
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
         img{
        width: 100%;
        height: 100%;
        position: absolute;
        top:52px;
        z-index: 999;
         }
      }

      i {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(85, 85, 85, 1);
        position: absolute;
        top:50px;
        left: 0px;
      }
    }
  }

  .li-img-a {

    line-height: 40px;
    padding-left: 35px;
    p {
      margin-left: 18px;
      font-size: 28px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(85, 85, 85, 1);
    }
    span {
      font-size: 22px;
      font-family: Source Han Sans SC;
      color: rgba(85, 85, 85, 1);
      text-align: center;
      padding-left: 30px;
    }
    .li-icon1,
    .li-icon2 {
      margin-left: 32px;
      position: relative;
    }
    .li-icon1::before {
      content: "";
      display: block;
      background: url(../../assets/bofang1.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 5px;
      left: 0px;
    }

    .li-icon2::before {
      content: "";
      display: block;
      background: url(../../assets/clock--icon.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 5px;
      left: 0px;
    }
  }

ul li:nth-child(1) {
  p {
    color: rgba(41, 189, 175, 1);
  }
}
.li-time {
  font-size: 22px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(176, 176, 176, 1);
}
.player {
  position: fixed;
  left:33px;
  bottom:36px;
  width:682px;
height:112px;
// background:rgba(0,0,0,1);
background-color: #7f7f7f;
//opacity:0.5;
border-radius:10px;
display: flex;
justify-content: space-between;
padding:7px;
.player-img {
  width:74px;
  height:75px;
  border-radius:6px;
  background-color: #ccc;
img {
  width: 100%;
  height: 100%;
  }
  }
  .player-m {
    p,span {
      font-size:28px;
font-family:Source Han Sans SC;

color:rgba(239,239,239,1);
    }
  }
.player-again {
  width: 77px;
  height: 77px;
  background-color: #ccc;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
}
</style>
