<template>
  <div class="Program-container">
    <!-- <div class="bgc"></div> -->
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">健康听书</p>
      <!-- banner -->
    </layoutheader>

    <layoutpublic>
       <p slot="text1">失传的营养学失传的营养学失传的营养学失传的营养学失传的营养学失传的营养学</p>
    </layoutpublic>

  <!--导航2-->
    <div class="navigation-bar">
      <a href="#">
        <span>节目列表</span>
        <i class="line"></i>
      </a>
      <a href="#">
        <span>简介</span>
        <i class="line" style="display: none;"></i>
      </a>
      <a href="#">
        <span>评论学习</span>
        <i class="line" style="display: none;"></i>
      </a>
    </div>

    <!-- 节目列表 -->
    <ul>
        <li>
            <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" >
              <i style="display:none">1</i>
            </div>

            <div class="li-img-a">
              <p>序：中国养生现状</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon3">30</span>
              <span class="li-icon2">14:42</span>

            </div>
          </div>
        </li>
        <li>
            <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt=""  style="display:none">
              <i >2</i>
            </div>

            <div class="li-img-a">
              <p>序：中国养生现状</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon3">30</span>
              <span class="li-icon2">14:42</span>

            </div>
          </div>
        </li>
        <li>
            <div class="li-bot">
            <!-- <span class="li-bof"></span> -->
            <div class="li-bot-a">

              <img src="../../assets/li-bof.png" alt="" style="display:none" >
              <i >3</i>
            </div>

            <div class="li-img-a">
              <p>序：中国养生现状</p>
              <span class="li-icon1">616万</span>
              <span class="li-icon3">30</span>
              <span class="li-icon2">14:42</span>

            </div>
          </div>
        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Programlist'
}
</script>

<style lang="less" scoped>
// .bgc {
//   background: url(../../assets/bg-@2x.png);
//   background-size: 100% 100%;
//   height: 100%;
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: -1;
// }
// banner区
.banner {
  margin: 105px 35px 9px 35px;
  width: 680px;
  height: 362px;
  border-radius: 20px;
  background-color: #ccc;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .play {
      display: block;
      width: 60px;
      height: 40px;
      line-height: 40px;
      position: absolute;
       bottom: 23px;
      right: 30px;
      text-align: center;
      span {
           font-size: 26px;
      font-family: Source Han Sans SC;
      color: rgba(18, 18, 18, 1);

      }

    //   line-height:10px;
      .play-icon {
      background: url(../../assets/program-icon.png) no-repeat;
      margin-right: 20px;
      width: 62px;
      height: 62px;
      background-size: 62px;
      position: absolute;
        right: 40px;

    }

  }
}
// 简介收藏
.bref-i {
width: 670px;
height: 178px;
margin: 0 auto;
overflow: hidden;
border-bottom:2px solid rgba(233,233,233,1);
p{
    font-size:32px;
font-family:Source Han Sans SC;
font-weight:500;
color:rgba(51,51,51,1);

}
.p-collent {
     display: flex;
 float: right;
    p {

      width:96px;

height:50px;
line-height: 41px;
  font-size:28px;
  font-family:Source Han Sans SC;

  border-radius: 10px;
  text-align: center;

border:1px solid rgba(229,229,229,1);
border-radius:10px;

font-family:Source Han Sans SC;
font-weight:400;
color:rgba(102,102,102,1);
    }
    p:nth-child(2) {
         margin-left:10px;
         background:rgba(41,189,139,1);
    }
}
}

// 导航2
.navigation-bar {
margin:15px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;

  width:750px;
height:93px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 21px 0px rgba(0, 0, 0, 0.07);
  a:nth-child(2) {
    margin: 0 72px 0 76px;
  }

  span {
    width: 102px;
    height: 25px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    line-height: 36px;
    color: rgba(115, 115, 115, 1);
  }
  a:nth-child(1) span {
    color: #29bdaf;
  }

  .line {
    display: block;
    margin: 15px 18px 0 18px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}

// 导航2
.navigation-bar {
margin:15px 0 40px 0;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;

  width:750px;
height:93px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 21px 0px rgba(0, 0, 0, 0.07);
  a:nth-child(2) {
    margin: 0 72px 0 76px;
  }

  span {
    width: 102px;
    height: 25px;
    font-size: 26px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    line-height: 36px;
    color: rgba(115, 115, 115, 1);
  }
  a:nth-child(1) span {
    color: #29bdaf;
  }

  .line {
    display: block;
    margin: 15px 18px 0 18px;
    width: 66px;
    height: 2px;
    background: rgba(41, 189, 175, 1);
    border-radius: 1px;
  }
}
//
ul {
padding:0 35px;
}
ul li {
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(239,239,239,1);
  padding: 0 34px;

  .li-bot {
    padding-left: 30px;

    .li-bot-a {
      display: block;
      position: relative;
      width: 23px;
      height: 23px;
         img{
        width: 100%;
        height: 100%;
        position: absolute;
        top:52px;
        z-index: 999;
         }
      }

      i {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(85, 85, 85, 1);
        position: absolute;
        top:50px;
        left: 0px;
      }
    }
  }

  .li-img-a {

    line-height: 40px;
    padding-left: 35px;
    p {
      margin-left: 18px;
      font-size: 28px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(85, 85, 85, 1);
    }
    span {
      font-size: 22px;
      font-family: Source Han Sans SC;
      color: rgba(85, 85, 85, 1);
      text-align: center;
      padding-left: 30px;
    }
    .li-icon1,
    .li-icon2,
    .li-icon3 {
      margin-left: 32px;
      position: relative;
    }
    .li-icon1::before {
      content: "";
      display: block;
      background: url(../../assets/bofang1.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 5px;
      left: 0px;
    }

    .li-icon2::before {
      content: "";
      display: block;
      background: url(../../assets/clock--icon.png) no-repeat;
      width: 20px;
      height: 20px;
      background-size: 20px;
      position: absolute;
      top: 5px;
      left: 0px;
    }
    .li-icon3::before {
      content: "";
      display: block;
      background: url(../../assets/liuyan.png) no-repeat;
      width: 23px;
      height: 23px;
      background-size: 23px;
      position: absolute;
      top: 5px;
      left: 0px;
    }
  }

ul li:nth-child(1) {
  p {
    color: rgba(41, 189, 175, 1);
  }
}
</style>
