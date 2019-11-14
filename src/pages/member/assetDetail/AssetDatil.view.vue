<template>
  <f7-view>
    <f7-page>
      <ff-header urlProps="/member" :popupclose='true' titProp="资产总览"  leftIconProp="goback" rightIconProp=""></ff-header>
      <div class="member-con">
        <ff-wallet :showButProps="false" class="mt12"></ff-wallet>
        <ff-wallet-datil></ff-wallet-datil>
      </div>
    </f7-page>
  </f7-view>
</template>
<script>
import Header from '@p/comm/Header.view'; // 头部logo
import Wallet from '@p/member/Wallet.view'; // 中心钱包
import DatilList from '@p/member/assetDetail/DatilList.view'; // 钱包列表
export default {
  name: 'AssetDatil', // 资产分布
  components: {
    'ff-header': Header,
    'ff-wallet': Wallet,
    'ff-wallet-datil': DatilList,
  },
  props: {},
  computed: {
  },
  data() {
    return {
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
</style>