<template>
  <div class="play-banner">
    <slot name="yuanpan"></slot>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.main {
  margin-top:88px;
}
.main .logo {
  margin-top:68px;
  width: 64px;
  height: 47px;
  position: absolute;
  left: 33px;
}
img {
  width: 100%;
  height: 100%;
}
.main .banner {
  position: relative;

}
.main .banner-img {
  width: 506px;
  height: 507px;
  margin: 25px 40px 0 122px;
  text-align: center;
  position: relative;
  top:32px;

}
.main .banner-img img {
  width: 100%;
  height: 100%;
  text-align: center;
  transform-origin: center;
  animation: 10s rot linear infinite;
}
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.banner .zhizhen {
  position: absolute;
  width: 231px;
  height: 185px;
  right: 45px;
  top: -35px;
}
.banner .zhizhen img {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
