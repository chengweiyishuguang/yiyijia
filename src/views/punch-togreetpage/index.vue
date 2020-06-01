<template>
  <div class="togreet-container">
    <!-- 背景图片 -->
    <div class="bgc"></div>

    <!-- 头部区域 -->
    <punchheader></punchheader>

 <!-- 列表区域 -->
 <punchlist >
   <img src="../../assets/punch-icon.png" alt="" slot="icon">
<template slot="punch-list">
<div class="list-two">
        <p>成光里是的梦人</p>
        <p>
          奋斗就是每天做好手头上的每件小事,不推
          不抱怨不推卸责任不偷懒。
        </p>
        <p>
          每天一点一滴的努力，才能汇聚起千万勇
          气，带着你的坚持，引领你到你想要到的
          地方去。
        </p>
      </div>
</template>
 </punchlist>

    <!-- 问候语 -->
    <punchfooter>
        <template slot="footer">
            <a href="#">变成我的问候</a>
        </template>
    </punchfooter>
  </div>
</template>

<script>
export default {
  name: 'togreet-page'
}
</script>

<style lang="less" scoped>
.bgc {
  background: url(../../assets/bg-@2x.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.greetings {
    text-align: center;
    position: fixed;
    bottom: 63px;
    left: 35px;

    a {
        display: block;
        width:680px;
height:80px;
line-height: 80px;
background:rgba(41,189,175,1);
border-radius:20px;
font-size:34px;
color:#FFFFFF;
text-align: center;
    }
}
</style>
