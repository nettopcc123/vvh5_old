<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>
    <f7-popup id="assetDetail">
      <ff-assetDatil></ff-assetDatil>
    </f7-popup>
    <f7-popup id="verified01">
      <ff-verified></ff-verified>
    </f7-popup>
    <f7-popup id="email">
      <ff-verified></ff-verified>
    </f7-popup>
  </f7-app>
</template>

<script>
import routes from "@/router/Router.config";
import AssetDatil from "@p/member/assetDetail/AssetDatil.view"; //
import Verified from "@p/member/verified/Verified.view"; // 实名认证
import { mapGetters } from 'vuex';
export default {
  name: "App",
  components: {
    "ff-assetDatil": AssetDatil,
    "ff-verified": Verified
  },
  computed: {
    ...mapGetters(['token'])
  },
  data() {
    return {
      urlProp: "/member",
      f7params: {
        id: "f.app.vapp", // App bundle ID
        name: "app", // App name
        theme: "auto", // Automatic theme detection
        routes: routes
      }
    };
  },
  watch: {
    token: {
      handler(newV) {
        if(newV) {
          console.log('ccca01')
          this.urlProp='/member'
        }else{
           console.log('ccca02')
          this.urlProp='/login'
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>