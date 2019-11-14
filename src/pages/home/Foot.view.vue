<template>
  <div class="foot">
    <ff-top-sponsorsip :topProp="topProp"></ff-top-sponsorsip>
    <ff-top-sponsorsip :topProp="payProp"></ff-top-sponsorsip>
    <ff-top-sponsorsip :topProp="brandCoop"></ff-top-sponsorsip>
    <ff-foot-address></ff-foot-address>
  </div>
</template>
<script>
import TopSponsorship from '@p/home/TopSponsorship.view'; // 顶级赞助--通用模板(顶级赞助,支付合作,品牌合作)
import Foot from '@p/home/FootAddress.view'; // 顶级赞助
export default {
  name: 'Home', // 主页
  components: {
    'ff-top-sponsorsip': TopSponsorship,
    'ff-foot-address': Foot,
  },
  props: {},
  computed: {
  },
  data() {
    return {
      topProp:{
        title: '顶级赞助',
        list: [{
        img: require('@/assets/images/d01.png'),
        name: 'Team Liquid战队'
        },{
        img: require('@/assets/images/d02.png'),
        name: '水晶宫足球队'
        }]
      },
      payProp: {
        title: '支付合作',
        list: [{
        img: require('@/assets/images/p01.png'),
        },{
        img: require('@/assets/images/p02.png'),
        },{
        img: require('@/assets/images/p03.png'),
        },{
        img: require('@/assets/images/p04.png'),
        },{
        img: require('@/assets/images/p05.png'),
        }]
      },
      brandCoop: {
        title: '品牌合作',
        list: [{
        img: require('@/assets/images/b01.png'),
        name: 'Team Liquid战队'
        },{
        img: require('@/assets/images/b02.png'),
        name: '水晶宫足球队'
        },{
        img: require('@/assets/images/b03.png'),
        name: 'Team Liquid战队'
        },{
        img: require('@/assets/images/b04.png'),
        name: '水晶宫足球队'
        }
        ]
      },
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
<style lang="scss" scoped>
@import "@/stylus/base.scss";
.foot{
  background: $heard-bg;
  border-radius: 0.06rem 0.06rem 0 0;
  margin-top: 0.15rem;
}
</style>