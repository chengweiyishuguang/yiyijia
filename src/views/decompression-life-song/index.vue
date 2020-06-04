<template>
  <div class="life-song">
      <!-- 头部 -->
    <layoutheader>
      <p slot="names">人生如歌</p>
    </layoutheader>
    <!-- banner区域 -->
    <div class="banner">
      <img src alt />
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
        <span>综合排序</span>
        <i class="line"></i>
      </a>
      <a href="#">
        <span>播放量较多</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
      <a href="#">
        <span>最近更新</span>
        <i class="line" style="visibility:hidden;"></i>
      </a>
    </div>
     <!-- 听书区域 -->
    <layoutaudio></layoutaudio>

  </div>
</template>

<script>
export default {
  name: 'life-song-page'
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
