//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (e) {
        var a = e.model;
        if (a.indexOf("iPhone") != -1 && a.indexOf("X") != -1) { //是不是包含iphoneX
          that.globalData.isIphoneX = true
        } else {
          that.globalData.isIphoneX = false
        }
      }
    })
  },
  globalData: {
    isIphoneX: false
  }
})