// pages/register/register.js
import HTTP from '../../utils/requestFn/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        studentId: '',
        passWord: '',
        role: 'student'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    login() {
        const loginInfo = {
            identity: this.data.role,
            accountNumber: this.data.studentId,
            password: this.data.passWord
        }
        HTTP.loginApi(loginInfo).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    fakeCallBack(){},
    onChange(event) {
        this.setData({
            role: event.detail,
        });
    },
})