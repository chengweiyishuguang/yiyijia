<template>
  <div class="number-of-set">
      <ul>
          <li><span>1~20</span></li>
          <li><span>21~40</span></li>
          <li><span>41~60</span></li>
          <li><span>61~80</span></li>
          <li><span>81~100</span></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.number-of-set {
    width: 750px;
    height: 241px;
    background: rgba(255, 255, 255, 1);
    position: fixed;
    top:490px;
    left: 0;
    z-index: 999;
}
ul {
display: flex;
justify-content: space-between;
flex-wrap: wrap;
li {
    width:160px;
height:52px;
background:rgba(247,248,250,1);
border-radius:10px;
margin-bottom:20px;
span {
    font-size:26px;
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(51,51,51,1);
}
}
}

</style>
