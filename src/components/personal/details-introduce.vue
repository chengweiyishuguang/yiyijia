<template>
  <div class="layout-details">
      <div class="details">
      <div class="details-left">
        <img src alt />
        <div class="details-img-b">
          <i></i>

          <span>416万</span>
        </div>
      </div>

      <div class="details-right">
        <p>打开心中的记事本</p>
        <div class="details-right-m">
          <div class="right-m-left">
            <img src alt />
          </div>
          <p>
            播音：吴小闲
            <span>|</span>已更新60期
          </p>
        </div>
        <span class="share">
          <i></i>
          分享
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.details {
  margin-top: 163px;
  display: flex;
  padding-left: 34px;
  .details-left {
    width: 162px;
    height: 161px;
    border-radius: 10px;
    background-color: #ccc;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .details-img-b {
      padding-left: 50px;
      position: absolute;
      bottom: 0;
      width: 162px;
      height: 28px;
      background: rgba(0, 0, 0, 1);
      opacity: 0.47;
      display: flex;
      box-sizing: border-box;
      i {
        background: url(../../assets/bofang1.png) no-repeat;
        width: 20px;
        height: 20px;
        background-size: 20px;
        position: absolute;
        top: 2px;
        left: 10px;
      }
    }
    span {
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
    }
  }
}

.details-right {
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 36px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .details-right-m {
    display: flex;
    justify-content: center;
    align-items: center;
    .right-m-left {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-left: 17px;
      font-size: 22px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(227, 229, 231, 1);
      span {
        padding: 0 14px 0 48px;
      }
    }
  }
  .share {
    margin-top: 27px;
    width: 199px;
    height: 57px;
    line-height: 57px;
    border: 1px solid rgba(227, 229, 231, 1);
    border-radius: 10px;
    position: relative;
    font-size: 22px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(227, 229, 231, 1);
    text-align: center;
    i {
      background: url(../../assets/fx@2x.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 20px;
      left: 50px;
    }
  }
}

</style>
