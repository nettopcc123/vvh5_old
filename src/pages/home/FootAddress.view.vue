<template>
  <div class="foot-address">
      注册办公地址：Hillside(sports)LP(注册编号118)，Unit1.1,First
      Floor,Waterport   Place,2 Evenue,Gibraltar。Hillside(Sports)LP<br>
      是由直布罗陀政府颁发执照并受<br>
      直布罗陀博彩委员会监管（GRL编号095）。<br>
      @2001-2019  V竞技版权所有
  </div>
</template>
<script>
export default {
  name: 'FootAddress', // 底部版权
  }
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.foot-address{
    width: 3.53rem;
    margin: 0.1rem auto 0;
    font-size: 0.11rem;
    line-height: 0.18rem;
    color: rgba($font-new-menu, 0.4);
    border-top: 0.01rem solid rgba($inp-p, 0.4);
    padding: 0.1rem 0 0.3rem;
}
</style>