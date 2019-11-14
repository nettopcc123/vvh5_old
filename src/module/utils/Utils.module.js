/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/10/30
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 *
 * Description: 工具类
 */
let instance = null;
class Utils{
  constructor() {
    if(instance) {
      return instance;
    }
    instance = this;
  }
  /**
   * 滚动条动缓慢动画效果
   * @param {String} ns // 滚动条所在位置
   * @param {String} ref  // 选中dom
   * @param {Number} newScroll  // 最新滚动条位置
   * @param {Number} step  // 移动位置
   */
  toScroll(ns, ref, newScroll, step) {
    newScroll = ref.scrollTop
    ref.scrollTop = newScroll + 2
    if (newScroll < ns + step) {
     var c = setTimeout(()=>this.toScroll(ns, ref, newScroll, step),16);
    }else {
     clearTimeout(c);
    }
  }
  /**
   * 图片转背景图片格式
   * @param {String} url // 图片路径
   * @param {String} baseUrl // baseUrl地址
   */
  getImgBg(url, baseUrl) {
    if(!baseUrl) {
      baseUrl =  window.fay.baseImg
    }
    if(!url){
      return false
    }
    if(!/^http/.test(url)) {
      url = `${baseUrl}${url}`
    }
    return 'background-image:url('+ url +')'
  }

  /**
   * 银行卡4位个空格
   * @param {String} str 
   */
  spacesForma(str) {
    return (str || 0).toString().replace(/(.)(?=(?:.{4})+$)/g, '$1 ')
  }

  /**
   * 除最后4位其它转 * 不可见
   * @param {String} str 
   */
  numHid(str) {
    let reg = /^(.{4})(.*)(.{4})$/,
        s = ''
    str = str.replace(reg, function(a, b, c, d) {
      let n = b + c + ''
      s = n.replace(/./g, "*") + d;
    });
    return this.spacesForma(s)
  }

}
Utils.of = function() {
  return new Utils();
}
window.utils = Utils;
export default Utils;