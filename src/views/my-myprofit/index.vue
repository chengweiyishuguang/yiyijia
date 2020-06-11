<template>
  <div class="profit-container">
    <!-- 头部区域 -->
    <layoutheader>
      <p slot="names">我的收益</p>
    </layoutheader>
    <!-- 会员提成 -->
    <ul class="profit-list">
      <li>
        <div class="profit-list-left">
          <p>李依依</p>
          <span>2020-03-06</span>
        </div>
        <div class="profit-list-right">
          <span>￥120.00</span>
        </div>
      </li>
      <li>
        <div class="profit-list-left">
          <p>李依依</p>
          <span>2020-03-06</span>
        </div>
        <div class="profit-list-right">
          <span>￥120.00</span>
        </div>
      </li>
      <li>
        <div class="profit-list-left">
          <p>李依依</p>
          <span>2020-03-06</span>
        </div>
        <div class="profit-list-right">
          <span>￥120.00</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'profit-page'
}
</script>

<style lang="less" scoped>
.profit-container {
  margin-top: 88px;
  .profit-list {
    padding: 0 35px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 139px;
      border-bottom: 1px solid #eeeeee;

      .profit-list-left {
        line-height: 40px;
        p {
          font-size: 32px;
          color: #333333;
        }
        span {
          font-size: 24px;
          color: #888888;
        }
      }
      .profit-list-right {
        font-size: 32px;
        color: #333333;
      }
    }
  }
}
</style>
