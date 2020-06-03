<template>
  <div class="player-page">
<div class="player">
      <div class="player-img">
        <img src alt />
      </div>
      <div class="player-m">
        <p>3无论前面路多苦，都比站在原地更</p>
        <span>16:22</span>
      </div>
      <div class="player-again">
        <progresscircle></progresscircle>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.player {
  position: fixed;
  left:33px;
  bottom:36px;
  width:682px;
height:112px;
// background:rgba(0,0,0,1);
background-color: #7f7f7f;
opacity:0.5;
border-radius:10px;
display: flex;
justify-content: space-between;
padding:7px;
.player-img {
  width:74px;
  height:75px;
  border-radius:6px;
  background-color: #ccc;
img {
  width: 100%;
  height: 100%;
  }
  }
  .player-m {
    p,span {
      font-size:28px;
font-family:Source Han Sans SC;

color:rgba(239,239,239,1);
    }
  }
.player-again {
  width: 77px;
  height: 77px;
  // background-color: #ccc;
  border-radius: 50%;
  position: relative;

}
}
</style>
