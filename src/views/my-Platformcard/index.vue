<template>
  <!-- 我的平台卡 -->
  <div class="Platform-card">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">我的平台卡</p>
    </layoutheader>

    <!-- 卡片区域 -->
    <!-- 减压助眠平台年卡 -->
    <div class="Decompression-card">

        <p class="expire">您的会员即将到期</p>

      <div class="Decompression-card-bottom">
        <div class="Decompression-card-img">
          <img src alt />
        </div>
        <div class="Annual-card">
          <div class="Annual-card-top">
            <p>平台年卡</p>
            <span>购买时间:1年</span>
            <span>有效期:2020-12-30</span>
          </div>
          <div class="Annual-card-bottom">
            <button>续费</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 健康听书 -->
    <div class="Decompression-card healthy">

        <p class="expire" style="visibility:hidden">您的会员即将到期</p>

      <div class="Decompression-card-bottom">
        <div class="Decompression-card-img">
          <img src alt />
        </div>
        <div class="Annual-card">
          <div class="Annual-card-top">
            <p>平台年卡</p>
            <span>购买时间:1年</span>
            <span>有效期:2020-12-30</span>
          </div>
          <div class="Annual-card-bottom" style="visibility:hidden">
            <button>续费</button>
          </div>
        </div>
      </div>
    </div>
     <div class="Decompression-card experience">

        <p class="expire" style="visibility:hidden">您的会员即将到期</p>

      <div class="Decompression-card-bottom">
        <div class="Decompression-card-img">
          <img src alt />
        </div>
        <div class="Annual-card">
          <div class="Annual-card-top">
            <p>平台年卡</p>
            <span>购买时间:1年</span>
            <span>有效期:2020-12-30</span>
          </div>
          <div class="Annual-card-bottom" style="visibility:hidden">
            <button>续费</button>
          </div>
        </div>
      </div>
    </div>
    <div class="Decompression-card Member-expired">

        <p class="expire">会员已到期</p>

      <div class="Decompression-card-bottom">
        <div class="Decompression-card-img">
          <img src alt />
        </div>
        <div class="Annual-card">
          <div class="Annual-card-top">
            <p>平台年卡</p>
            <span>购买时间:1年</span>
            <span>有效期:2020-12-30</span>
          </div>
          <div class="Annual-card-bottom">
            <button>续费</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Platform-card-page'
}
</script>

<style lang="less" scoped>
.Decompression-card {
    margin:0 auto;
  margin-top: 121px;
  width: 679px;
  height: 268px;
  background: linear-gradient(
    146deg,
    rgba(240, 195, 95, 1),
    rgba(255, 229, 141, 1)
  );
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;

   .expire {
      font-size: 24px;
      color: #ff0000;
      text-align: right;
      padding-right: 59px;
      padding-top:20px;
      box-sizing: border-box;

    }

  .Decompression-card-bottom {
    display: flex;
     padding:0 28px 23px 30px;
    .Decompression-card-img {
      width: 163px;
      height: 148px;
      flex-shrink: 0;
      background-color: #ccc;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .Annual-card {

        margin-left:21px;
      .Annual-card-top {
        p {
          font-size: 32px;
          font-weight: 700;
          color: #412d00;
        }
        span {
          display: block;
          font-size: 24px;
          color: #89784f;
        }
      }
      .Annual-card-bottom {
        width: 437px;
        height: 58px;

        button {
          border: none;
          font-size: 28px;
          color: #fff;
          width: 100%;
          height: 100%;
          background: rgba(255, 112, 16, 1);
          border-radius: 10px;
        }
      }
    }
  }
}
.healthy,
.experience,
.Member-expired {
margin-top: 30px;
}
.experience {

background:linear-gradient(146deg,rgba(254,98,112,1),rgba(253,127,139,1));

}
.Member-expired {
background:linear-gradient(146deg,rgba(177,177,177,1),rgba(215,215,215,1));
}
</style>
