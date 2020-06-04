<template>
  <div class="life-tab-bar">
     <div class="navigation">
         <router-link tag="a" class="navigation-left" to="/miuse">
             <span>音乐</span>
            <i class="line"></i>
         </router-link>
        <router-link tag="a" class="navigation-middle" to="/">
            <span>人生如歌</span>
        <i class="line" style="visibility:hidden;"></i>
        </router-link>
        <router-link tag="a" class="navigation-right" to="/body">
            <span>身心灵</span>
        <i class="line" style="visibility:hidden;"></i>
        </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'life-tab-bar'
}
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  width: 750px;
  height: 93px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 40px 156px 40px 159px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.navigation > a {
  text-align: center;

  span {
    width: 65px;
    height: 30px;
    font-size: 32px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: rgba(85, 85, 85, 1);
    line-height: 30px;
  }
  .line {
    display: block;
    margin: 18px 0 11px 0;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}

</style>
