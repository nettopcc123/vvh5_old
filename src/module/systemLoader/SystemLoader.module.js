/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/10/28
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 * Description: 全局对象
 */

import Vue from 'vue';
import router from '@/router/Router';
import store from '@/store/Store';
import Observer from '@m/observer/Observer.module';
import Http from '@m/http/Http.module';
import PageLoading from '@c/pageLoading/PageLoading.view';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import '@/stylus/framework7.bundle.scss';
import '@m/registerServiceWorker/RegisterServiceWorker' // 离线缓存

Framework7.use(Framework7Vue)

import '@/icons'; // svg图标

const ObserverClass = Observer.of();
class SystemLoader {
    mountGlobalVariable() {
        window.fay = {};
        window.fay.vue = Vue;
        window.fay.router = router;
        window.fay.store = store;
        window.fay.systemEvent = ObserverClass;
        window.fay.baseImg = "http://m1.v1.com";
        return this;
    }
    mountGlobalComponents() {
        const componentsMap = {
            PageLoading
        };
        Object.keys(componentsMap).map(item => Vue.component(item, componentsMap[item]));
        return this;
    }
    mountGlobalVueConfig() {
        Vue.config.productionTip = false;
        return this;
    }
    mountGlobalVuePrototype() {
        Vue.prototype.$http = Http.of();
        Vue.prototype.$customEvent = ObserverClass;
        return this;
    }
    bootstrap() {
        return new Promise((resolve, reject) => {
            this.mountGlobalVariable()
                .mountGlobalComponents()
                .mountGlobalVueConfig()
                .mountGlobalVuePrototype()
            resolve({ router, store });
        });
    }
}

SystemLoader.of = function() {
    return new SystemLoader();
};

export default SystemLoader;