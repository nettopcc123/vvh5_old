<template>
  <div class="my-bank">
    <div class="my-bank-tit">
      {{ mybankList.title }}
      <span class="my-bank-change">
        更换
        <svg-icon icon-class="more" class="m-l-more" />
      </span>
    </div>
    <ul class="my-bank-list">
      <li v-for="(val,index) in mybankList.list" :key="index">
        <div>
          <p>
            <span class="my-bank-name">{{ val.bankName }}</span>
            <small>储值卡</small>
          </p>
          <p class="my-bank-number">{{ val.number | hidBankNum }}</p>
        </div>
        <div class="bind-but">
          <f7-button raised fill class="f-but">立即绑定</f7-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Utils from "@/module/utils/Utils.module";
export default {
  name: "MyBank", // 我的银行卡
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      mybankList: {
        title: "我的银行卡(示例)",
        list: [
          {
            bankName: "**银行",
            number: "5123124584562147"
          }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  filters: {
    formatBankNum(val) {
      return Utils.of().spacesForma(val);
    },
    hidBankNum(val) {
      return Utils.of().numHid(val);
    }
  },
  methods: {
    bindEvent() {}
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.my-bank {
  margin-top: 0.12rem;
  background: $heard-bg;
  border-radius: 0.06rem;
  padding: 0.18rem;
  .my-bank-tit {
    height: 0.16rem;
    font-size: 0.16rem;
    line-height: 0.2rem;
    color: $font-color;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.12rem;
    .my-bank-change {
      font-size: 0.12rem;
      color: $font-color-id;
      display: flex;
      align-items: center;
      svg {
        width: 0.12rem;
      }
    }
  }
  .my-bank-list {
    width: 3.06rem;
    padding: 0.12rem;
    height: 0.76rem;
    background: url("../../assets/img/bankBg.png") no-repeat center / cover;
    border-radius: 0.06rem;
    color: $font-color;
    display: flex;
    align-items: center;
    li {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      .bind-but {
        text-align: center;
      }
    }
    .my-bank-name {
      font-size: 0.15rem;
    }
    small {
      font-size: 0.1rem;
      width: 0.5rem;
      height: 0.2rem;
      border-radius: 0.02rem;
      border: solid 0.01rem $font-color;
      text-align: center;
      display: inline-block;
      margin-left: 0.05rem;
      font-size: 0.1rem;
    }
    .my-bank-number {
      font-size: 0.15rem;
      padding-top: 0.18rem;
      font-family: "PingFangSC-Regular";
    }
  }
}
</style>