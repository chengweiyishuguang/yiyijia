<template>
  <!-- 删除地址提示弹层 -->
  <div class="delete-container">
    <ul class="confirm-deletion">
      <li>
        <span>确定删除该地址吗？</span>
      </li>
      <li>
        <span>取消</span>
        <span>确定</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.delete-container {
  width: 750px;
  height: 1334px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #7b7b7b;
  opacity: 0.5;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  .confirm-deletion {
    width: 460px;
    height: 231px;
    background: #fff;
    border-radius: 20px;
    position: fixed;
    z-index: 999;
    li:nth-child(1) {
      width: 100%;
      height: 141px;
      line-height: 141px;
      border-bottom: 1px solid #e9e9e9;
      text-align: center;
      span {
        font-size: 30px;
        color: #29bdaf;
        font-weight: 700;
      }
    }
    li:nth-child(2) {
      display: flex;

      height: 88px;
      line-height: 88px;
      text-align: center;
      span {
        font-size: 30px;
         display: block;
        height: 100%;
        width: 100%;
      }
      span:nth-child(1) {

        flex: 50%;
        color: #999999;

      }
      span:nth-child(2) {
border-left: 1px solid #e9e9e9;
        flex: 50%;
        color: #333333;
      }
    }
  }
}
</style>
