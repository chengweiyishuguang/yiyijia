<template>

  <div class="audio-list">
       <!-- 听书区域 -->
    <div class="listen">
      <!-- <div class="listen-top">
        <p>听书</p>
        <div class="line"></div>
      </div> -->
      <div class="listen-list">
        <div class="list-img">
          <img src alt />
          <span>
            <img src="../../assets/bofang14-2x.png" alt />
          </span>
        </div>
        <div class="list-item">
          <div class="list-text">
            <span>打开心中的记事本 <slot name="sort"></slot></span>
            <p>人生如歌&nbsp;&nbsp;感悟经典</p>
          </div>
          <div class="list-last">
            <div class="list-last-item">
              <img src="../../assets/bofang 1.png" alt />
              <span>416万</span>
            </div>
            <div class="list-last-item">
              <img src="../../assets/click-item.png" alt />
              <span>14:42</span>
            </div>
               <slot name="hg-o"></slot>
          </div>

        </div>
        <span class="hg" style="visibility:hidden">
      <img src="../../assets/hg.png" alt="">
    </span>
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
            <span>打开心中的记事本 <slot name="sort-o"></slot></span>
            <p>人生如歌&nbsp;&nbsp;感悟经典</p>
          </div>
          <div class="list-last">
            <div class="list-last-item">
              <img src="../../assets/bofang 1.png" alt />
              <span>416万</span>
            </div>
            <div class="list-last-item">
              <img src="../../assets/click-item.png" alt />
              <span>14:42</span>
            </div>
          </div>
        </div>
        <slot name="hg"></slot>

      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
  flex-shrink: 0;
  position: relative;

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
    font-size: 32px;
    color: rgba(68, 68, 68, 1);
    position: relative;
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
.hg {
  width: 71px;
  height: 71px;
 position: absolute;
 right:0;
 bottom:24px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>
