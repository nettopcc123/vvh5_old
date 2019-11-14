import Vue from 'vue';
import Vuex from 'vuex';
import homeStore from '@/store/modules/Home.module.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '', /// 权限token
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
    }
  },
  actions: {

  },
  modules: {
    homeStore
  }
});