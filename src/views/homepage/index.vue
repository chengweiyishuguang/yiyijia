<template>
  <div id="home">
    <div class="bgc"></div>
    <!-- 头部区域 -->
    <layoutheader ><p slot="names">易益家健康平台</p></layoutheader>

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
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>健康商城</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>健康听书</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>减压助眠</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>我的空间</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>我的客户</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <img src alt />
            </i>
            <span>我的订单</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 听书区域 -->
    <div class="listen">
      <div class="listen-top">
        <p>听书</p>
        <div class="line"></div>
      </div>
      <div class="listen-list">
        <div class="list-img">
          <img src alt />
          <span>
            <img src="../../assets/bofang14-2x.png" alt />
          </span>
        </div>
        <div class="list-item">
          <div class="list-text">
            <span>打开心中的记事本</span>
            <p>人生如歌&nbsp;&nbsp;感悟经典</p>
          </div>
          <div class="list-last">
            <div class="list-last-item">
              <img src="../../assets/bofang1.png" alt />
              <span>416万</span>
            </div>
            <div class="list-last-item">
              <img src="../../assets/click-item.png" alt />
              <span>14:42</span>
            </div>
          </div>
        </div>
      </div>
      <div class="listen-list">
        <div class="list-img">
          <img src alt />
          <span>
            <img src="../../assets/bofang14-2x.png" alt />
          </span>
        </div>
        <div class="list-item">
          <div class="list-text">
            <span>打开心中的记事本</span>
            <p>人生如歌&nbsp;&nbsp;感悟经典</p>
          </div>
          <div class="list-last">
            <div class="list-last-item">
              <img src="../../assets/bofang1.png" alt />
              <span>416万</span>
            </div>
            <div class="list-last-item">
              <img src="../../assets/click-item.png" alt />
              <span>14:42</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航区域 -->
    <layoutfooter/>

  </div>
</template>

<script>
import layoutheader from '@/components/home/layout-header'
import layoutfooter from '@/components/home/layout-footer'
export default {
  components: {
    layoutheader,
    layoutfooter
  }
}
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
    width:594px;
    height:52px;
     display: flex;
     position: relative;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 13px 0px rgba(0, 0, 0, 0.21);
    border-radius:10px;
    box-sizing: border-box;
     input {
        width: 100%;
        height: 100%;
       background:rgba(255,255,255,1);
      font-size: 20px;
      padding-left: 64px;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
    }

    .search1 {

    height:30px;
    width:30px;
      background: url(../../assets/search-icon191@2x.png) no-repeat ;
     background-size: 20px;
    position: absolute;
    top:15px;
    left:22px;

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
        margin-top:19px;
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
//听书区域
.listen-top {
  display: flex;
  flex-direction: column;
  padding-left: 45px;
  box-sizing: border-box;
  p {
    width: 72px;
    height: 33px;
    font-size: 36px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 36px;
  }
  .line {
    margin-top: 11px;
    margin-left: 13px;
    width: 42px;
    height: 5px;
    background: rgba(41, 189, 175, 1);
    border-radius: 3px;
  }
}
.listen {
  margin: 0 34px;
}
.listen-list {
  width: 680px;
  height: 224px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.21);
  background: rgba(255, 255, 255, 1);
  padding-left: 25px;
  box-sizing: border-box;
  border-radius: 20px;

  .list-img {
    height: 180px;
    width: 180px;
    background-color: #ccc;
    position: relative;
    .img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
    span {
      position: absolute;
      width: 51px;
      height: 51px;
      left: 50%;
      top: 50%;
      margin: -50px 0 0 -50px;
    }
  }
}
.list-item {
  margin-left: 29px;
}
.list-text {
  span {
    width: 254px;
    height: 30px;
    font-size: 32px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(68, 68, 68, 1);
    line-height: 41px;
  }
  p {
    width: 177px;
    height: 19px;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 36px;
  }
}
.list-last {
  display: flex;
  .list-last-item {
    margin-top: 52px;
    span {
      margin-left: 15px;
      width: 57px;
      height: 19px;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 36px;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
  .list-last-item:nth-child(2) {
    margin-left: 34px;
    img {
      width: 22px;
      height: 22px;
    }
  }
}

</style>
