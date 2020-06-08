<template>
  <div class="d-progress-container">
      <!-- 进度条 -->
        <div class="progress">
            <span class="start">01:05</span>
            <div class="progress-bar">
                <div class="now">
                    <i class="yuan"></i>
                </div>
            </div>
            <span class="end">30:15</span>
            <span><audio id="player" style="display:none" src=""></audio></span>
        </div>
        <div class="icon-ol">
            <i>
                <img src="../../assets/d-list-icon.png" alt="">
            </i>
            <i >
                <img src="../../assets/d-s-icon.png" alt="">
            </i>
            <span class="audio">
               <img src="../../assets/d-zt-icon.png" alt="">
               <img src="../../assets/d-bf-icon.png" alt="">
            </span>
            <i >
                <img src="../../assets/d-x-icon.png" alt="">
            </i>

            <i >
                <img src="../../assets/d-timing-icon.png" alt="">
            </i>

        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.d-progress-container {
    overflow: hidden;
}
.progress {
margin:0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.progress span {
  font-size: 20px;
  color: #EDEDED;
}
.progress-bar {
  position: relative;
  width: 536px;
  height: 4px;
  background-color: #98989c;
  vertical-align: 2px;
  border-radius: 2px;
  cursor: pointer;
  margin:0 23px;
}
.now {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 4px;
  background: #29bdaf;
  border-radius: 2px;
}
.now .yuan {
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #29bdaf;
  border-radius: 50%;
  top: 0;
  left: 30px;
  margin: -2.5px;
}
.icon-ol {
  width: 100%;
  height: 159px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 102px 0 101px;
}
.icon-ol i:nth-child(1) {
  width: 36px;
  height: 33px;
}
.icon-ol i:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.icon-ol i:nth-child(2),
.icon-ol i:nth-child(4) {
  width: 34px;
  height: 34px;
}
.icon-ol i:nth-child(2) img,
.icon-ol i:nth-child(4) img {
  width: 100%;
  height: 100%;
}
.audio {
  width: 159px;
  height: 159px;
  position: relative;
}
.audio img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.audio img:nth-child(2) {
  top: 0;
  left: 0;
}
i:nth-child(5) {
  width: 46px;
  height: 40px;
}
i:nth-child(5) img {
  width: 100%;
  height: 100%;

}
i:nth-child(5) {
 position: relative;
}
.count {
font-size:20px;
font-family:PingFangSC;
font-weight:400;
color:rgba(255,255,255,1);
position: absolute;
top:-10px;
left:35px;

  }

</style>
