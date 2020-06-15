<template>
<!-- 编辑资料 -->
  <div class="Edit-information">
      <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">编辑个人资料</p>
    </layoutheader>
    <!-- 头像区域 -->
    <div class="head-portrait">
        <img src="" alt="">
    </div>
    <!-- 个人信息页面 -->
    <ul>
        <li>
            <p>昵称</p>
            <span>果小冻</span>
        </li>
        <li>
            <p>性别</p>
            <span>
                <input type="radio">女
                <input type="radio" >男
            </span>
        </li>
         <li>
            <p>出生日期</p>
            <span>
              1994-03-02
            </span>
        </li>
        <li>
            <p>会员手机号</p>
            <span>
              13161556090
            </span>
        </li>
        <li>
            <p>上级会员</p>
        </li>
    </ul>
    <div class="bc">
        <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit-information'
}
</script>

<style lang="less" scoped>

.head-portrait {
     margin: 0 auto;
    margin-top:148px;
    height:200px;
    width: 200px;
     border-radius: 50%;
     background-color: #ccc;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
ul {
    padding: 0 35px;
    li {
        height: 107px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #EEEEEE;
        p {
            font-size:30px;
            color:#888888;
        }
        span {
           font-size:30px;
            color:#121212;
        }
    }
}
.bc {

    width: 680px;
        height: 90px;
        margin: 204px auto;

    button {
        border:none;
        color:#fff;
        font-size:34px;
        background: url(../../assets/myspace-bg.png);
        width: 680px;
        height: 90px;
        background-size: 680px 90px;

    }
}
</style>
