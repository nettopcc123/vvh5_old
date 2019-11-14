<template>
  <div class="menu-list">
    <ul class="menu-l-list">
      <li v-for="(val,index) in list" :key="index">
        <div class="m-l-l">
          <p><svg-icon :icon-class="val.icon" class="m-i-det"/></p>
          <p class="m-l-name">{{ val.name }}</p>
        </div>
        <div>
          <svg-icon icon-class="more" class="m-l-more"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Utils from '@/module/utils/Utils.module';
export default {
  name: 'MenuList', // 认证列表
  components: {
  },
  props: {},
  computed: {
  },
  data() {
    return {
      list: [{
        icon: 'verified',
        name: '实名认证'
      },{
        icon: 'memberBenfit',
        name: '会员权益'
      },{
        icon: 'address',
        name: '收货地址'
      },{
        icon: 'loginpwd',
        name: '登录密码'
      },{
        icon: 'withdrawalpwd',
        name: '提款密码'
      },{
        icon: 'perinfo',
        name: '个人资料'
      }]
    };
  },
  created() {},
  mounted() {
  },
  filters: {
    
  },
  methods: {
    bindEvent() {
    }
  },
  destroyed() {
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.menu-list{
  margin: 0.12rem auto;
  background: $heard-bg;
  border-radius: 0.06rem;
  .menu-l-list{
    width: 3.5rem;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.56rem;
      border-bottom: 1px solid rgba($inp-p, 0.5);
      &:last-child{
        border-bottom: none;
      }
      .m-l-l{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .m-l-more{
        width: 0.18rem;
        height: 0.18rem;
        color: $member-more;
      }
    }
    .m-l-name{
      color: rgba($font-color-fun, 0.8);
      line-height: 0.2rem;
      font-size: 0.15rem;
      margin-left: 0.12rem;
    }
    .m-i-det{
      width: 0.22rem;
      height: 0.22rem;
    }
  }
}
</style>