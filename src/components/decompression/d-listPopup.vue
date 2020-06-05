<template>
  <div class="listPopup">

     <div class="container-top">
         <div class="l-icon">
          <i class="xunhuan"></i>
      </div>
      <p>
        列表渲染
        </p>
      <div class="container-icon">
          <i class="huishou"></i>
      </div>

    </div>

    <ul>
      <li>

        <p>海浪</p>
        <i class="del-icon"></i>
      </li>
      <li>

        <p>冬季风声</p>
        <i class="del-icon"></i>
      </li>
      <li>

        <p>冬季风声</p>
        <i class="del-icon"></i>
      </li>
      <li>

        <p>夏日夜晚虫鸣</p>
        <i class="del-icon"></i>
      </li>
      <li>

        <p>海浪</p>
        <i class="del-icon"></i>
      </li>
      <li>
        <button>关闭</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.listPopup {
  width: 750px;
  height: 790px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  z-index: 999;
}

.container-top {
  height: 105px;
  line-height: 105px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  position: relative;
  .l-icon  i {
        background: url(../../assets/d-xunhuan.png) no-repeat;
        background-size: 33px;
        height: 33px;
        width: 33px;
        position: absolute;
        top:35px;
        left:35px;
    }

  p {
      flex: 80%;
    font-size: 32px;
    font-weight: 700;
    color: rgba(47, 47, 47, 1);
    margin-left:98px;

  }
  .container-icon {
      flex: 20%;
      height: 69px;
      line-height: 69px;
      border-left: 2px solid #EFEFEF;
      position: relative;
      top:20px;
    .huishou {
         background: url(../../assets/d-huishou-icon.png) no-repeat;
        background-size: 33px;
        height: 33px;
        width: 31px;
        position: absolute;
        top:20px;
        right:35px;
    }

  }
  span {
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(96, 96, 96, 1);
  }
}
ul {
  box-sizing: border-box;
}
ul li {
  height: 120px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  border-bottom: 1px solid #ccc;
  position: relative;

  p {

    font-size: 28px;
    color: rgba(85, 85, 85, 1);
  }
  .del-icon {
       background: url(../../assets/d-shanchu@2x.png) no-repeat;
        background-size: 28px;
        height: 28px;
        width: 28px;
        position: absolute;
        top:20px;
        right:35px;
  }

  button {
    width: 680px;
    height: 77px;
    background: rgba(227, 227, 227, 1);
    border-radius: 20px;
    text-align: center;
    font-size: 34px;
  }
}
ul li:nth-child(2) {
  p {
    color: rgba(41, 189, 175, 1);
  }
}
</style>
