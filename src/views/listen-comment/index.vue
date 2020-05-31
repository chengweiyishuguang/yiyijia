<template>
  <div class="comment-cotainer">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">失传的营养学</p>
    </layoutheader>

    <layoutpublic>
      <p slot="text1">失传的营养</p>
    </layoutpublic>
    <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>节目列表</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#">
        <span>简介</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#">
        <span>评论学习</span>
        <i class="line" ></i>
      </a>
    </div>
    <!-- 评论列表 -->
    <layoutcomment></layoutcomment>
  </div>
</template>

<script>
export default {
  name: 'comment'
}
</script>

<style lang="less" scoped>
// 导航2
.navigation-bar {
  margin: 15px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.07);
  a:nth-child(2) {
    margin: 0 72px 0 76px;
  }

  span {
    padding-left: 5px;
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
    margin-left:20px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
.introduce-text {
  padding: 0 34px;
  p {
    width: 683px;
    height: 133px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    color: rgba(85, 85, 85, 1);
  }
}

</style>
