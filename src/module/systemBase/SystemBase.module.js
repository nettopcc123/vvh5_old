/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/10/30
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 *
 * Description: 系统基类
 */
import Observer from '@/module/observer/Observer.module';
class SystemBase extends Observer {
  constructor() {
    super();
  }
}

SystemBase.of = function() {
  return new SystemBase();
};

export default SystemBase;