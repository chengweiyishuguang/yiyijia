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
    margin-top:128px;
    display: flex;
    padding-left:37px;
}
p {
height: 119px;
color:#121212;
font-size:40px;
}
i {
    margin-left:16px;
   color:#121212;
font-size:40px;
}

</style>
