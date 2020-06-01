<template>
  <div class="punch-footer">
      <div class="greetings">
        <slot name="footer">

        </slot>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.greetings {

    text-align: center;
    // position: fixed;
    // bottom: 63px;
    // left: 35px;
    display: flex;
    justify-content: center;
    margin-top:30px;

    a {
        display: block;
        width:680px;
height:80px;
line-height: 80px;
background:rgba(41,189,175,1);
border-radius:20px;
font-size:34px;
color:#FFFFFF;
text-align: center;
    }
}
</style>
