<template>
  <div class="night-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">夜听</p>
    </layoutheader>

    <!-- 搜索区域 -->
    <div class="search">
      <div class="inp">
        <i class="search-icon"></i>
        <input type="text" placeholder="搜索你想听的节目" />
      </div>
    </div>
    <!-- banner区域 -->
    <div class="banner">
      <img src alt />
    </div>
    <!-- 导航 -->
    <div class="navigation">
      <a href="#" class="navigation-left">
        <span>听书</span>
        <i class="line"></i>
      </a>
      <a href="#" class="navigation-right">
        <span>夜听</span>
        <i class="line" style="display: none;"></i>
      </a>
    </div>

    <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>综合排序</span>
        <i class="line"></i>
      </a>
      <a href="#">
        <span>播放量较多</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#">
        <span>最近更新</span>
        <i class="line" style="display: none;"></i>
      </a>
    </div>

    <!-- 听书区域 -->
    <layoutaudio></layoutaudio>

    <!-- 固定条 -->
    <a href="#" id="fix">
      <span>上传自己的节目</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'nightpage'
}
</script>

<style lang="less" scoped>
.search {
  margin-top: 113px;
  display: flex;
  padding: 0 35px 0 35px;
  justify-content: space-between;
  .inp {
    width: 681px;
    height: 52px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    position: relative;

    display: flex;

    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      color: #a7a7a7;
      font-size: 22px;
      padding-left: 70px;
      box-sizing: border-box;
      border: none;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.21);
      border-radius: 10px;
    }

    .search-icon {
      height: 30px;
      width: 30px;
      background: url(../../assets/search-icon191@2x.png) no-repeat;
      background-size: 20px;
      position: absolute;
      top: 15px;
      left: 22px;
    }
  }
}
// banner区
.banner {
  margin: 25px 35px 9px 35px;
  width: 680px;
  height: 298px;
  border-radius: 20px;
  background-color: #ccc;
  img {
    width: 100%;
    height: 100%;
  }
}
//导航区域
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
  margin:40px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;
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
    margin: 15px 18px 0 18px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}

body #fix {
  position: fixed;
  display: block;
  width: 268px;
  height: 91px;
  background: rgba(255, 68, 68, 1);
  border-radius: 46px 0 0 46px;
   bottom: 39px;
 right: 0;
text-align: center;
  z-index: 999;

  span {
    width: 205px;
    height: 29px;
    font-size: 30px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;

  }
}
</style>
