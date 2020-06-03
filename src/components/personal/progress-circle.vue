
<template>

<div class="centerBox">
<div class="leftBox">
    <div class="roundLeft"></div>
</div>
<div class="rightBox">
    <div class="roundRight"></div>
</div>
<div class="roundMask">
    <div class="Verticalline">
        <i></i>
        <i></i>
    </div>
</div>
</div>

</template>

<script >
export default {

}
</script>

<style scoped lang="less">
.centerBox  {
        width: 77px;
        height: 77px;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 0px;
        background: rgba(255, 255, 255, 0.4);
        box-sizing: content-box;

    }
    .leftBox,.rightBox{
        width: 38.5px;
        height:77px;
        overflow: hidden;
        float: left;
    }
    .roundLeft{
        width: 38.5px;
        height: 77px;
        border-radius: 38.5px 0 0 38.5px;
        overflow: hidden;
        transform: rotateZ(-250deg);
        transform-origin: right center;
        background-color:#D2D2D2;
    }
    .roundRight {
        width: 38.5px;
        height: 77px;
        border-radius: 0 38.5px 38.5px 0;
        overflow: hidden;
        transform: rotateZ(-360deg);
        transform-origin: left center;
        background-color: #D2D2D2;
    }
    .roundMask {
        width: 67px;
        height: 67px;
        background-color: #7F7F7F;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: 5px;
        overflow: hidden;
    }
    .Verticalline {

        display: block;
        position: absolute;
        top: -5px;
        left: 12px;
        z-index: 999;
        // margin:-14px 0 0 -20px;
        /* display: flex; */
    }

    .Verticalline i {
        margin-left:10px;
        display:inline-block;
        height: 28px;
        width: 0;
        border:1px solid #fff;
        background-color: #fff;
        border-radius: 50%;
        text-align: center;

    }
    .Verticalline i:nth-child(2) {
       margin-left:15px;
    }
</style>
