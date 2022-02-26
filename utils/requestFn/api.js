const requestFn = require('./requestFn');
const app = getApp();
const {
    appid
} = app.globalData;
console.log(appid)
const API = {
    login: `/wx/user/${appid}/auth`, //获取openid
};

const HTTP = {

    // 登录口
    loginApi(params) {
        return requestFn.Request({
            url: `/wx/user/${appid}/auth?nickName=${params.nickName}&openid=${params.openid}`,
            data: params
        })
    },
    //获取用户信息口
    getUserInfo(userid) {
        return requestFn.Request({
            url: `/custom/find/${userid}`,
            method: 'GET'
        })
    },
    //修改用户信息口
    changeUserInfo(params) {
        return requestFn.Request({
            url: `/custom/update`,
            method: 'PUT',
            data: params
        })
    },
    //理发师列表口
    getBarberList() {
        return requestFn.Request({
            url: `/hairdresser/page?page=1&size=99`,
            data: {
                page: 1,
                size: 99
            }
        })
    },
    //产品列表口
    getProductList() {
        return requestFn.Request({
            url: `/product/page?page=1&size=99`,
            data: {
                page: 1,
                size: 99
            }
        })
    },
    // 理发师详情口
    getBaeberInfo(id) {
        return requestFn.Request({
            url: `/hairdresser/find/${id}`,
            method: 'GET'
        })
    },

    // 预约口
    appointmentBarber(params) {
        return requestFn.Request({
            url: `/hairdresser/subscribe`,
            data: params
        })
    },

    // 搜索产品口
    seachProduct(params) {
        return requestFn.Request({
            url: `/product/page?page=1&size=99`,
            data: params
        })
    },

    // 产品详情口
    getProductInfo(id) {
        return requestFn.Request({
            url: `/product/find/${id}`,
            method: "GET"
        })
    },
    // 获取预约
    getAppointmentInfo(id) {
        return requestFn.Request({
            url: `/subscribe/find/${id}`,
            method: "GET"
        })
    },
    // 生成订单口
    addProductOrder(params) {
        return requestFn.Request({
            url: `/order/createOrder`,
            data: params
        })
    },
    // 订单列表口
    getOrderList(id) {
        return requestFn.Request({
            url: `/order/find/${id}`,
            method: 'GET'
        })
    },
    // 取消订单口
    cancelOrder(orderId) {
        return requestFn.Request({
            url: `/order/del/${orderId}`,
            method: 'POST'
        })
    },
    // 支付接口
    pay(orderId) {
        return requestFn.Request({
            url: `/order/successpay/${orderId}`,
            method: 'PUT'
        })
    },
    // 设置定时提醒接口
    setRemind(userId, params) {
        return requestFn.Request({
            url: `/remind/setRemind/${userId}`,
            data: params
        })
    },
    // 获取定时任务接口
    getRemind(userId) {
        return requestFn.Request({
            url: `/remind/find/${userId}`,
            method: 'GET'
        })
    },
    // 删除定时任务接口
    delRemind(remindId) {
        return requestFn.Request({
            url: `/remind/del/${remindId}`,
            method: 'POST'
        })
    }
}

module.exports = HTTP;