<template>
  <div class="com-tabs" :class="tabsPropClass">
    <div class="toolbar">
      <div class="toolbar-inner">
        <a
          v-for="(val,index) in tabsList"
          :key="index"
          :href="`#${val.code}${index}`"
          class="tab-link"
          :class="curMenu == `${val.code}` ? 'tab-link-active' :''"
          @click="getCur(val.code, index)"
        >{{val.name}}</a>
      </div>
    </div>
    <div class="tabs-animated-wrap">
      <div class="ff-tabs" :style="`transform: translate3d(-${ti}00%, 0px, 0px)`">
        <div
          v-for="(val,index) in tabsList"
          :key="index"
          :id="`${val.code}${index}`"
          class="page-content tab"
          :class="curMenu == `${val.code}` ? 'tab-active' :''"
        >
          <!-- 推荐, 头像  -->
          <div
            class="list-warp"
            v-if="tabsPropClass=='avat-tabs' || tabsPropClass=='home-new-tabs'"
          >
            <ul class="tabs-list" :ref="`comtab${index}`">
              <li
                v-for="(v,i) in val.list"
                :key="i"
                @click="getCurTabLis(i)"
                :class="i==curAvatar ? 'curTabs' : ''"
              >
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
            <p v-if="tabsPropClass == 'home-new-tabs'" @click="getMore(index)" class="new-more">加载更多</p>
          </div>

          <!--  任务   -->
          <div class="task-warp" v-if="tabsPropClass=='task-tabs'">
            <div :ref="`comtab${index}`" class="task-li-warp" >
              <div v-for="(v,i) in val.list" :key="i" class="task-com">
                <p class="task-tit">{{ v.name }}</p>
                <ul v-for="(vi, ii) in v.list" :key="ii" class="task-list">
                  <li>
                    <div class="t-icon"><svg-icon :icon-class="vi.icon" /></div>
                    <div class="t-l-p">
                      <p class="t-l-name">{{vi.name}}</p>
                      <p class="t-l-pr"><ff-progressbar :progress="50"></ff-progressbar><span class="pro-num">{{vi.progress}}</span></p>
                    </div>
                    <div class="t-l-r" v-if="vi.but">
                      <f7-button v-if="vi.icon == 'verified01'" fill raised :popup-open="`#${vi.icon}`">{{vi.but}}</f7-button>
                      <f7-button v-if="vi.icon == 'email'" fill sheet-open=".set-email" backdropEl>{{vi.but}}</f7-button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from "@m/utils/Utils.module"; // 工具类
