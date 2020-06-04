<template>
  <div id="home">

    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">易益家健康平台</p>
    </layoutheader>

    <!-- 搜索区域 -->
    <div class="search">
      <div class="inp">
        <i class="search1"></i>
        <input type="text" placeholder="搜索你想要的" />
      </div>
      <div class="customer">
        <img src="../../assets/customer.png" alt />
      </div>
    </div>
    <!-- 轮播圆点 -->
    <div class="dots">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <!-- 早中晚打卡 -->
    <div class="clock-in">
      <div class="left">
        <div class="clock">
          <img src="../../assets/clock-img-10.png" alt />
        </div>
        <div class="text">
          <p>早中晚打卡</p>
          <p>175597正在共同打卡</p>
        </div>
      </div>

      <div class="bofang">
        <img src="../../assets/back@2x.png" alt />
      </div>
    </div>
    <!--主体区域-->
    <div class="main">
      <ul>
        <li>
          <router-link tag="a" to="">
            <i>
              <img src alt />
            </i>
             <span>健康商城</span>
          </router-link>

        </li>
        <li>
          <router-link tag="a" to="">
            <i>
              <img src alt />
            </i>
             <span>健康听书</span>
          </router-link>

        </li>
        <li>
          <router-link tag="a" to="/decompression-life-song">
            <i>
              <img src alt />
            </i>
            <span>减压助眠</span>
          </router-link>

        </li>
        <li>
          <router-link tag="a" to="">
            <i>
              <img src alt />
            </i>
             <span>我的空间</span>
          </router-link>

        </li>
        <li>
          <router-link tag="a" to="">
            <i>
              <img src alt />
            </i>
              <span>我的客户</span>
          </router-link>

        </li>
        <li>
          <router-link tag="a" to="">
            <i>
              <img src alt />
            </i>
              <span>我的订单</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 听书区域 -->
    <layoutaudio></layoutaudio>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.bgc {
  background: url(../../assets/bg-@2x.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  //background-attachment: fixed;
}

.search {
  margin-top: 126px;
  display: flex;
  padding: 0 35px 0 35px;
  justify-content: space-between;
  .inp {
    width: 594px;
    height: 52px;
    display: flex;
    position: relative;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 1);
      font-size: 20px;
      padding-left: 64px;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
    }

    .search1 {
      height: 30px;
      width: 30px;
      background: url(../../assets/search-icon191@2x.png) no-repeat;
      background-size: 20px;
      position: absolute;
      top: 15px;
      left: 22px;
    }
  }
  .customer {
    margin-top: 20px;
    width: 51px;
    height: 55px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
//  轮播圆点
.dots {
  margin-top: 260px;
  margin-bottom: 20px;
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 90px;
  i {
    width: 10px;
    height: 10px;
    background-color: #90d9ce;
    border-radius: 50%;
  }
  i:nth-child(2) {
    height: 20px;
    width: 10px;
    background-color: #f9fffe;
    border-radius: 5px;
  }
}
// 早中晚打卡
.clock-in {
  width: 681px;
  height: 146px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 39px 0 22px;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
  }

  .clock {
    width: 107px;
    height: 119px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    margin-left: 20px;
    p:nth-child(1) {
      margin: 0;
      padding: 0;
      width: 133px;
      height: 25px;
      font-size: 26px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 36px;
    }
    p:nth-child(2) {
      margin-top: 19px;
      width: 265px;
      height: 25px;
      font-size: 26px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(96, 96, 96, 1);
      line-height: 36px;
    }
  }
  .bofang {
    width: 31px;
    height: 31px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 主体区域
.main {
  width: 680px;
  height: 503px;
  margin: 12px 34px 60px 34px;
  padding: 20px 40px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: -3px 1px 9px 0px rgba(5, 4, 22, 0.18);
  border-radius: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      height: 234px;
      align-items: center;
      flex-direction: column;
      width: 224px;
      justify-content: center;
      a {
        display: block;
        i {
          display: block;
          width: 96px;
          height: 96px;
          background: rgba(226, 226, 226, 1);
          border-radius: 50%;
        }
        span {
          width: 101px;
          height: 25px;
          font-size: 26px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
        }
      }
    }
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      border-bottom: 2px solid #e3e3e3;
    }
    li:nth-child(2),
    li:nth-child(5) {
      border-left: 2px solid #e3e3e3;
      border-right: 2px solid #e3e3e3;
    }
    li:nth-child(1),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(6) {
      width: 186px;
    }
  }
}
</style>
