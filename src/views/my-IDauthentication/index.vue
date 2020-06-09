<template>
  <!-- 实名认证详情页 -->
  <div class="ID-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">实名认证</p>
    </layoutheader>
    <!-- banner -->
    <div class="ID-banner">
      <img src="../../assets/ID-banner.png" alt />
    </div>

    <ul class="ID-realname">
      <li>
        <p>姓名</p>
        <span>欧阳唯一</span>
      </li>
      <li>
        <p>性别</p>
        <span>女</span>
      </li>
      <li>
        <p>身份证号</p>
        <span>请输入身份证号</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ID-page'
}
</script>

<style lang="less" scoped>
input {
  border: none;
}
.ID-container {
  margin-top: 88px;
}
.ID-banner {
  width: 429px;
  height: 324px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.ID-realname {
  margin-top: 88px;
  padding: 0 34px;

  li {
    height: 110px;
    line-height: 110px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    p {
      font-size: 28px;
      font-weight: 700;
      color: #333333;

    }
    span {
      padding-left: 144px;
      color: #121212;
      font-size: 28px;
    }
  }

}
</style>
