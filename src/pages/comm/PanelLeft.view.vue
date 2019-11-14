<template>
  <div>
    <f7-panel left reveal theme-dark><f7-view :url="urlProp"></f7-view></f7-panel>
  </div>
</template>
<script>
export default {
  name: 'PanlLeft', // 左滑插件
  components: {
  },
  props: {
    urlProp: {
      type: String,
      default: '/login'
    }
  },
  computed: {
  },
  data() {
    return {
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
</style>