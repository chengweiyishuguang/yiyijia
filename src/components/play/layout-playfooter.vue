<template>

  <div class="playfooter">
         <footer>
        <div class="footer-top">
            <div class="footer-img">
                <img src="" alt="">
            </div>
            <div class="text">
                <p>打开心中的记事本</p>
                <span>播音：吴小闲</span>&nbsp;&nbsp;
                <span>撰写：曾小乙</span>
            </div>
            <div class="footer-right">
                <slot name="f-follow">

                </slot>

                <div class="icon-o">
                        <!-- <img src="../../assets/bo-clock-icon.png" alt=""> -->
                        <i class="icon-clock"></i>
                        <div class="collent-box">
                          <i class="collent"></i>
                      <i class="n-collent"></i>
                        </div>

                        <!-- <img src="../../assets/collent.png" alt="">
                        <img src="../../assets/n-collent.png" style="display: none;" alt=""> -->

                </div>
            </div>

        </div>

<!-- 进度条 -->
     <laypotpro>
       <template slot="progress">
          <img src="../../assets/audio-icon6.png" alt="">
            <span class="count">999+</span>
       </template>
     </laypotpro>

    </footer>

  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
footer {
  margin-top: 39px;

}
.footer-top {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 36px 0 33px;
}
.footer-top .footer-img {
  width: 92px;
  height: 92px;
  background-color: skyblue;
  border-radius: 50%;
}
.footer-top .footer-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.footer-top .text {
  margin-left: 15px;
}
.footer-top .text p {
 width:320px;
height:38px;
line-height: 38px;
font-size:40px;
font-weight:400;
color:rgba(255,255,255,1);

}
.footer-top .text span {
 font-size:22px;
font-weight:400;
color:rgba(227,229,231,1);
}
.footer-right {
  top:-52px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
   position: relative;

}

.footer-right .follow p {
  width:83px;
  height:41px;
  line-height: 41px;
  font-size:20px;
  font-weight:500;
  color:rgba(172,172,172,1);
  border-radius: 10px;
  text-align: center;
  background:rgba(255,255,255,1);
border:1px solid rgba(229,229,229,1);
border-radius:10px;
}
.footer-right .follow p:nth-child(2) {
  color: #29BDAF;
  margin-top:8px;
}
.icon-o {

  display: flex;
  justify-content:space-between;
  align-items: center;
  box-sizing: border-box;

    .icon-clock {
      width:35px;
      height:35px;
      background: url(../../assets/bo-clock-icon.png);
      background-size: 35px;
      position: absolute;
      bottom:-78px;
      left:0px;
    }

}
.collent-box {
  position: absolute;
  bottom:-78px;
  right: 0;
}

  .collent {
      width:35px;
      height:35px;
      background: url(../../assets/collent.png) no-repeat;
      background-size: 35px;
      position: absolute;
     bottom:0;
      right:0;
  }
  .n-collent {
     width:35px;
      height:35px;
      background: url(../../assets/n-collent.png) no-repeat;
      background-size: 35px;
      position: absolute;
     bottom:0;
     right: 0;
  }

</style>
