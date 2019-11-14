<template>
  <div class="progress-w">
    <span :style="`transform: translate3d(${progress}%, 0px, 0px)`"></span>
  </div>
</template>
<script>
import Header from '@p/comm/Header.view'; // 头部logo
export default {
  name: 'Home', // 主页
  components: {
    'ff-header' : Header
  },
  props: {
    progress: {
      type: Number
    }
  },
  computed: {
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  filters: {
  },
  methods: {
  },
  destroyed() {
  }
};
</script>
<style lang="scss">
@import "@/stylus/base.scss";
.progress-w{
  height: 0.06rem;
  width: 1.4rem;
  border-radius: 0.04rem;
  border: solid 0.01rem $message-icon;
  background: $message-icon;
  position: relative;
  overflow: hidden;
  span{
    background: $heard-bg;
    position: absolute;
    height: 0.06rem;
    display: block;
    width: 100%;
  }
}
</style>