<template>
  <f7-sheet class="wechat-customer" swipe-to-close backdrop position="top">
    <f7-link sheet-close class="w-c-title">微信客服<svg-icon icon-class="close"/></f7-link>
    <f7-page-content class="w-c-con">
      <p class="w-c-c-tit">专属客服微信号: {{ wechatProps.acount }}</p>
      <p><img :src="require(`@/assets/img/member/${wechatProps.ewm}`)" alt=""></p>
      <p class="w-c-c-bw"><f7-button raised fill class="f-but">保存到相册</f7-button></p>
    </f7-page-content>
  </f7-sheet>
</template>
<script>
export default {
  name: 'WechatCustomer', // 微信客服
  components: {
  },
  props: {
    wechatProps:{ // 客服号
      type: Object,
      default: () => {return {
        acount: 'Vjj002',
        ewm: 'wechatEwm.jpg'
      }
      }
    },
  },
  computed: {
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  filters: {
  },
  methods: {
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.wechat-customer{
  background: $heard-bg;
  border-radius: 0 0 0.06rem 0.06rem;
  .w-c-title{
    font-size: 0.18rem;
    color: rgba($font-color, 0.6);
    text-align: center;
    position: relative;
    width: 100%;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid $inp-p;
    svg{
      position: absolute;
      top: 0.12rem;
      right: 0.12rem;
      width: 0.21rem;
      height: 0.21rem;
    }
  }
  .w-c-con{
    text-align: center;
    .w-c-c-tit{
      font-size: 0.15rem;
      line-height: 0.6rem;
      color: rgba($font-color, 0.6);
    }
    img{
      width: 1rem;
      height: 1rem;
    }
    .w-c-c-bw{
      text-align: center;
      color:#fff;
      margin: 0.2rem 0;
      .f-but{
        width: 0.84rem;
      }
    }
  }
}
</style>