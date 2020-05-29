<template>
  <div class="list-option">

      <div class="container-top">
        <p>列表渲染</p>
        <div class="container-icon">
          <img src="../../assets/fan.png" alt />
          <img src="../../assets/zheng.png" alt />
        </div>
        <div class="text">
          <span>正序</span>
        </div>
      </div>

      <ul>
        <li>
            <img src="../../assets/bofang 1.png" alt="">
          <p>不在一起没有关系了</p>
        </li>
        <li>
            <img src="../../assets/bofang 1.png" alt="" style="display:none">
          <p>不在一起没有关系了</p>
        </li>
        <li>
           <img src="../../assets/bofang 1.png" alt="" style="display:none">
          <p>不在一起没有关系了</p>
        </li>
        <li>
            <img src="../../assets/bofang 1.png" alt="" style="display:none">
          <p>不在一起没有关系了</p>
        </li>
        <li>
            <img src="../../assets/bofang 1.png" alt="" style="display:none">
          <p>不在一起没有关系了</p>
        </li>
      </ul>
    </div>

</template>

<script>
export default {
  name: 'list-option'
}
</script>

<style lang="less" scoped>
.list-option {
  width: 750px;
  height: 790px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  z-index: 999;
}

  .container-top {
      width: 100%;
    height: 105px;
    line-height: 105px;
    display: flex;
    justify-content:space-around;
    border-bottom: 1px solid #ccc;

    p {
      font-size: 32px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(47, 47, 47, 1);
    }
    .container-icon {
      margin-left:430px;
      margin-top:10px;
      display: flex;
      flex-direction: column;

      img {
          margin-top:12px;
        width: 27px;
        height: 18px;
      }
    }
    span {
      font-size: 26px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: rgba(96, 96, 96, 1);
    }
  }
  ul li {
      height: 120px;
      display: flex;
    align-items: center;
    padding-left:35px;
    border-bottom:1px solid #ccc;

     img {
        width: 23px;
        height: 23px;
     }

    p {
        margin-left:18px;
        font-size:28px;
        font-family:Source Han Sans SC;
        font-weight:500;
        color:rgba(85,85,85,1);
    }
  }
  ul li:nth-child(1){
      p {
         color:rgba(41,189,175,1);
      }
  }
</style>
