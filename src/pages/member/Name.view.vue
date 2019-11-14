<template>
  <div class="info-name">
    <div class="avatar">
      <f7-button fill sheet-open=".avatar-managent" backdropEl>
        <img :src="avatar" alt />
      </f7-button>
    </div>
    <div class="info-n-m">
      <p class="i-n-n">
        {{ name }}
        <svg-icon icon-class="verify" />
      </p>
      <p class="i-n-id">ID:{{ id }}</p>
      <p class="i-n-d">{{ directions }}</p>
    </div>
    <div>
      <span class="name-right">
        <svg-icon icon-class="v1" class="i-vip" />普通会员
      </span>
    </div>
  </div>
</template>
<script>
import Utils from "@/module/utils/Utils.module";
export default {
  name: "Name", // 昵称头像
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      avatar: require("@/assets/images/avatar.jpg"), // 头像
      name: "大头娃娃",
      id: "123145",
      directions: "主人，早上好，祝您心情愉祝您心情愉祝您心情愉快！",
      level: "1"
    };
  },
  created() {},
  mounted() {},
  filters: {},
  methods: {
    bindEvent() {}
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/stylus/base.scss";
.avatar {
  padding-left: 0.18rem;
  padding-right: 0.1rem;
  img {
    width: 0.58rem;
    height: 0.58rem;
    border-radius: 50%;
  }
}
.info-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.97rem;
  .name-right {
    line-height: 0.25rem;
    height: 0.25rem;
    background: $message-icon;
    width: 0.97rem;
    display: flex;
    border-radius: 0.12rem 0 0 0.12rem;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0.1rem;
    color: $font-color;
    svg {
      margin-right: 0.05rem;
      width: 0.18rem;
      height: 0.18rem;
    }
  }
  .info-n-m {
    .i-n-n {
      font-size: 0.18rem;
      color: $font-color;
      svg {
        color: $message-icon;
        width: 0.21rem;
        height: 0.16rem;
        margin-left: 0.12rem;
      }
    }
    .i-n-id {
      color: $font-color-id;
    }
    .i-n-d {
      color: $font-color-dir;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 1.9rem;
    }
  }
}
</style>