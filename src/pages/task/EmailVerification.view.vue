<template>
  <f7-sheet class="set-email" swipe-to-close backdrop>
    <f7-link sheet-close class="w-c-title">
       新手任务
      <svg-icon icon-class="close" />
    </f7-link>
    <f7-page-content class="w-c-con">
      <div class="s-w-c-tit">请先绑定邮箱</div>
      <div>
        然后用该邮箱，向地址：v88service001@gmail.com发送一封主题为：“请问V竞技平台最新的网址是会么？”的邮件
        发送完成后，请点击 我已完成 按扭您会收到回复的验证码。
      </div>
      <div><f7-button class="s-e-but">我已完成</f7-button></div>
    </f7-page-content>
  </f7-sheet>
</template>
<script>
import Tabs from "@c/tabs/Tabs.view"; // 新闻列表
export default {
  name: "WechatCustomer", // 微信客服
  components: {
    "ff-tabs": Tabs
  },
  props: {},
  computed: {},
  data() {
    return {
      curTabs: "",
      menulist: [
        {
          code: "avatar1",
          name: "电竟",
          list: [
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title: "头像名",
              img: require("@/assets/images/xban01.jpg")
            }
          ]
        },
        {
          code: "avatar2",
          name: "体育",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        },
        {
          code: "avatar3",
          name: "卡通",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        },
        {
          code: "avatar4",
          name: "动漫",
          list: [
            {
              title: "头像名",
              img: "../img"
            }
          ]
        },
        {
          code: "avatar5",
          name: "战队",
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
      this.curTabs = "curTabs";
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.set-email {
  background: $heard-bg;
  border-radius: 0.06rem 0.06rem 0 0;
  padding-bottom: 0.2rem;
  .w-c-title {
    font-size: 0.18rem;
    color: rgba($font-color, 0.6);
    text-align: center;
    position: relative;
    width: 100%;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid $inp-p;
    svg {
      position: absolute;
      top: 0.12rem;
      right: 0.12rem;
      width: 0.21rem;
      height: 0.21rem;
    }
  }
  .w-c-con{
    min-height: 10vh;
    padding: 0.2rem;
    font-size: 0.15rem;
    color: rgba($font-color, 0.8);
    line-height: 0.24rem;
    .s-w-c-tit{
      height: 0.16rem;
      font-size: 0.16rem;
      line-height: 0.21rem;
      color: rgba($font-color, 0.8);
      padding-bottom: 0.15rem;
    }
  }

  .s-e-but{
    width: 1.6rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: $inp-p;
    border-radius: 0.06rem;
    color: rgba($font-color, 0.6);
    font-size: 0.16rem;
    margin: 0.1rem auto 0;
  }
}
</style>