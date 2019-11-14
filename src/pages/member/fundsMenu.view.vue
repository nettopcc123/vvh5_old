<template>
  <div class="fund-menu">
    <ul class="f-m-list">
      <li v-for="(val,index) in list" :key="index">
        <p><svg-icon :icon-class="val.icon" class="m-i-det"/></p>
        <p class="f-m-name">{{ val.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Utils from '@/module/utils/Utils.module';
export default {
  name: 'FundsMenu', // 资金记录
  components: {
  },
  props: {},
  computed: {
  },
  data() {
    return {
      list: [{
        icon: 'recharge',
        name: '充值'
      },{
        icon: 'withdraw',
        name: '提现'
      },{
        icon: 'funds',
        name: '资金记录'
      },{
        icon: 'bet',
        name: '投注记录'
      }]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    bindEvent() {
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.fund-menu{
  width: 3.1rem;
  margin: 0.22rem auto 0.18rem;
  .f-m-list{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    .f-m-name{
      color: rgba($font-color-fun, 0.8);
      line-height: 0.2rem;
      font-size: 0.14rem;
    }
    .m-i-det{
      width: 0.28rem;
      height: 0.28rem;
      color: $message-icon;
    }
  }
}
</style>