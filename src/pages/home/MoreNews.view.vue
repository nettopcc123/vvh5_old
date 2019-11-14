<template>
  <f7-sheet class="more-news-sheet news-content" push>
    <f7-toolbar>
      <div class="news-tit">V竞技公告<f7-link sheet-close class="i-m-w"><svg-icon icon-class="close"/></f7-link></div>
    </f7-toolbar>
    <f7-page-content>
      <f7-block class="m-n-c">
        <ul class="m-n-c-list">
          <li v-for="(val,index) in list" :key="index">
            <p class="m-n-c-title">{{val.title}}</p>
            <p class="m-n-c-con">{{val.content}}</p>
            <p class="m-n-c-time">{{val.time}}</p>
          </li>
        </ul>
      </f7-block>
    </f7-page-content>
  </f7-sheet>
</template>

<script>
export default {
  name:'MoreNews',
  data() {
    return {
      list: [{
        title: '01我是公告标题',
        content: '01我是内容一句话详情，真的只是一句话详情，不信你点一下试试，并没有更多.....',
        time: '2019-10-24 17:00'
      },{
        title: '02我是公告标题',
        content: '02我是内容一句话详情，真的只是一句话详情，不信你点一下试试，并没有更多.....',
        time: '2019-10-24 17:00'
      },{
        title: '03我是公告标题',
        content: '03我是内容一句话详情，真的只是一句话详情，不信你点一下试试，并没有更多.....',
        time: '2019-10-24 17:00'
      },{
        title: '04我是公告标题',
        content: '04我是内容一句话详情，真的只是一句话详情，不信你点一下试试，并没有更多.....',
        time: '2019-10-24 17:00'
      }]
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/stylus/base.scss";
.news-content{
  background: $heard-bg;
  border-radius: 0.06rem 0.06rem 0 0;
  .news-tit{
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.21rem;
    color: rgba($font-color, 0.6);
    height: 0.44rem;
    line-height: 0.44rem;
    border-bottom: 0.01rem solid rgba($new-more-line, 0.3);
    width: 100%;
    position: relative;
    .i-m-w{
      float: right;
      height: 0.44rem;
      right: 0.1rem;
      position: absolute;
      top: 0;
      svg{
        width: 0.21rem;
        height: 0.21rem;
        color: $font-color-id;
      }
    }
  }
  .m-n-c{
    overflow: auto;
    height: calc(60vh - 0.45rem);
    .m-n-c-list{
      font-size: 0.14rem;
      line-height: 0.21rem;
      color: rgba($font-color, 0.6);
      width: 3.5rem;
      margin: 0px auto;
      
      li{
        border-bottom: 0.01rem solid rgba($new-more-line, 0.3);
        padding: 0.1rem 0;
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
  .m-n-c-title{
    font-size: 0.14rem;
    line-height: 0.21rem;
    color: rgba($font-color, 0.6);
    padding-bottom: 0.05rem;
  }
  .m-n-c-con{
    font-size: 0.15rem;
    line-height: 0.23rem;
    color: rgba($font-color, 0.8);
  }
  .m-n-c-time{
    font-size: 0.12rem;
    line-height: 0.21rem;
    color: rbga($font-color, 0.3);
    text-align:  right;
  }
}
</style>