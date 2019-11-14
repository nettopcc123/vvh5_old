<template>
  <div class="list-warp">
    <ul class="tabs-list" :ref="`comtab${indexProp}`">
      <li v-for="(v,i) in listProp" :key="i">
        <div class="b-l-l">
          <p class="b-l-tit">{{v.title}}</p>
          <p class="b-l-rem" v-if="v.redNum && v.time">
            <span>
              <svg-icon icon-class="read" class="b-i-read" />
              {{v.redNum}}
            </span>
            <span>{{v.time}}</span>
          </p>
        </div>
        <div class="b-l-r">
          <img :src="v.img" alt />
        </div>
      </li>
    </ul>
    <p @click="getMore(indexProp)" class="new-more">加载更多</p>
  </div>
</template>
<script>
import Utils from "@m/utils/Utils.module"; // 工具类
export default {
  name: "HomeNewsList", // 滑动Tab
  props: {
    indexProp: {
      type: Number,
      default: ""
    },
    listProp: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tabsProp: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      newsScroll: 0, // 初始scroll值
      comtab: 0,
      tabsList: this.tabsProp // 数据列表
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getMore(v) {
      this.comtab++;
      let obj = {
        title: `${this.comtab}我是标题我是标题我是标题我是标题我是标题我是标题`,
        readNum: "2000",
        time: "刚刚",
        img: "../img"
      };
      this.tabsList.map((val, index) => {
        if (index == v) {
          val.list.push(obj);
        }
      });
      this.$nextTick(() => {
        console.log("aaa-----", this.$refs[`comtab${v}`]);
      });

      let ns = this.$refs[`comtab${v}`][0].scrollTop, // 滚动条所在位置
        len = this.tabsList[v].list.length, // 选中数据条数
        ref = this.$refs[`comtab${v}`][0], // 选中dom
        newScroll = this.newsScroll; // 最新滚动条位置
      if (len > 4) {
        Utils.of().toScroll(ns, ref, newScroll, 90);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.list-warp {
  background: $heard-bg;
  transition: all 0.2s;
  padding-bottom: 0.02rem;
  margin-bottom: 0.12rem;
  .tabs-list {
    height: 3.6rem;
    overflow: auto;
    transition: all 0.2s;
    li {
      line-height: 0.25rem;
      display: flex;
      justify-content: space-between;
      padding: 0.1rem;
      height: 0.7rem;
      .b-l-l {
        width: 2.25rem;
        .b-l-tit {
          max-height: 0.36rem;
          font-size: 0.15rem;
          line-height: 0.21rem;
          color: $font-color;
          padding-bottom: 0.12rem;
        }
        .b-l-rem {
          display: flex;
          justify-content: space-between;
          span {
            color: $font-new-rem;
            .b-i-read {
              margin-right: 0.05rem;
              width: 0.13rem;
              height: 0.13rem;
            }
          }
        }
      }
      .b-l-r {
        width: 1.14rem;
        img {
          max-width: 100%;
        }
      }
    }
  }
  .new-more {
    width: 1.6rem;
    height: 0.3rem;
    background-color: $inp-p;
    border-radius: 0.15rem;
    text-align: center;
    color: $font-new-more;
    line-height: 0.3rem;
    margin: 0.12rem auto;
  }
}
</style>