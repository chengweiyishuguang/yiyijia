<template>
  <div class="bread-list">
     <slot name="state"></slot>
      <i class="iconfont icon-zuojiantou"></i>
  </div>
</template>

<script>
export default {
  name: 'bread-page'
}
</script>

<style lang="less" scoped>
.bread-list {
    margin-top:88px;
    display: flex;
    padding-left:37px;
}
p {
  margin-top:40px;
height: 119px;
color:#121212;
font-size:40px;
}
i {
  margin-top:40px;
    margin-left:16px;
   color:#121212;
font-size:40px;
}

</style>
