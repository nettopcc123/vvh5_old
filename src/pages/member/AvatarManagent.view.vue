<template>
  <f7-sheet class="avatar-managent" swipe-to-close backdrop>
    <f7-link sheet-close class="w-c-title">
      <svg-icon icon-class="close" />头像管理
      <f7-button raised fill class="f-but w-c-b">确定</f7-button>
    </f7-link>
    <f7-page-content class="w-c-con">
      <ff-tabs
        :tabsProp="menulist"
        tabsPropClass="avat-tabs"
        curMenuProp="avatar1"
        @getCurTabLis="getCurTabLis"
        :curTabs="curTabs"
        getCurClssProp="0"
      ></ff-tabs>
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
      console.log("-------", v);
      this.curTabs = "curTabs";
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.avatar-managent {
  background: $heard-bg;
  border-radius: 0.06rem 0.06rem 0 0;
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
      left: 0.12rem;
      width: 0.21rem;
      height: 0.21rem;
    }
    .w-c-b {
      position: absolute;
      top: 0.09rem;
      right: 0.12rem;
      width: 0.5rem;
      height: 0.25rem;
      border-radius: 0.12rem;
      color: $font-color;
    }
  }
}
</style>