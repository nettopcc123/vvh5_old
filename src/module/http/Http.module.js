/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/10/27
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 * Description: 请求工具
 */
import Vue from 'vue';
import axios from 'axios';

class Http {
    constructor() {
        this.$http = axios.create({
            baseURL: process.env.BASE_API, // api 的 base_url
            timeout: 300000 // 请求超时时间
        });
        this.init();
    }
    init() {
        this._createService();
        this._defaultsConfig();
        this._interceptRequest();
        this._interceptResponse();
    }
    _createService() {
        this.$http = axios.create({
            baseURL: process.env.BASE_API, // api 的 base_url
            timeout: 300000 // 请求超时时间
          });
    }
    _defaultsConfig() {
        this.$http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
        this.$http.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
        this.$http.defaults.responseType = 'json';
        this.$http.defaults.validateStatus = function(status) {
            return true;
        };
    }
    _interceptRequest() {
        this.$http.interceptors.request.use(
            request => {
                request.headers.channel = 'H5';
                if(getToken() ||  store.getters.token) {} {
                    request.headers.authtoken = getToken() || store.getters.token;
                }
                return request
            },
            error => {
                Promise.reject(error);
              }
        );
    }
    _interceptResponse() {
        this.$http.interceptors.response.use(
            response => {
                return Promise.reject(response);
            },
            error => {
                Vue.prototype.$Message.error('网络请求错误,请重新尝试');
                return Promise.reject(error);
            }
        );
    }
    get(url, params) {
        return this.$http.get(url, params);
    }
    post(url, params) {
        return this.$http.post(url, params);
    }
}

Http.of = function() {
    return new Http();
};

export default Http;