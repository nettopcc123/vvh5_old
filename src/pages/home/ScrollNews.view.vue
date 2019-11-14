<template>
<div class="scroll-news-wrap">
  <div class="sn-left">
    <svg-icon icon-class="message" class="i-mesage"/>
  </div>
  <div class="sn-mid">
    <div class="sn-m-top"></div>
    <ff-scroll :srcollObj="scrollShow"></ff-scroll>
    <div class="sn-m-bottom"></div>
  </div>
  <div class="sn-right" sheet-open=".demo-sheet">
    <f7-button fill sheet-open=".more-news-sheet">查看更多</f7-button>
    <svg-icon icon-class="more"/>
  </div>
  <ff-more-news>Swipe To Close</ff-more-news>
</div>
</template>
<script>
import { mapState } from 'vuex';
import Scroll from '@c/scroll/Scroll.view'
import MoreNews from '@p/home/MoreNews.view'
export default {
name: "ScroolNews", // 滚动消息
components: {
  'ff-scroll': Scroll,
  'ff-more-news': MoreNews
},
computed: {
  ...mapState({
    scrollShow: state => state.homeStore.scrollShow // 初始目录
  }),
 classOption: function () {
    return {
      direction: 1,
      step: 0.5,
      limitMoveNum: 2,
      singleHeight: 28,
      sheetOpened: false, // 关闭弹框 \
    }
  } 
},
data() {
  return {
  }
},
mounted() {

},
methods:{
},
updated() {
},
destroyed() {

}
}
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.scroll-news-wrap{
  width: 3.5rem;
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: rgba($message-bg-base, 0.3);
  border-radius: 0.06rem;
  display: flex ;
  flex-direction: row;
  margin: 0px auto;
  .sn-left{
    overflow: hidden;
    width: 0.44rem;
    text-align: center;
    line-height: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .i-mesage{
      color: $message-icon;
    }
  .svg-icon
    {
      width: 0.24rem;
      height: 0.2rem;
    }
  }
  .sn-mid{
    overflow: hidden;
    width: 2.2rem;
    position: relative;
  }
  .sn-right{
    overflow: hidden;
    width: 0.86rem;
    background: rgba($message-bg-base, 0.3);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba($font-color, 0.5);
    .more-but{
      height: 0.35rem;
      line-height: 0.35rem;
      color: rgba($font-color, 0.5);
      width: 0.6rem;
      padding: 0;
    }
  }
}
</style>