<template>
  <div class="d-music">
    <!-- 头部 -->
    <layoutheader>
      <p slot="names">减压助眠</p>
    </layoutheader>

    <!-- banner区域 -->
    <div class="banner">
      <img src="../../assets/d-banner.png" alt="">
    </div>
    <!-- tabbar -->
    <div class="navigation">
      <router-link tag="a" class="navigation-left" to="/miuse">
        <span>音乐</span>
        <i class="line"></i>
      </router-link>
      <router-link tag="a" class="navigation-middle" to="/">
        <span>人生如歌</span>
        <i class="line" style="visibility:hidden;"></i>
      </router-link>
      <router-link tag="a" class="navigation-right" to="/body">
        <span>身心灵</span>
        <i class="line" style="visibility:hidden;"></i>
      </router-link>
    </div>

    <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>白噪音</span>
        <i class="line"></i>
      </a>
      <a href="#">
        <span>大自然</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
      <a href="#">
        <span>轻音乐</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
    </div>
    <!-- 加入播放清单 -->
    <ul class="Addplaylist">
      <li>
        <p>雷雨声</p>
        <div class="bofangqd">
          <a href="#">加入播放清单</a>
          <a href="#" style="visibility:hidden">已入播放清单</a>
        </div>

        <span>
          <i class="Addicon"></i>
          416万
        </span>
      </li>
      <li>
        <p>冬季风声</p>
        <div class="bofangqd">
          <a href="#" style="visibility:hidden">加入播放清单</a>
          <a href="#">已入播放清单</a>
        </div>

        <span>
          <i class="Addicon"></i>
          416万
        </span>
      </li>
      <li>
        <p>夏日夜晚虫鸣</p>
        <div class="bofangqd">
          <a href="#">加入播放清单</a>
          <a href="#" style="visibility:hidden">已入播放清单</a>
        </div>

        <span>
          <i class="Addicon"></i>
          416万
        </span>
      </li>
      <li>
        <p>海浪</p>
        <div class="bofangqd">
          <a href="#">加入播放清单</a>
          <a href="#" style="visibility:hidden">已入播放清单</a>
        </div>

        <span>
          <i class="Addicon"></i>
          416万
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'musicpage'
}
</script>

<style lang="less" scoped>
// banner区
.banner {
  margin: 105px 35px 9px 35px;
  width: 680px;
  height: 298px;
  border-radius: 20px;
  background-color: #ccc;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
// tabbar
.navigation {
  display: flex;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 40px 156px 40px 159px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.navigation > a {
  text-align: center;

  span {
    width: 65px;
    height: 30px;
    font-size: 32px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(85, 85, 85, 1);
    line-height: 30px;
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
// 导航2
.navigation-bar {
  //   margin:40px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;
  padding-bottom: 21px;
  border-bottom: 1px solid #d3d3d3;
  a:nth-child(2) {
    margin: 0 72px 0 76px;
  }

  span {
    width: 102px;
    height: 25px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    line-height: 36px;
    color: rgba(115, 115, 115, 1);
  }
  a:nth-child(1) span {
    color: #29bdaf;
  }

  .line {
    display: block;
    text-align: center;
    margin: 0px 0px 0 10px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
ul {
  padding: 0 35px;
  li {
    height: 115px;
    text-align: center;
    line-height: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    p {
      flex: 33.3%;
      font-size: 28px;
      color: #555555;
      text-align: left;
    }
    .bofangqd {
      flex: 33.3%;
      position: relative;
      a {
        display: block;
        width: 190px;
        height: 50px;
        line-height: 50px;
        background: rgba(41, 189, 175, 1);
        border-radius: 10px;
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
      a:nth-child(2) {
        background: rgba(187, 187, 187, 1);
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    span {
      // flex:33.3%;
      font-size: 22px;
      position: relative;
      color: rgba(102, 102, 102, 1);
      .Addicon {
        background: url(../../assets/bofang1.png) no-repeat;
        //   margin-right: 20px;
        width: 22px;
        height: 22px;
        background-size: 22px;
        position: absolute;
        left: -40px;
        top: 50%;
        margin-top: -12px;
      }
    }
  }
}
</style>
