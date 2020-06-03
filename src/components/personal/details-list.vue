<template>
  <div class="layout-details-list">
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
        <numsets></numsets>
      </div>
      <ul>
        <li>
          <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">
              <img src="../../assets/li-bof.png" alt />
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
              <img src="../../assets/li-bof.png" alt style="display:none" />
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
              <img src="../../assets/li-bof.png" alt style="display:none" />
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
              <img src="../../assets/li-bof.png" alt style="display:none" />
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
              <img src="../../assets/li-bof.png" alt style="display:none" />
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
              <img src="../../assets/li-bof.png" alt style="display:none" />
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

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
  padding: 0 34px 0 70px;
  position: relative;
  .bofang {
    background: url(../../assets/all-icon.png) no-repeat;
      width: 34px;
      height: 34px;
      background-size: 34px;
      position: absolute;
      top: 20px;
      left: 34px;
  }

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
</style>
