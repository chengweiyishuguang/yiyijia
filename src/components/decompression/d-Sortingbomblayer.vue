<template>
  <div class="d-s-container">
      <ul>
          <li>
          <span>综合排序</span>
          </li>
          <li>
              <span>播放最多</span>
              </li>
          <li>
              <span>
                最新更新
              </span>
        </li>
      </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.d-s-container {
    width: 750px;
   height:255px;
    position: absolute;
    z-index: 999;
    left:-40px;
    bottom:-256px;

}
ul {
padding:0 35px;
width:750px;
height:255px;
box-sizing: border-box;

background:rgba(255,255,255,1);
box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.21);
li {
    height: 81px;
      line-height: 81px;
      border-bottom:1px solid #f0f0f0;
span {

font-size:26px;
color:rgba(115,115,115,1);

}

}
}

</style>
