<template>
  <div class="night-container">
    <!-- 头部区域 -->
 <layoutheader ><p slot="names">夜听</p></layoutheader>

<!-- 搜索区域 -->
    <div class="search">
        <div class="inp">
            <i class="search-icon"></i>
            <input type="text" placeholder="搜索你想听的节目">
        </div>
    </div>
    <!-- banner区域 -->
    <div class="banner">
        <img src="" alt="">
    </div>
    <!-- 导航 -->
    <div class="navigation">
        <a href="#" class="navigation-left">
            <span>听书</span>
             <i class="line" ></i>
        </a>
        <a href="#" class="navigation-right" >
            <span>夜听</span>
             <i class="line" style="display: none;"></i>
        </a>
    </div>

<!--导航2-->
<div class="navigation-bar">
    <a href="#">
        <span>综合排序</span>
        <i class="line" ></i>
    </a>
    <a href="#">
        <span>播放量较多</span>
        <i class="line" style="display: none;" ></i>
    </a>
    <a href="#">
        <span>最近更新</span>
        <i class="line" style="display: none;" ></i>
    </a>
</div>

    <!-- 听书区域 -->
    <div class="listen">
        <div class="listen-list">
            <div class="list-img">
              <img src="" alt="">
              <span><img src="../../assets/night-b.png" alt=""></span>
            </div>
            <div class="list-item">
                <div class="list-text">
                    <span>打开心中的记事本</span>
                <p>人生如歌&nbsp;&nbsp;感悟经典</p>
                </div>
                <div class="list-last">
                    <div class="list-last-item">
                        <img src="../../assets/bofang 1.png" alt="">
                        <span>416万</span>
                    </div>
                    <div class="list-last-item">
                        <img src="../../assets/bo-clock-icon.png" alt="">
                        <span>14:42</span>
                    </div>
                </div>

            </div>
          </div>
          <div class="listen-list">
            <div class="list-img">
              <img src="" alt="">
              <span><img src="../../assets/night-b.png" alt=""></span>
            </div>
            <div class="list-item">
                <div class="list-text">
                    <span>那个远方，叫做流浪</span>
                <p>人生如歌&nbsp;&nbsp;感悟经典</p>
                </div>
                <div class="list-last">
                    <div class="list-last-item">
                        <img src="../../assets/bofang 1.png" alt="">
                        <span>416万</span>
                    </div>
                    <div class="list-last-item">
                        <img src="../../assets/bo-clock-icon.png" alt="">
                        <span>14:42</span>
                    </div>
                </div>

            </div>
          </div>
          <div class="listen-list">
            <div class="list-img">
              <img src="" alt="">
              <span><img src="../../assets/night-b.png" alt=""></span>
            </div>
            <div class="list-item">
                <div class="list-text">
                    <span>多拐几个弯，总能碰见希望</span>
                <p>人生如歌&nbsp;&nbsp;感悟经典</p>
                </div>
                <div class="list-last">
                    <div class="list-last-item">
                        <img src="../../assets/bofang 1.png" alt="">
                        <span>416万</span>
                    </div>
                    <div class="list-last-item">
                        <img src="../../assets/bo-clock-icon.png" alt="">
                        <span>14:42</span>
                    </div>
                </div>

            </div>
          </div>
          <!-- 固定条 -->

    </div>
    <a href="#" id="fix">
        <span>上传自己的节目</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'nightpage'
}
</script>

<style lang="less" scoped>
.search {

     margin-top:113px;
     display: flex;
     padding:0 35px 0 35px;
     justify-content: space-between;
    .inp {
        width:681px;
    height:52px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 13px 0px rgba(0, 0, 0, 0.21);
    border-radius:10px;
        position: relative;

        .search-icon {
            background: url(../../assets/search-icon.png) no-repeat ;
            position: absolute;
            width: 29px;
            height: 30px;
            top:12px;
            left:23px;
        }

        input {
            width: 100%;
            height: 100%;
            color:#A7A7A7;
            line-height: 36px;
            font-size:22px;
            padding-left:70px;
            box-sizing: border-box;
            border: none;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 13px 0px rgba(0, 0, 0, 0.21);
            border-radius:10px;
        }
    }

}
// banner区
.banner {
  margin:25px 35px 9px 35px;
  width:680px;
  height:298px;
  border-radius:20px;
  background-color: #ccc;
img {
  width: 100%;
  height: 100%;

}
}
//导航区域
.navigation {
  display: flex;
  width:750px;
  height: 93px;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 8px 0px rgba(0, 0, 0, 0.07);
  padding:40px 156px 40px 159px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.navigation>a{
  margin-top: 32px;

  span {
    width:65px;
    height:30px;
    font-size:32px;
    font-family:Source Han Sans SC;
    font-weight:500;
    color:rgba(85,85,85,1);
    line-height:30px;

  }
  .line {
    display: block;
    margin:18px 0 11px 0;
    width:66px;
    height:2px;
    background:rgba(41,189,175,1);
    border-radius:1px;

  }

}

// 导航2
.navigation-bar {
  margin-top:40px;
  display: flex;
  padding-left: 45px;
  box-sizing: border-box;
  a:nth-child(2) {
    margin:0 72px 0 76px;
  }

  span{
    width:102px;
    height:25px;
    font-size:26px;
    font-family:Source Han Sans SC;
    font-weight:500;
    line-height:36px;
    color:rgba(115,115,115,1);
  }
  a:nth-child(1) span {
    color:#29BDAF;
  }

  .line {
    display: block;
    margin:15px 18px 0 18px;
    width:66px;
    height:2px;
    background:rgba(41,189,175,1);
    border-radius:1px;

  }

}

//听书区域
.listen {
  width: 750px;
  margin:42px 34px 0;

}
.listen-list {
  margin-top:29px;
  width:682px;
  height:224px;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 13px 0px rgba(0, 0, 0, 0.21);
  border-radius:20px;
  display: flex;
  align-items: center;
  padding-left:25px;
  box-sizing: border-box;
  .list-img {
    height: 180px;
    width: 180px;
    background-color: #ccc;
    position: relative;
    .img {
      height: 100%;
      width:100%;
      border-radius: 10px;
    }
    span {
      position: absolute;
      width: 51px;
      height: 51px;
      left: 50%;
      top: 50%;
      margin: -50px 0 0 -50px;

    }

  }
}
.list-item {
  margin-left:29px;

}
.list-text {

 span {
   font-size:32px;
    color:#4c4c4c;
  }
  p {
    color:#717171;
    font-size: 20px;
  }
}
.list-last {
  display: flex;
  .list-last-item  {
    span {
      color:#727272;
      font-size:22px;

    }
    img {
      width: 22px;
      height: 22px;
    }

  }
  .list-last-item:nth-child(2) {
    margin-left:34px;
    img {
      width: 22px;
      height: 22px;
    }

  }
}
body  #fix {
  position: fixed;
  display: block;
  width:268px;
  height:91px;
  line-height: 91px;
  background:rgba(255,68,68,1);
  border-radius:46px  0 0 46px;
  bottom: 26px;
  margin-left:-510px;
  text-align: center;

span {
  width:205px;
  height:29px;
  font-size:30px;
  font-family:Source Han Sans SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:29px;

}
}
</style>
