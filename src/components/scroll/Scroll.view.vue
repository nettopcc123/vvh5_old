<template>
  <div class="scroll">
    <ul class="new-list" :class="{anim:animate}" @mouseenter="Stop()" @mouseleave="Up()">
      <li v-for="(item, index) in noticeList" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Scroll', // 滚动新闻
  props: {
    srcollObj: {
      type: Object,
      default:() => {return null}
    }
  },
  data() {
    return {
      noticeList: [],
      animate:false,
      intNum: this.srcollObj,
    };
  },
  watch: {
    srcollObj: {
      handler: function(newVal) {
        this.intNum = newVal
      },
      immediate:false
    }
  },
  created: function () {
    this.getNoticeData();
  },
  mounted() {

  },
  methods: {
    getNoticeData() {
      this.noticeList = [
        {title: 'b01消防员为啥不用筷子吃饭？原因听了让人心疼'}, 
        {title: 'b02当世界顶尖科学家论坛遇见临港新片区 "直接抱了,伤就伤!'}, 
        {title: 'a03当世界顶尖科学家论坛遇见临港新片区 "直接抱了,伤就伤!'}, 
        {title: 'a04当世界顶尖科学家论坛遇见临港新片区 "直接抱了,伤就伤!'}, 
        {title: 'a05当世界顶尖科学家论坛遇见临港新片区 "直接抱了,伤就伤!'}
      ];
      this.ScrollUp();
    },
    ScrollUp() {
      this.intNum = setInterval(() => {
        this.animate = true;
        setTimeout(() => {
          this.noticeList.push(this.noticeList[0]);
          this.noticeList.shift();
          this.animate=false;
        },500)
      }, 1000);
    },
    Stop() {
      clearInterval(this.intNum);
    },
    Up() {
      this.ScrollUp();
    },
  }
  }
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.anim{
  transition: all 0.5s;
  margin-top: -0.26rem;
}
ul{
  list-style: none;
  li{
    height: 0.34rem;
    line-height: 0.34rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: rgba($font-color, 0.8)
  }
}
</style>
