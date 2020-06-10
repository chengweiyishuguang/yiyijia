<template>
<!-- 推送页面 -->
  <div class="Pushsettings">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">推送设置</p>
    </layoutheader>
    <!-- 提醒有客户预览过 -->
    <ul>
      <li>
        <p>提醒有客户预览过</p>
        <!-- 滑块 -->
        <div class="slider">
            <div class="yuan">

            </div>
        </div>
      </li>
      <li>
        <p>提醒客户浏览频率</p>
        <!-- 滑块 -->
        <span>15分钟一次</span>
      </li>
    </ul>
    <!-- 保存 -->
    <div class="push-btn">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pushsettingspage'
}
</script>

<style lang="less" scoped>
.Pushsettings {
  margin-top:88px;
}
ul {
  padding:0 38px;
  li {
    height: 108px;
    line-height: 108px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #EEEEEE;
    align-items: center;
    p {
      font-size:30px;
      color:#666;
    }
  }
  span {
    font-size:30px;
    color:#333333;
  }
}
.slider {
  width:71px;
  height:45px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #1EB89C;
  position: relative;
  box-sizing: border-box;
  .yuan {
   width:43px;
height:42px;
background:rgba(255,255,255,1);
box-shadow:0px 1px 5px 0px rgba(0, 0, 0, 0.44);
border-radius:50%;
border:1px solid #1EB89C;
position: absolute;
right: 0;
top:0;
 box-sizing: border-box;

  }
}
.push-btn {
  width:680px;
height:90px;
margin: 0 auto;
margin-top:82px;

  button {
    width: 100%;
    height: 100%;
    background:rgba(41,189,175,1);
border-radius:20px;
border:none;
color:#fff;
font-size:34px;
  }
}
</style>
