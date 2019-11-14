<template>
  <div class="home-ban">
    <f7-swiper pagination :style="{height: `${heightProp}rem`}">
      <f7-swiper-slide v-for="(val,index) in listProp" :key="index"><img :src="val.img" alt=""></f7-swiper-slide>
    </f7-swiper>
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
    heightProp: {
      type: String
    },
    listProp: {
      type: Array,
      default: () => {return []}
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
.home-ban{
  overflow: hidden;
  img{
    width: 100%;
  }
}
</style>