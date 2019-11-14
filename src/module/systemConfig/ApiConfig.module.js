/**
 * Author: Fay(tigertop001@gmail.com)
 * Date: 2019/10/28
 * Last Modified by: Fay
 * Copyright (c) 2019, HuaSheng, Inc.
 * Description: Api接口
 */

import http from '@m/http/Http.module'
export function openingInfo(params) {
    return http({
        baseURL: '/api',
        url: '/cp4/front/pc/openingInfo',
        method: 'post',
        data: qs.stringify(params)
    })
}