<template>
  <div class="m-wallet">
    <div class="m-wallet-con">
      <div>
        <p class="w-tit">总资产</p>
        <p class="w-amount">26000</p>
      </div>
      <div>
        <p class="w-tit">中心钱包(元)</p>
        <p class="w-amount">24000</p>
      </div>
    </div>
    <div class="asset-break" v-if="showButProps">
      <svg-icon icon-class="detail" class="m-i-det" />
      <f7-button fill raised popup-open="#assetDetail">资产明细</f7-button>
    </div>
    <svg-icon
      icon-class="refresh"
      class="m-ref"
      :class="isRefresh ? 'rotate-auto-hid' : ''"
      @click="refresh"
    />
  </div>
</template>
<script>
import Utils from "@/module/utils/Utils.module";
export default {
  name: "Name", // 昵称头像
  components: {},
  props: {
    showButProps: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  data() {
    return {
      isRefresh: false
    };
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {
    refresh() {
      this.isRefresh = true;
      setTimeout(() => {
        this.isRefresh = false;
      }, 1000);
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.m-wallet {
  width: 2.9rem;
  // height: 1.3rem;
  background-color: $message-icon;
  border-radius: 0.06rem;
  margin: 0 auto;
  padding: 0.15rem 0.3rem 0rem 0.3rem;
  position: relative;
  .m-wallet-con {
    display: flex;
    text-align: left;
    justify-content: space-between;
    padding-top: 0.1rem;
    height: 0.9rem;
    div {
      text-align: left;
      width: 100%;
    }
    .w-tit {
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: rgba($font-color-w-t, 0.8);
    }
    .w-amount {
      font-size: 0.32rem;
      color: rgba($icon, 0.8);
      font-family: "PingFangSC-Semibold";
    }
  }
  .asset-break {
    border-top: 1px solid $wall-line;
    text-align: center;
    line-height: 0.43rem;
    color: rgba($font-color-del, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .m-i-det {
      margin-right: 0.06rem;
      width: 0.12rem;
    }
  }
  .m-ref {
    position: absolute;
    top: 0.12rem;
    right: 0.12rem;
    width: 0.22rem;
    height: 0.22rem;
    color: rgba($wal-ref, 0.5);
    transform: rotate(270deg);
  }

  .rotate {
    animation: rotate 0.5s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .rotate-auto-hid {
    transform: rotate(-270deg);
    transition: transform 1s ease-in-out;
  }
}
</style>