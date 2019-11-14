<template>
  <f7-page :page-content="false" class="main-body">
    <ff-header :openProp="urlProp" titProp="威竟技" leftIconProp="personal" rightIconProp="customer"></ff-header>
    <f7-toolbar tabbar top class="home-menu">
      <f7-link tab-link="#home" tab-link-active @click="toTonewPage('home')">首页</f7-link>
      <f7-link tab-link="#betting" @click="toTonewPage('betting')">投注</f7-link>
      <f7-link tab-link="#perferent" @click="toTonewPage('activiy')">活动</f7-link>
      <f7-link tab-link="#task" @click="toTonewPage('task')">任务</f7-link>
    </f7-toolbar>
    <f7-tabs animated>
      <f7-tab id="home" class="page-content" tab-active>
        <ff-home></ff-home>
      </f7-tab>
      <f7-tab id="betting" class="page-content">
        <ff-betting></ff-betting>
      </f7-tab>
      <f7-tab id="perferent" class="page-content">
        <ff-perferent></ff-perferent>
      </f7-tab>
      <f7-tab id="task" class="page-content">
        <ff-task></ff-task>
      </f7-tab>
    </f7-tabs>
    <ff-panel :urlProp="urlProp"></ff-panel>
  </f7-page>
</template>
<script>
import Header from "@p/comm/Header.view"; // 头部logo
import Home from "@p/home/Home.view"; // 主页
import Betting from "@p/betting/BettingMain.view"; // 投注
import Perferent from "@p/preferential/PreferentialList.view"; // 活动
import Task from "@p/task/TaskMain.view"; // 任务
import { mapGetters } from 'vuex';
import PanelLeft from "@p/comm/PanelLeft.view"; // 滑出页面
export default {
  name: "Body", // 主框
  components: {
    "ff-panel": PanelLeft,
    "ff-header": Header,
    "ff-home": Home,
    "ff-betting": Betting,
    "ff-perferent": Perferent,
    "ff-task": Task
  },
  props: {},
  computed: {
    ...mapGetters(['token'])
  },
  data() {
    return {
      urlProp: '/member'
    };
  },
  watch: {
    token: {
      handler(newV) {
        if(newV) {
          console.log('a01')
          this.urlProp='/member'
        }else{
          console.log('a02')
          this.urlProp='/login'
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {},
  mounted() {
    this.bindEvent();
  },
  filters: {},
  methods: {
    bindEvent() {
      this.toTonewPage("home");
    },
    toTonewPage(v) {}
  },
  destroyed() {}
};
</script>
<style lang="scss">
@import "@/stylus/base.scss";
.tabbar.home-menu a.tab-link {
  font-size: 0.18rem;
}
:root .home-menu {
  background: $heard-bg;
  height: 0.36rem;
  font-size: 0.18rem;
  a {
    color: rgba($font-color, 0.8);
  }
  .tab-link-active {
    color: $active;
    position: relative;
    font-size: 0.21rem !important;
    transition: all 0.05s;
    &::after {
      content: ".";
      display: block;
      height: 0.04rem;
      width: 0.2rem;
      border-radius: 0.02rem;
      background: $active;
      position: absolute;
      bottom: 0rem;
    }
  }
}
.main-body .page-content {
  padding-top: 0.8rem;
}
</style>

