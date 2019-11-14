<template>
  <f7-page class="login">
    <div class="login-w-c">
      <div class="login-t-rem">
        <f7-link href="/" :reload-current="false">
        暂不登录>
        </f7-link>
        </div>
      <div class="login-logo"><svg-icon icon-class="logo" /></div>
      <div class="login-con">
        <div class="login-c-t">
          <h2>欢迎登录威竞技</h2>
          <p>未注册用户可用验证码直接登录注册哟</p>
        </div>
        <ul class="login-list">
          <li><input type="text" class="ff-input" name="" value="" placeholder="手机号"></li>
          <li><input type="text" class="ff-input" name="" value="" placeholder="输入验证码"> <button class="btn send-v-but">发送验证码</button></li>
        </ul>
        <p class="lot-c-b-r">密码登录</p>
        <div class="login-but-wrap">
          <button class="btn login-but" @click="login()">登录</button>
        </div>
        <div class="login-l-b-r"><f7-checkbox name="isRead"></f7-checkbox><p>已阅读并同意<span>《用户服务协议》</span></p></div>
      </div>
    </div>
    <div class="login-bg">
      <div class="login-b-mas"></div>
      <div class="login-b-bg">
        <p class="bgmove_l"></p>
        <p class="bgmove_m"></p>
        <p class="bgmove_r"></p>
      </div>
    </div>
  </f7-page>
</template>
<script>

export default {
  name: 'Login', // 登入
  components: {
  },
  props: {},
  computed: {
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    login() {
      this.$store.commit('SET_TOKEN', 'token');
      const router = this.$f7router;
      router.navigate({
        name: 'main',
        path: '/'
      });
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.login{
  position: relative;
  .login-w-c{
    position: absolute;
    padding: 0.18rem 0.2rem 0.2rem 0.2rem;
    width: calc(100vw - 0.4rem);
  }
  .login-t-rem{
    line-height: 0.24rem;
    color: rgba($font-color, 0.6);
    text-align: right;
    height: 0.24rem;
  }
  .login-logo{
    height: calc(100vh - 3.92rem);
    display: flex;
    justify-content: center;
    align-items: center;
    filter: invert(1);
    svg{
      width: 30vh;
      height: 0.35rem;
      filter: brightness(0);
    }
  }
  .login-con{
    height: 3.3rem;
    overflow: auto;
    position: relative;
  }
  .login-c-t{
    margin-bottom: 0.3rem;
    h2{
      font-size: 0.23rem;
      line-height: 0.4rem;
      color: rgba($font-color, 0.7);
    }
    p{
      color: rgba($font-color, 0.6);
    }
  }
  .login-list{
    li{
      border-bottom: 0.01rem solid rgba($font-color, 0.7);
      height: 0.4rem;
      font-size: 0.15rem;
      line-height: 0.4rem;
      color:rgba($font-color, 0.7);
      padding-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      .send-v-but{
        width: 0.8rem;
        height: 0.3rem;
        border-radius: 0.06rem;
        background-color: rgba($font-color, 0.7);
        border:none;
        font-size: 0.12rem;
        color: $font-but-login;
      }
    }
  }
  .login-but-wrap{
    text-align: center;
    .login-but{
      width: 1.6rem;
      height: 0.45rem;
      background-color: rgba($font-color, 0.7);
      border-radius: 0.06rem;
      margin: 0 auto;
      border: none;
      color: $font-but-login;
      font-size: 0.18rem;
    }
  }
  .lot-c-b-r{
    line-height: 0.4rem;
    color: rgba($font-color, 0.7);
    text-align: right;
  }
  .login-l-b-r{
    text-align: center;
    padding-top: 0.15rem;
    color: $font-color-id;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      margin-left: 0.08rem;
    }
    span{
      color: $font-login-s;
    }
  }
  .login-bg{
    position: absolute;
    width: 100%;
    z-index: -1;
    .login-b-mas{
      background: rgba($login-mas-f, 0.6);
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 1;
    }
    .login-b-bg{
      position: absolute;
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
      p{
        width: 1.2rem;
        height: 100vh;
        margin-left: 0.07rem;
        &:nth-child(1){
          margin-left: 0rem;
          background-image: url('../../assets/img/login/bg04.png');
          background-size: 100% auto;
          background-position-y: 0%;
        }
        &:nth-child(2){
          background-image: url('../../assets/img/login/bg04.png');
          background-size: 100% auto;
          background-position-y: 33%;
        }
        &:nth-child(3){
          background-image: url('../../assets/img/login/bg04.png');
          background-size: 100% auto;
          background-position-y: 100%;
          margin-left: 0.08rem;
        }
      }
    }

    .bgmove_l {
      animation: bgmove_1 130s infinite;
    }
    .bgmove_m {
      animation: bgmove_m 130s infinite;
    }
    .bgmove_r {
      animation: bgmove_r 130s infinite;
    }

    @keyframes bgmove_1 {
      0% {
        background-position-y: 0%;
      }
      100% {
        background-position-y: 100%;
      }
    }
    @keyframes bgmove_m {
      0% {
        background-position-y: 33%;
      }
      30% {
        background-position-y: 0%;
      }
      100% {
        background-position-y: 100%;
      }
    }
    @keyframes bgmove_r {
      0% {
        background-position-y: 100%;
      }
      100% {
        background-position-y: 0%;
      }
    }

  }
}
</style>