import Progressbar from "@c/progressbar/Progressbar.view"; // 进度条
export default {
  name: "Tab", // 滑动Tab
  components: {
    "ff-progressbar": Progressbar
  },
  props: {
    getCurClssProp: {
      type: String,
      default: ""
    },
    tabsPropClass: {
      type: String,
      default: ""
    },
    tabsProp: {
      type: Array,
      default: () => {
        return [];
      }
    },
    curMenuProp: {
      type: String,
      default: "news1"
    }
  },
  data() {
    return {
      curMenu: this.curMenuProp, // 默认选中Tab标签
      tabsList: this.tabsProp, // 数据列表
      newsScroll: 0, // 初始scroll值
      comtab: 0,
      ti: 0,
      curAvatar: this.getCurClssProp, // 默认选中头像
      showTemp: "temp1"
    };
  },
  watch: {},
  created() {
    this.judgeBallList();
  },
  mounted() {},
  methods: {
    judgeBallList() {
      let temp1 = ["avat-tabs", "home-new-tabs"],
        temp2 = ["task-tabs"];
      console.log("bbb", this.getCurClssProp.indexOf(temp1) >= 0);
      if (this.getCurClssProp.indexOf(temp1) >= 0) {
        console.log("aaaa", this.getCurClssProp.indexOf(temp1) >= 0);
        this.showTemp = "temp1";
      } else {
        this.showTemp = "temp2";
      }
    }, // 模板判断显示
    getCur(v, i) {
      this.ti = i;
      this.curMenu = v;
    },
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
      let ns = this.$refs[`comtab${v}`][0].scrollTop, // 滚动条所在位置
        len = this.tabsList[v].list.length, // 选中数据条数
        ref = this.$refs[`comtab${v}`][0], // 选中dom
        newScroll = this.newsScroll; // 最新滚动条位置
      if (len > 4) {
        Utils.of().toScroll(ns, ref, newScroll, 90);
      }
    },
    getCurTabLis(v) {
      console.log("AAA", v);
      this.curAvatar = v;
      this.$emit("getCurTabLis", v);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.anim {
  transition: all 0.5s;
  margin-top: -0.26rem;
}
.com-tabs {
  .toolbar {
    width: 90%;
    margin: 0px auto;
    .tab-link {
      line-height: 0.25rem;
      padding: 0px 0.1rem;
      font-size: 0.15rem;
      color: rgba($font-new-menu, 0.8);
    }
    .tab-link-active {
      color: $cur-sub-menu-color;
      background: rgba($cur-sub-menu-color, 0.3);
      border-radius: 0.125rem;
    }
  }
  .page-content {
    padding-top: 0rem;
  }
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

  // 任务
  .task-warp{
    .task-li-warp{
      .task-com{
        background: $heard-bg;
        transition: all 0.2s;
        margin-bottom: 0.12rem;
        border-radius: 0.06rem;
        padding: 0.15rem 0.2rem;;
      }
      .task-tit{
        font-size: 0.16rem;
        line-height: 0.21rem;
        color: rgba($font-color, 0.6);
        margin-bottom: 0.13rem;
      }
      .task-list{
        li{
          height: 0.44rem;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          margin-top: 0.1rem;
          margin-bottom: 0.25rem;
          .t-icon{
            height: 0.44rem;
            width: 0.44rem;
            margin-right: 0.1rem; 
            display: flex;
            align-items: center;
            background: $task-icon-bg;
            border-radius: 50%;
            justify-content: center;
            color: $task-color-icon;
            svg{
              width: 0.27rem;
              height: 0.27rem;
            }
          }
          .t-l-p{
            width: 2.2rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding: 0.03rem 0;
            p{
              width: 100%;
            }
            .t-l-pr{
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .pro-num{
                margin-left: 0.05rem;
                color: rgba($font-color, 0.8);
              }
            }
            .t-l-name{
              font-size: 0.15rem;
              line-height: 0.3rem;
              color: rgba($font-color, 0.8);
            }
          }
          .t-l-r{
            width: 0.7rem;
            text-align: center;
            height: 0.25rem;
            line-height: 0.25rem;
            background-color: $inp-p;
            border-radius: 0.06rem;
            color: rgba($font-color, 0.8)
          }
        }
      }
    }
  }
}

.com-tabs.avat-tabs {
  .tab-link-active {
    color: rgba($font-new-menu, 0.8);
    background: none;
    border-radius: 0;
    &::after {
      content: ".";
      display: block;
      height: 0.04rem;
      width: 0.2rem;
      border-radius: 0.02rem;
      background: $active;
      position: absolute;
      bottom: -0.02rem;
    }
  }
  .tabs-list {
    width: 3.5rem;
    margin: 0.08rem auto 0;
    height: 3.6rem;
    overflow: auto;
    transition: all 0.2s;
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    li {
      line-height: 0.18rem;
      display: flex;
      flex-wrap: wrap-reverse;
      padding: 0.03rem;
      width: 0.81rem;
      text-align: center;
      height: auto;
      .b-l-l {
        width: 100%;
        .b-l-tit {
          padding-bottom: 0.05rem;
        }
      }
      .b-l-r {
        width: 100%;
        img {
          width: 0.81rem;
          height: 0.81rem;
          border: 1px solid $heard-bg;
          box-sizing: border-box;
          opacity: 0.6;
        }
      }
    }
    .curTabs {
      img {
        border: 1px solid $message-icon !important;
        opacity: 1 !important;
        transition: all 0.5s;
      }
    }
  }
}

.ff-tabs {
  display: flex;
  height: 100%;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  .tab {
    width: 100%;
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
}
</style>