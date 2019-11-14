<template>
  <div class="w-detail">
    <h2 class="w-d-tit">资产分布</h2>
    <ul class="w-d-list">
      <li v-for="(val, index) in list" :key="index">
        <span><img :src="val.logo" alt=""></span>
        <span>{{val.platform}}</span>
        <span>{{val.balance}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DatilList', // 资产分布列表
  components: {

  },
  props: {},
  computed: {
  },
  data() {
    return {
      list:[{
        logo: require('@/assets/img/member/wallet/plogo1.png'), // 头像
        platform: 'V竞技帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo2.png'), // 头像
        platform: 'PT电子帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo3.png'), // 头像
        platform: '188体育帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo4.png'), // 头像
        platform: '乐游棋牌帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo5.png'), // 头像
        platform: 'AG真人帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo6.png'), // 头像
        platform: 'GG彩票帐户',
        balance: 1000
      },{
        logo: require('@/assets/img/member/wallet/plogo7.png'), // 头像'',
        platform: 'MG电子帐户',
        balance: 1000
      }]
    };
  },
  created() {},
  mounted() {
    this.bindEvent()
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
.w-detail{
  .w-d-tit{
    font-size: 0.16rem;
    line-height: 0.16rem;
    color: $font-color;
    padding: 0.25rem 0.18rem 0.12rem 0.18rem;
    font-weight: normal;
  }
  .w-d-list{
    width: 100%;
    background-color: $heard-bg;
    border-radius: 0.06rem 0.06rem 0rem 0rem;
    li{
      display: flex;
      justify-content: space-between;
      padding: 0 0.24rem;
      height: 0.66rem;
      align-items: center;
      span{
        color: rgba($font-funs, 0.8);
        width: 70%;
        img{
          width: 0.44rem;
          height: 0.44rem;
          border-radius: 50%;
        }
        &:nth-child(2){
          font-size: 0.15rem;
          text-align: left;
          width: 150%;
        }
        &:nth-child(3){
          font-size: 0.18rem;
          font-family: "PingFangSC-Semibold";
          font-weight: bold;
          text-align: right;
          width: 100%;
        }
      }
    }
  }
}
</style>