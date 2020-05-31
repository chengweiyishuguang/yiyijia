<template>
  <div class="detail-container">
    <layoutheader>
      <p slot="names">序：中国养生的现状</p>
    </layoutheader>

    <!-- banner区域 -->
    <div class="banner">
      <img src alt />
    </div>
    <!-- 播放进度条 -->
    <laypotpro>
      <i slot="progress">
        <img src="../../assets/bf-c.png" alt />
      </i>
    </laypotpro>

    <!-- 提示部分 -->
    <div class="detail-text">
      <p class="biaoti">序：中国养生的现状</p>
      <p class="neir">
        <span>在繁忙的都市中，呼吸时汽车尾气，整日</span>
        面对的是电脑辐射就连饮食也很难保证足够健康，甚至有的人，别说健康就
        连基本的吃饱吃好都很难保证。在舆论的倡导下，越来越多
        的人开始关注自身的健康问题，为了健康越来越多的人不惜
        花费重金。以下对中国养生产业发展现状分析。
        说起养生，许多人联想到的就是老年人，与老年人相比，其
        射就连饮食也很难保证足够健康，甚至有的人，别说健康就
        连基本的吃饱吃好都很难保证.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detaile-page'
}
</script>

<style lang="less" scoped>
.detail-container {
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
.detail-text {
  padding: 0 35px;
  background-color: #fff;
  .biaoti {
    padding-top: 40px;
    font-size: 28px;
    font-family: Source Han Sans SC;
    color: #121212;
    font-weight: 700;
  }
  .neir {
    padding-top: 40px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #000000;
    line-height: 42px;
  }
  span {
    color: #29bdaf;
  }
}
</style>
