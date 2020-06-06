<template>
<!-- 身心灵-家庭页 -->
  <div class="family-container">
      <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">减压助眠</p>
    </layoutheader>

    <!-- 搜索区域 -->
    <layoutsearch>
      <template slot="n-search"></template>
    </layoutsearch>
     <!-- banner区域 -->
    <decbanner/>
     <!-- tabbar -->
    <div class="navigation">
      <router-link tag="a" class="navigation-left" to="/miuse">
        <span>音乐</span>
        <i class="line" style="visibility:hidden;"></i>
      </router-link>
      <router-link tag="a" class="navigation-middle" to="/">
        <span>人生如歌</span>
        <i class="line" style="visibility:hidden;"></i>
      </router-link>
      <router-link tag="a" class="navigation-right" to="/body">
        <span>身心灵</span>
        <i class="line"></i>
      </router-link>
    </div>

    <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>
          <!-- 综合排序 -->

          综合排序
          <i class="iconfont icon-xialajiantou">

          </i>
        </span>

      </a>
      <a href="#">
        <span>事业</span>
      </a>
      <a href="#">
        <span>家庭</span>
      </a>
      <a href="#">
        <span>社会</span>
      </a>
      <a href="#">
        <span>职场</span>
      </a>
    </div>
    <!-- 听书区域 -->
    <layoutaudio>

        <template slot="hg-o">
              <span class="hg">
      <img src="../../assets/hg.png" alt="">
        </span>
        </template>
    </layoutaudio>

    <!-- 固定条 -->
    <layoutfixed></layoutfixed>
  </div>
</template>

<script>
export default {
  name: 'family-page'
}
</script>

<style lang="less" scoped>
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
    height: 82px;
//   margin: 40px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 59px 0 45px;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
  a {
      display: block;
    //   width: 100%;
      height: 100%;
    //   line-height: 50%;
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
  a:nth-child(3) span {
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
.navigation-bar a:nth-child(1) {
    position: relative;
}
.icon-xialajiantou {
    font-size:12px;
    color:#737373;

}
.sort-icon {
  text-align: center;
    font-size:16px;
    width:47px;
height:22px;
line-height: 22px;
border:1px solid #ff8439;
color:#ff8439;
border-radius:4px;
position: absolute;
top:10px;
right:-86px;
}
.f-cion {
    border:1px solid #29BDAF;
color:#29BDAF;
}

</style>
