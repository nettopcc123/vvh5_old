<template>
  <div class="hot-game">
    <h2 class="h-g-tit">{{ listProp.title }}</h2>
    <ul class="h-g-list">
      <li v-for="(val,index) in listProp.list" :key="index">
        <img :src="val.img" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Tab', // 滑动Tab
  props: {
    listProp: {
      type: Object,
      default: () => {return {}}
    }
  },
  data() {
    return {
    };
  },
  watch: {
  },
  created: function () {
  },
  mounted() {

  },
  methods: {

  }
  }
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.hot-game{
  background: $heard-bg;
  border-radius: 0.06rem;
  padding: 0.1rem;
  margin-bottom: 0.17rem;
  .h-g-tit{
    width: 0.64rem;
    height: 0.16rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
    color: rgba($font-color, 0.8);
    font-weight: normal;
    padding-bottom: 0.12rem;
  }
  .h-g-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    li{
      width: 50%;
      padding-right: 0.08rem;
      &:nth-child(2n){
        padding-right: 0;
      }
      img{
        max-width: 100%;
        border-radius: 0.06rem;
      }
    }
  }
}
</style>