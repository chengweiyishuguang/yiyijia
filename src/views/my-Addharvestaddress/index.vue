<template>
  <!-- 新增地址 -->
  <div class="A-harvestaddress">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">实名认证</p>
    </layoutheader>
    <!-- 主体区域 -->
    <ul class="main-realname">
      <li>
        <p>收件人</p>
        <input type="text" placeholder="请输入姓名" />
      </li>
      <li>
        <p>联系方式</p>

        <input type="text" placeholder="请输入联系方式" />
      </li>
      <li>
        <p>所在地区</p>

        <input type="text" placeholder="请输入所在地区" />
        <i class="iconfont icon-zuojiantou"></i>
      </li>
    </ul>
    <div class="add-last">
         <p>详细地址</p>

    </div>
    <button></button>
  </div>
</template>

<script>
export default {
  name: 'A-harvestaddress-page'
}
</script>

<style lang="less" scoped>
input {
  border: none;
}
.A-harvestaddress {
  margin-top: 88px;
//   background-color: #f7f7f7;
}
ul {
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  padding: 0 34px;
}
li {
  height: 110px;
  line-height: 110px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  p {
    flex: 20%;
    font-size: 26px;

    color: #808080;
    text-align: left;
    span {
      color: red;
    }
  }
  input {
    flex: 60%;

    color: #c3c3c7;
    font-size: 26px;
  }
}
li:nth-child(3) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-last {
background-color: #ffffff;
    width: 750px;
    height: 240px;
    padding: 30px 34px;
    box-sizing: border-box;

    p {
        font-size:26px;
        color:#808080;
    }

}
button {
    border:none;
    width: 680px;
    height: 90px;
    background: url(../../assets/Add-icon.png);
    background-size: 680px 90px;
  position: fixed;
  bottom:52px;
  left:35px;
  z-index: 1;
  }
</style>
