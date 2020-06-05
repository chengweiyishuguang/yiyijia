<template>
  <div class="timing-page">

    <ul>
      <li>
        <p>定时关闭</p>
      </li>
      <li>
        <p>15分钟</p>
      </li>
      <li>
        <p>30分钟</p>
      </li>
      <li>
        <p>45分钟</p>
      </li>
      <li>
        <p>60分钟</p>
      </li>
       <li>
        <p>循环播放</p>
      </li>
      <li>
        <button>取消</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'timingpage'
}
</script>

<style lang="less" scoped>
.timing-page {
  width: 750px;
  height: 790px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  z-index: 999;
}

ul {
  box-sizing: border-box;
}
ul li {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 35px;
  border-bottom: 1px solid #ccc;
  position: relative;

  p {
    font-size: 30px;
    color:#121212;
  }

  button {
    width: 680px;
    height: 77px;
    background: rgba(227, 227, 227, 1);
    border-radius: 20px;
    text-align: center;
    font-size: 34px;
    border:none;
  }
}
ul li:nth-child(1) {
  p {
    color: #999999;
  }
}
</style>
