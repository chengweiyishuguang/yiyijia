<template>
  <div class="punch-user-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">打卡用户</p>
    </layoutheader>
    <!-- 打卡用户列表 -->
    <ul class="punch-list">
      <li>
        <div class="punch-list-left">
          <div class="list-left-img">
            <img src alt />
          </div>
          <div class="list-left-text">
            <p>李依依</p>
            <span>2020-03-06</span>
          </div>
        </div>
        <div class="list-copy">复制微信名</div>
      </li>
       <li>
        <div class="punch-list-left">
          <div class="list-left-img">
            <img src alt />
          </div>
          <div class="list-left-text">
            <p>张三</p>
            <span>2020-03-06</span>
          </div>
        </div>
        <div class="list-copy">复制微信名</div>
      </li>
       <li>
        <div class="punch-list-left">
          <div class="list-left-img">
            <img src alt />
          </div>
          <div class="list-left-text">
            <p>欧阳唯一</p>
            <span>2020-03-06</span>
          </div>
        </div>
        <div class="list-copy">复制微信名</div>
      </li>
    </ul>
    <!-- 用户统计 -->
    <div class="list-count">
        <span>共三位用户</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'punchuser-page'
}
</script>

<style lang="less" scoped>
.punch-user-container {
  margin-top: 88px;
  ul {
    padding: 35px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 160px;
      border-bottom:1px solid #EEEEEE;
      .punch-list-left {
        display: flex;
        justify-content: center;
        align-items: center;
        .list-left-img {
          width: 100px;
          height: 100px;
          background-color: #ccc;
          border-radius: 50%;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .list-left-text {
            margin-left:28px;
            line-height: 40px;
             p {
            font-size:36px;
            color:#121212;
        }
        span {
            color:#999999;
            font-size:24px;
        }
        }

      }
       .list-copy {
            width:114px;
height:37px;
line-height: 37px;
border:1px solid #F77D00;
border-radius:10px;
font-size:20px;
color:#F77D00;
text-align: center;
        }
    }
  }
}
.list-count {
    position: fixed;
    bottom:28px;
   width: 100%;
    text-align: center;
    span {
        text-align: center;
        font-size:26px;
        color:#999;
    }
}
</style>
