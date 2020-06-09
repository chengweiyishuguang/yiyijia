<template>
  <!-- 实名认证 -->
  <div class="my-Realname">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">实名认证</p>
    </layoutheader>
    <!-- 主体区域 -->
    <ul class="main-realname">
      <li>
        <p>
          真实姓名
          <span>*</span>
        </p>
        <input type="text" placeholder="欧阳唯一">
      </li>
      <li>
        <p>
          身份证号
          <span>*</span>
        </p>

        <input type="text" placeholder="请输入身份证号">
      </li>
      <li>
        <p>验证码</p>
        <span></span>
        <input type="text" placeholder="请输入身份证号">
        <button>获取验证码</button>
      </li>
    </ul>
    <div class="reminder">
          <p class="reminder-title">温馨提示</p>
        <p class="reminder-text">
          用户注册后在消费及推广的过程中会产生业务提成和分红,按照
          国家税法的规定,需要依法进行纳税。因此，用户在本站进行注册
          时,需要进行实名认证,并保证相关信息的真实性和一致性,以确保
          本站能够准确地为您完税。
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Realname-page'
}
</script>

<style lang="less" scoped>
input {
    border:none;
}
.main-realname {
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
      span {
        color: red;

      }
    }
   input {
        padding-left:43px;
       color:#121212;
       font-size:28px;
   }
  }
  li:nth-child(3) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
          width:169px;
         height:50px;
         background:rgba(41,189,175,1);
         border-radius:10px;
         font-size:28px;
         color:#fff;
         border:none;
      }
  }
}
.reminder {
   padding: 0 34px;
   .reminder-title {
       margin-top:39px;
       font-size:24px;
       color:#FF3B30;
   }
   .reminder-text {
       line-height:48px;
       font-size:24px;
       color:#696969;
   }
}
</style>
