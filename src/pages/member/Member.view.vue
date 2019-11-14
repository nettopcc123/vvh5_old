<template>
  <f7-page>
    <ff-header openProp="/" titProp="个人中心"  leftIconProp="goback"  rightIconProp="wechat" ></ff-header>
    <div class="member-con">
      <ff-name></ff-name>
      <ff-wallet></ff-wallet>
      <ff-funds></ff-funds>
      <div class="m-m-ban">
        <ff-banner heightProp='0.8' :listProp="minBanner"></ff-banner>
      </div>
      <ff-my-bank></ff-my-bank>
      <ff-menu-list></ff-menu-list>
      <f7-button class="log-out">退出登录</f7-button>
      <ff-wechat-customer></ff-wechat-customer>
      <ff-avatarmanagent></ff-avatarmanagent>
    </div>
  </f7-page>
</template>
<script>
import Header from '@p/comm/Header.view'; // 头部logo
import Name from '@p/member/Name.view'; // 昵称头像
import Wallet from '@p/member/Wallet.view'; // 中心钱包
import Funds from '@p/member/fundsMenu.view';
import Banner from '@p/comm/Banner.view'; // Banner
import Mybank from '@p/member/MyBank.view'; // 我的银行
import MenuList from '@p/member/MenuList.view'; // 快捷认证菜单
import WechatCustomer from '@p/member/WechatCustomer.view'; // 微信客服
import AvatarManagent from '@p/member/AvatarManagent.view'; // 更换头像
export default {
  name: 'Member', // 主页
  components: {
    'ff-header': Header,
    'ff-name': Name,
    'ff-wallet': Wallet,
    'ff-funds': Funds,
    'ff-banner': Banner,
    'ff-my-bank': Mybank,
    'ff-menu-list': MenuList,
    'ff-wechat-customer': WechatCustomer,
    'ff-avatarmanagent': AvatarManagent,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      minBanner: [{
        id: '4',
        img: require('@/assets/images/xban01.jpg')
      },{
        id: '5',
        img: require('@/assets/images/xban02.jpg')
      },{
        id: '6',
        img: require('@/assets/images/xban03.jpg')
      }],
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
.m-m-ban{
  width: 3.5rem;
  margin: 0px auto;
  border-radius: 0.06rem;
  overflow: hidden;
}
.log-out{
  width: 2.97rem;
	height: 0.4rem;
  font-size: 0.15rem;
	border-radius: 0.06rem;
  line-height: 0.4rem;
  color: $font-color-id;
  background-color: rgba($heard-bg, 0.8);
  text-align: center;
  margin: 0.2rem auto 0.3rem;
}
</style>