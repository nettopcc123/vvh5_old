<template>
  <div class="home-newslist">
    <div class="toolbar">
      <div class="toolbar-inner news-inner">
        <a v-for="(val,index) in menulist" :key="index" :href="`#${val.code}`" class="tab-link" :class="curMenu == 'val.code' ? 'tab-link-active' :''" >{{val.name}}</a>
      </div>
    </div>
    <div class="tabs-animated-wrap">
      <div class="tabs">
        <div v-for="(val,index) in menulist" :key="index" :id="val.code" class="page-content tab" :class="curMenu == 'val.code' ? 'tab-active' :''" >{{val.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab', // 滑动Tab
  props: {
  },
  data() {
    return {
      curMenu: 'news1',
      menulist: [{
        code: 'news1',
        name: '首页'
      },{
        code: 'news2',
        name: '投注'
      },{
        code: 'news3',
        name: '活动'
      }]
    };
  },
  watch: {
  },
  created: function () {
  },
  mounted() {

  },
  methods: {
    toTonewPage(v) {
      this.curMenu = v
    }
  }
  }
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.home-newslist{
  .anim{
    transition: all 0.5s;
    margin-top: -0.26rem;
  }
  .home-newslist .page-content{
    padding-top: 0rem;
  }
}
</style>