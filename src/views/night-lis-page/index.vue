<template>
  <div class="night-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">夜听</p>
    </layoutheader>

    <!-- 搜索区域 -->
    <layoutsearch>
      <template slot="n-search">

    </template>
    </layoutsearch>

    <!-- banner区域 -->
    <div class="banner">
      <img src alt />
    </div>
    <!-- 导航 -->
    <div class="navigation">
      <a href="#" class="navigation-left">
        <span>听书</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#" class="navigation-right">
        <span>夜听</span>
        <i class="line" ></i>
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

</style>
