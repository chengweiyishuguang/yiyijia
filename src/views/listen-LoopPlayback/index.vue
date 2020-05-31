<template>
  <div class="loop-container">
    <layoutheader>
      <p slot="names">序：中国养生的现状</p>
    </layoutheader>

    <!-- banner区域 -->
    <div class="banner">
      <img src alt />
    </div>
    <!-- 列表播放 -->
    <div class="loop-list">
      <p>列表播放</p>
      <ul>
        <li>
          <a href="#">中国养生现状</a>
        </li>
        <li>
          <a href="#">春天重要在养肝</a>
        </li>
        <li>
          <a href="#">春天易患哪些病</a>
        </li>
        <li>
          <a href="#">夏天怎么养心</a>
        </li>
        <li>
          <a href="#">谈谈“冬病夏治”与“夏并冬治”</a>
        </li>
      </ul>
    </div>
    <!-- 关闭按钮 -->
    <div class="close">
        <div >
       <button>关闭</button>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'loop-playback'
}
</script>

<style lang="less" scoped>
.loop-container {
  background-color: #55dacd;
  overflow: hidden;
}
// banner区
.banner {
  margin: 120px 35px 82px 35px;
  width: 680px;
  height: 362px;
  border-radius: 20px;
  background-color: #ccc;

  img {
    width: 100%;
    height: 100%;
  }
}
.loop-list {
  background-color: #fff;
  padding: 0 35px;
  p {
      height: 96px;
    color: #1a1a1a;
    font-weight: 700;
    line-height: 96px;
    font-size: 30px;
    font-family: Source Han Sans SC;
    border-bottom: 2px solid rgba(239, 239, 239, 1);
  }
  ul li {
      height: 90px;
    color: #1a1a1a;
    border-bottom: 1px solid rgba(239, 239, 239, 1);
    a {
      font-size: 30px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(18, 18, 18, 1);
      line-height: 42px;
    }
  }
  li:nth-child(1) {
    a {
      color: #29bdaf;
    }
  }
}
.close {
    width: 100%;
    position: fixed;
    bottom:0;
    z-index: 999;

div {
    display: flex;
    justify-content: center;
button {
  width:680px;
height:77px;
background:rgba(227,227,227,1);
border-radius:20px;
border:none;
text-align: center;
font-size:34px;
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(51,51,51,1);
    }
}

}
</style>
