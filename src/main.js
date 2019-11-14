// Import Vue
import Vue from 'vue';
import App from './App.vue';
import SystemLoader from '@m/systemLoader/SystemLoader.module';

SystemLoader.of()
  .bootstrap()
  .then(({ router, store }) => {
    new Vue({
    el: '#app',
    template: '<app/>',
    components: {
      app: App
    },
    router,
    store,
    render: h => h(App)
  })
});
