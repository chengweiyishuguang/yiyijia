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
                    <div class="icon-clock">
                        <img src="../../assets/bo-clock-icon.png" alt="">
                    </div>

                    <div class="footer-collent">

                            <img src="../../assets/collent.png" alt="">
                            <img src="../../assets/n-collent.png" style="display: none;" alt="">
                    </div>

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
  margin-top: 99.9975px;

}
.footer-top {
  width: 100%;
  display: flex;
  align-items: center;
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
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(255,255,255,1);

}
.footer-top .text span {
 font-size:22px;
font-family:Source Han Sans SC;
font-weight:400;
color:rgba(227,229,231,1);
}
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.footer-right .follow {
  margin-left: 170px;
}
.footer-right .follow p {
  width:83px;
height:41px;
line-height: 41px;
  font-size:20px;
  font-family:Source Han Sans SC;
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
  margin-top:20px;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding-left:130px;
  box-sizing: border-box;
}
.icon-o .icon-clock {
  width: 41px;
  height: 34px;
}
.icon-o .icon-clock img {
  width: 100%;
  height: 100%;
}

.icon-o .footer-collent {
  width: 41px;
  height: 34px;
    margin-left:20px;

}
.icon-o .footer-collent img {
 width: 100%;
  height: 100%;

}

</style>
