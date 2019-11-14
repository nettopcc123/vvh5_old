<template>
  <f7-navbar class="header-navbar">
    <f7-nav-left>
      <f7-link :popup-close="popupclose" :href="openProp" :reload-current="false">
        <svg-icon :icon-class="leftIconProp" />
      </f7-link>
    </f7-nav-left>
    <f7-nav-title>
      <svg-icon icon-class="logo" class="title-logo" v-if="titProp == '威竟技'" />
      {{ titProp == '威竟技' ? '' : titProp }}
    </f7-nav-title>
    <f7-nav-right>
      <f7-link>
        <span v-if="rightIconProp=='wechat'" :class="rightIconProp=='wechat' ? 'wechat-bg' : ''">
          <f7-button fill sheet-open=".wechat-customer">
            <svg-icon :icon-class="rightIconProp" />
          </f7-button>
          <!-- <svg-icon :icon-class="rightIconProp"/> -->
        </span>
        <span v-if="rightIconProp!='wechat'" :class="rightIconProp=='wechat' ? 'wechat-bg' : ''">
          <svg-icon :icon-class="rightIconProp" />
        </span>
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>
<script>
export default {
  name: "Header", // 头部组件
  components: {},
  props: {
    popupclose: {
      type: Boolean
    },
    openProp: {
      // 打开方式
      type: String
    },
    closeProp: {
      // 关闭方式
      type: String
    },
    titProp: {
      // 标题
      type: String,
      default: "威竟技"
    },
    leftIconProp: {
      // 左边图标
      type: String,
      default: "personal"
    },
    rightIconProp: {
      // 右边图标
      type: String,
      default: "customer"
    }
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";

.navbar {
  // height: 0.46rem!important;
  background: $heard-bg;
  font-size: 0.18rem;
  svg {
    width: 0.2rem;
    height: 0.2rem;
    color: $icon;
  }
  .title {
    color: rgba($font-color, 0.6);
  }
  .title-logo {
    width: 2.4rem;
    height: 0.24rem;
  }
}
.wechat-bg {
  height: 0.33rem;
  width: 0.33rem;
  border-radius: 50%;
  background: $wechat-bg;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: $wechat;
  }
}

:root .navbar .icon-color {
  color: $icon !important;
}
</style>
