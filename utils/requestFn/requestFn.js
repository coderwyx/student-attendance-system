const app = getApp();
const baseURL = app.globalData.baseURL;
const Request = function (options) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + options.url || '',
            data: options.data,
            method: options.method || 'POST',
            timeout: options.timeout || 15000,
            success(res) {
                if (res.statusCode === 200) {
                    resolve(res.data);

                }
            },
            fail(err) {
                reject(err);
            }
        })
    })
}

module.exports = {
    Request
};