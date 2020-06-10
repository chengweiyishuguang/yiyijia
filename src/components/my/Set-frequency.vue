<template>
<!-- 推送设置-设置频率-组件 -->
  <div class="Set-frequency-container">
      <div class="set-Bomblayer">
          <div class="set-Bomblayer-top">
              <p>取消</p>
               <p>确定</p>
          </div>
          <ul class="frequency">
              <li><span>15分钟一次</span></li>
              <li><span>30分钟一次</span></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.Set-frequency-container {
   width:750px;
height:1334px;
position: fixed;
top:0;
left:0;
opacity:0.9;
z-index: 998;
.set-Bomblayer {
    background-color: #fff;
    height: 431px;
        width: 100%;
        position: fixed;
        bottom:0;
        z-index: 999;
        .set-Bomblayer-top {
            width:100%;
            height:88px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 37px;
            background-color: #F2F2F2;
            box-sizing: border-box;
            p {
                color:#121212;
                font-size:30px;
            }
        }

}
}
.frequency {
    li {
        text-align: center;
        height: 99px;
        line-height: 99px;
        border-bottom:1px solid #EEEEEE;
        span {
            font-size:26px;
            color:#121212;
        }
    }
    li:nth-child(2) {
        span {
             color:#666666;
         }

    }
}

</style>
