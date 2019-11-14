<template>
  <f7-view>
    <f7-page>
      <ff-header :popupclose='true' titProp="实名认证"  leftIconProp="goback" rightIconProp="customer"></ff-header>
      <div class="member-con">
      <div class="verif-con">
        <div class="ver-c-t">
          <div class="v-title">证件信息</div>
          <p class="v-rem">用户实名，保障你的帐户安全</p>
          <ul class="v-t-li">
            <li>
              <span class="v-t-name v-s-title">姓名：</span>
              <span class="v-t-inp">
                <input type="text" class="ff-input" name="" value="" placeholder="请输入真实姓名">
              </span>
            </li>
            <li>
              <span class="v-t-name v-s-title">身份证：</span>
              <span class="v-t-inp">
                <input type="text" class="ff-input" name="" value="" placeholder="请输入真实身份证号码">
              </span>
            </li>
          </ul>
        </div>
        <div class="ver-c-b">
          <div class="v-title">上传身份证</div>
          <ul class="v-b-list">
            <li>
              <div>
                <p class="v-s-title">身份证正面</p>
                <p class="v-rem">上传您的身份证人面像</p>
              </div>
              <div>
                <div class="v-b-pic-warp">
                  <img :src="vbg1" alt />
                </div>
              </div>
            </li>
            <li>
              <div>
                <p class="v-s-title">身份证反面</p>
                <p class="v-rem">上传您的身份证人面像</p>
              </div>
              <div>
                <div class="v-b-pic-warp">
                  <img :src="vbg2" alt />
                </div>
              </div>
            </li>
            <li>
              <div>
                <p class="v-s-title">手持身份证</p>
                <p class="v-rem">上传您的身份证人面像</p>
              </div>
              <div>
                <div class="v-b-pic-warp">
                  <img :src="vbg3" alt />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ver-desc">你好，非常感谢您的信息。为了保证您的资金帐户安全，请认真填写相关信息。【请注意：以上身份信息仅仅用于V竞技的资金安全用途，将会对客户的信息进行严格保密】</div>
      <div class="ver-but">
        <f7-button class="log-out">确定提交</f7-button>
      </div>
      </div>
    </f7-page>
  </f7-view>
</template>
<script>
import Header from '@p/comm/Header.view'; // 头部logo
export default {
  name: 'Verified', // 实名认证
  components: {
    'ff-header': Header,
  },
  props: {

  },
  computed: {
  },
  data() {
    return { 
      vbg1: require('@/assets/img/verified/v1.png'),
      vbg2: require('@/assets/img/verified/v2.png'),
      vbg3: require('@/assets/img/verified/v3.png')
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
<style lang="scss">
@import "@/stylus/base.scss";
.verif-con{
  padding: 0.28rem 0.24rem;
  background: $ver-bg;
  border-radius: 0rem 0rem 0.06rem 0.06rem;
  .v-rem{
    line-height: 0.2rem;
    color: rgba($font-color, 0.3);
    font-size: 0.11rem;
  }
  .v-title{
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.16rem;
    color: $font-color;
  }
  .v-s-title{
    font-size: 0.15rem;
    color: rgba($font-color, 0.7);
  }
  .ver-c-t{
    display: block;
    .v-t-li{
      margin-top: 0.1rem;
      li{
        display: flex;
        justify-content: flex-start;
        line-height: 0.38rem;
        border-bottom: 0.01rem solid rgba($ver-lin, 0.7);
        margin-top: 0.05rem;
        .v-t-name{
          width: 1rem;
        }
        .v-t-inp{
          font-size: 0.15rem;
          color: rgba($font-color, 0.3);
          display: flex;
          align-items: center;
          width: 2.27rem;
        }
      }
    }
  }
  .ver-c-b{
    margin-top: 0.2rem;
    .v-b-list{
      p{
        line-height: 0.22rem;
      }
      li{
        display: flex;
        justify-content: space-between;
        margin-top: 0.15rem;
      }
    }
    .v-b-pic-warp{
      width: 1.32rem;
      height: 0.8rem;
      border: dotted 0.01rem rgba($font-color, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      color: rgba($font-color, 0.3);
      padding: 0.06rem;
      img{
        max-width: 100%;
      }
    }
  }
}
.ver-desc{
  width: 3.31rem;
  margin: 0px auto;
	height: 0.49rem;
	font-size: 0.12rem;
  color: rgba($font-color, 0.6);
  line-height: 0.22rem;
  padding: 0.16rem 0 0.2rem;
}
.ver-but{
  margin: 0.1rem auto;
  text-align: center;
  .log-out{
    width: 2.97rem;
    height: 0.4rem;
    font-size: 0.15rem;
    border-radius: 0.06rem;
    line-height: 0.4rem;
    color: $font-color-id;
    background-color: rgba($heard-bg, 0.8);
    text-align: center;
    margin: 0.2rem auto 0.3rem;
  }
}
</style>