<template>
  <div class="share-container">
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

    <div class="share-btn">
        <a href="#">去听更多健康书籍</a>
        <a href="#">舒缓压力去看看</a>
    </div>
    <!-- 问候语 -->

    <punchfooter>
        <template slot="footer">
            <a href="#">分享我的问候</a>
        </template>
    </punchfooter>
  </div>
</template>

<script>
export default {
  name: 'sharepage'
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
.share-btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    a {
        margin-top:30px;
        display: block;
        width:680px;
height:80px;
line-height: 80px;
background:#068478;
border-radius:20px;
font-size:34px;
color:#FFFFFF;
text-align: center;
    }
}
</style>
