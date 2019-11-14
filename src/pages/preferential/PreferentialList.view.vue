<template>
  <div class="perfer">
    <ul class="per-l">
      <li v-for="(val, index) in perList" :key="index">
        <img :src="val.img" alt />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Perferential", // 活动
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      perList: [
        {
          id: "01",
          img: require("@/assets/img/perferent/ban01.jpg")
        },
        {
          id: "02",
          img: require("@/assets/img/perferent/ban01.jpg")
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
.perfer {
  padding: 0.12rem;
  .per-l {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
    li {
      width: 100%;
      padding-bottom: 0.1rem;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>