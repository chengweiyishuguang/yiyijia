<template>
  <div class="layout-search">

              <div class="search">
         <slot name="n-search">
             <div class="inp">
        <i class="search-icon"></i>
        <input type="text" placeholder="搜索你想听的节目" />
      </div>
      </slot>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.search {
  margin-top: 113px;
  display: flex;
  padding: 0 35px 0 35px;
  justify-content: space-between;
  .inp {
    width: 681px;
    height: 52px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    position: relative;

    display: flex;

    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      color: #a7a7a7;
      font-size: 22px;
      padding-left: 70px;
      box-sizing: border-box;
      border: none;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.21);
      border-radius: 10px;
    }

    .search-icon {
      height: 30px;
      width: 30px;
      background: url(../../assets/search-icon191@2x.png) no-repeat;
      background-size: 20px;
      position: absolute;
      top: 15px;
      left: 22px;
    }
  }
}

</style>
