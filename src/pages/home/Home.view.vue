<template>
  <div>
    <ff-banner heightProp="1.8" :listProp="hBannerList"></ff-banner>
    <ff-scrollNews class="sn-mtb"></ff-scrollNews>
    <ff-tabs :tabsProp="menulist" curMenuProp="news1" tabsPropClass="home-new-tabs"></ff-tabs>
    <ff-hot-game :listProp="hotGameList"></ff-hot-game>
    <div class="h-m-ban">
      <ff-banner heightProp="1.1" :listProp="minBanner"></ff-banner>
    </div>
    <ff-foot></ff-foot>
  </div>
</template>
<script>
import Banner from "@p/comm/Banner.view"; // Banner
import ScrollNews from "@p/home/ScrollNews.view"; // 滚动消息
import Tabs from "@c/tabs/Tabs.view"; // 新闻列表
import HotGame from "@p/home/HotGame.view"; // 热门游戏
import Foot from "@p/home/Foot.view"; // 底部
export default {
  name: "Home", // 主页
  components: {
    "ff-banner": Banner,
    "ff-scrollNews": ScrollNews,
    "ff-tabs": Tabs,
    "ff-hot-game": HotGame,
    "ff-foot": Foot
  },
  props: {},
  computed: {},
  data() {
    return {
      hBannerList: [
        {
          id: "1",
          img: require("@/assets/images/ban01.jpg")
        },
        {
          id: "2",
          img: require("@/assets/images/ban02.jpg")
        },
        {
          id: "3",
          img: require("@/assets/images/ban03.jpg")
        }
      ],
      minBanner: [
        {
          id: "4",
          img: require("@/assets/images/xban01.jpg")
        },
        {
          id: "5",
          img: require("@/assets/images/xban02.jpg")
        },
        {
          id: "6",
          img: require("@/assets/images/xban03.jpg")
        }
      ],
      hotGameList: {
        title: "热门游戏",
        list: [
          {
            img: require("@/assets/images/hotban01.jpg")
          },
          {
            img: require("@/assets/images/hotban02.jpg")
          }
        ]
      },
      menulist: [
        {
          code: "news1",
          name: "推荐",
          list: [
            {
              title:
                "我是文字标题我是标题我是文字标题我是标题我是文字标题我是标题",
              redNum: 3000,
              time: "2019-10-21 19:30",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title:
                "我是文字标题我是标题我是文字标题我是标题我是文字标题我是标题",
              redNum: 3000,
              time: "2019-10-21 19:30",
              img: require("@/assets/images/xban01.jpg")
            },
            {
              title:
                "我是文字标题我是标题我是文字标题我是标题我是文字标题我是标题",
              redNum: 3000,
              time: "2019-10-21 19:30",
              img: require("@/assets/images/xban01.jpg")
            }
          ]
        },
        {
          code: "news2",
          name: "资讯",
          list: [
            {
              title: "b我是标题我是标题我是标题我是标题我是标题我是标题",
              readNum: "2000",
              time: "刚刚",
              img: "../img"
            }
          ]
        },
        {
          code: "news3",
          name: "赛程",
          list: [
            {
              title: "c我是标题我是标题我是标题我是标题我是标题我是标题",
              readNum: "2000",
              time: "刚刚",
              img: "../img"
            }
          ]
        },
        {
          code: "news4",
          name: "比分",
          list: [
            {
              title: "d我是标题我是标题我是标题我是标题我是标题我是标题",
              readNum: "2000",
              time: "刚刚",
              img: "../img"
            }
          ]
        }
      ]
    };
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
.sn-mtb {
  margin-top: 0.1rem;
  margin-bottom: 0.17rem;
}
.h-m-ban {
  border-radius: 0.06rem;
  overflow: hidden;
}
</style>