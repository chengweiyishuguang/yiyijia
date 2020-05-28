<template>
  <div class="shoppage">
    <layoutheader>
      <p slot="names">易益家商城</p>
    </layoutheader>
    <!-- banner区域 -->
    <div class="banner">
      <img src="../../assets/banner@2x.png" alt />
    </div>
    <!-- 导航区 -->
    <div class="Navigation">
      <a href="#">
        <span class="Navigation-item1">
          <img src="../../assets/icon-list14@2x.png" alt />
        </span>
        <p>茶包</p>
      </a>

      <a href="#">
        <span class="Navigation-item2">
          <img src="../../assets/icon-list214@2x(1).png" alt />
        </span>
        <p>砭石</p>
      </a>
      <a href="#">
        <span class="Navigation-item3">
          <img src="../../assets/icon-list3@2x(2).png" alt />
        </span>
        <p>精华液</p>
      </a>
      <a href="#">
        <span class="Navigation-item4">
          <img src="../../assets/icon-list14@2x.png" alt />
        </span>
        <p>茶包</p>
      </a>
      <a href="#">
        <span class="Navigation-item5">
          <img src="../../assets/icon-list14@2x.png" alt />
        </span>
        <p>茶包</p>
      </a>
    </div>
    <div class="l-line"></div>
    <!-- 推荐商品 -->
    <div class="recommend">
      <div class="recommend-top">
        <p>推荐商品</p>
        <div class="line"></div>
      </div>
      <div class="recommend-list">
        <div class="list-img">
          <img src alt />
        </div>
        <div class="list-item">
          <div class="list-text">
            <span>云南勐海普洱茶暖胃养胃 消脂 去腻</span>
            <p>200g</p>
          </div>
          <div class="list-last">
            <span>￥128.00</span>
          </div>
        </div>
      </div>
      <div class="recommend-list">
        <div class="list-img">
          <img src alt />
        </div>
        <div class="list-item">
          <div class="list-text">
            <span>特级黄山毛峰 名特级105g春茶</span>
            <p>105g</p>
          </div>

          <span class="list-last">￥128.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.banner {
  margin-top: 88px;
  width: 722px;
  height: 407px;
  padding: 0 13px 0 15px;
  img {
    width: 100%;
    height: 100%;
  }
}
.Navigation {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  box-sizing: border-box;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    span {
      width: 76px;
      height: 76px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-top: 13px;
      font-size: 26px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      // line-height:36px;
    }
  }
}
.l-line {
  margin-top: 51px;
  width: 750px;
  height: 6px;
  background: rgba(244, 244, 244, 1);
}
// 推荐商品
.recommend {
  margin-top: 38px;
  background-color: #fff;
  padding: 0 34px 0 34px;
}
.recommend-top {
  width: 100%;
  height: 83px;
  display: flex;
  flex-direction: column;
  padding-left: 45px;
  box-sizing: border-box;
  p {
    font-size: 36px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 36px;
    margin-bottom: 12px;
  }
  .line {
    width: 42px;
    height: 5px;
    border: 2px solid #1ec3b2;
    border-radius: 5px;
    margin-left: 50px;
    background: rgba(41, 189, 175, 1);
    border-radius: 3px;
  }
}

.recommend-list {
  width: 680px;
  height: 224px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 0.7);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.21);
  border-radius: 20px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  box-sizing: border-box;

  .list-img {
    height: 205px;
    width: 258px;
    .img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
}

.list-text {
  span {
    display: block;
    width: 347px;
    height: 56px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  p {
    font-size: 18px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: rgba(95, 95, 95, 1);
    margin: 26px 0 34px 0;
  }
}

.list-last {
  font-size: 32px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(245, 0, 0, 1);
}
</style>
