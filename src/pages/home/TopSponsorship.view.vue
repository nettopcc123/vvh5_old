<template>
  <div class="top-shopsorship">
    <h2 class="t-s-tit">{{ topProp.title }}</h2>
    <ul class="t-s-list">
      <li v-for="(val,index) in topProp.list" :key="index">
        <p><img :src="val.img" alt=""></p>
        <p class="t-s-name">{{ val.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TopSponsorship', // 顶级赞助
  props: {
    topProp: {
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
.t-s-tit{
	font-size: 0.16rem;
	line-height: 0.4rem;
  color: rgba($font-color, 0.8);
  font-weight: normal;
  padding: 0.08rem 0.12rem 0px 0.12rem;
}
.t-s-list{
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  padding: 0 0.08rem;
  li{
    overflow: hidden;
    padding: 0 0.08rem;
    img{
      max-height: 0.5rem;
      max-width: 100%;
    }
    .t-s-name{
      font-size: 0.1rem;
      line-height: 0.21rem;
      color: rgba($font-new-menu, 0.4);
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>