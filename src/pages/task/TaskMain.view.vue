<template>
  <div class="task-m">
    <ff-tabs :tabsProp="menulist" tabsPropClass="task-tabs" curMenuProp="avatar1" @getCurTabLis="getCurTabLis" :curTabs="curTabs" getCurClssProp="0"></ff-tabs>
    <ff-verified-email></ff-verified-email>
  </div>
</template>
<script>
import VerifiedEmail from '@p/task/EmailVerification.view'; // 邮箱认证
import Tabs from "@c/tabs/Tabs.view"; // 新闻列表
export default {
  name: "WechatCustomer", // 微信客服
  components: {
    "ff-tabs": Tabs,
    "ff-verified-email": VerifiedEmail
  },
  props: {},
  computed: {},
  data() {
    return {
      curTabs: "",
      menulist: [
        {
          code: "avatar1",
          name: "新手",
          list: [
            {
              status: 0,
              name: '进行中任务',
              list:[{
                icon: 'recharge01',
                progress: '0/1',
                name: '首次充值',
                link: 'http://www.baidu.com'
              },{
                icon: 'email',
                progress: '0/1',
                name: '邮箱认证',
                link: 'http://www.baidu.com',
                but: '前往'
              },{
                icon: 'verified01',
                progress: '0/1',
                name: '实名认证',
                link: 'http://www.baidu.com',
                but: '前往'
              },{
                icon: 'exVerified01',
                progress: '1/2',
                name: '验证2要素',
                link: 'http://www.baidu.com'
              },{
                icon: 'exVerified02',
                progress: '1/3',
                name: '验证3要素',
                link: 'http://www.baidu.com'
              },{
                icon: 'exVerified03',
                progress: '1/4',
                name: '验证4要素',
                link: 'http://www.baidu.com'
              },{
                icon: 'wechat',
                progress: '0/1',
                name: '绑定微信客服',
                link: 'http://www.baidu.com'
              }]
            },{
              status: 1,
              name: '未开始任务',
              list:[{
                icon: 'betver',
                progress: '0/1',
                name: '投注棋牌',
                link: 'http://www.baidu.com'
              },{
                icon: 'betver',
                progress: '0/1',
                name: '投注电子',
                link: 'http://www.baidu.com'
              },{
                icon: 'betver',
                progress: '0/1',
                name: '投注体育',
                link: 'http://www.baidu.com'
              },{
                icon: 'betver',
                progress: '1/2',
                name: '投注真人',
                link: 'http://www.baidu.com'
              }]
            },{
              status: 2,
              name: '已完成任务',
              list:[{
                icon: 'wechat',
                progress: '1/1',
                name: '手机认证',
                link: 'http://www.baidu.com'
              },{
                icon: 'withdraw01',
                progress: '1/1',
                name: '首次取款',
                link: 'http://www.baidu.com'
              }]
            },
          ]
        },
        {
          code: "avatar2",
          name: "每日",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        },
        {
          code: "avatar3",
          name: "每周",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        },
        {
          code: "avatar4",
          name: "挑战",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {
    getCurTabLis(v) {
      console.log("-------", v);
      this.curTabs = "curTabs";
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
// .avatar-managent {
//   background: $heard-bg;
//   border-radius: 0.06rem 0.06rem 0 0;
//   .w-c-title {
//     font-size: 0.18rem;
//     color: rgba($font-color, 0.6);
//     text-align: center;
//     position: relative;
//     width: 100%;
//     line-height: 0.44rem;
//     border-bottom: 0.01rem solid $inp-p;
//     svg {
//       position: absolute;
//       top: 0.12rem;
//       left: 0.12rem;
//       width: 0.21rem;
//       height: 0.21rem;
//     }
//     .w-c-b {
//       position: absolute;
//       top: 0.09rem;
//       right: 0.12rem;
//       width: 0.5rem;
//       height: 0.25rem;
//       border-radius: 0.12rem;
//       color: $font-color;
//     }
//   }
// }
</style>