<template>
  <div class="betting">
    <div class="b-big-banner">
      <img :src="bigbanner" alt />
    </div>
    <ul class="b-s-banner">
      <li v-for="(val, index) in bannerList" :key="index">
        <img :src="val.img" alt />
      </li>
    </ul>
    <ff-foot></ff-foot>
  </div>
</template>
<script>
import Foot from "@p/home/Foot.view"; // 底部
export default {
  name: "Betting", // 投注
  components: {
    "ff-foot": Foot
  },
  props: {},
  computed: {},
  data() {
    return {
      bigbanner: require("@/assets/img/betting/ban01.jpg"), // 头像
      bannerList: [
        {
          id: "01",
          img: require("@/assets/img/betting/ban02.jpg")
        },
        {
          id: "02",
          img: require("@/assets/img/betting/ban03.jpg")
        },
        {
          id: "03",
          img: require("@/assets/img/betting/ban04.jpg")
        },
        {
          id: "04",
          img: require("@/assets/img/betting/ban05.jpg")
        },
        {
          id: "05",
          img: require("@/assets/img/betting/ban06.jpg")
        },
        {
          id: "06",
          img: require("@/assets/img/betting/ban07.jpg")
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
.betting {
  padding: 0.12rem;
  .b-big-banner {
    margin: 0px auto;
    img {
      width: 100%;
    }
  }
  .b-s-banner {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
    li {
      width: 50%;
      padding-top: 0.1rem;
      padding-right: 0.05rem;
      box-sizing: border-box;
      &:nth-child(2n) {
        padding-right: 0;
        padding-left: 0.05rem;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>