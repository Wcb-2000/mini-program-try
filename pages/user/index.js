// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 判断用户信息和授权按钮的显示隐藏
     canIUse: true,
     // 昵称
     nickName: "",
     // 头像
     userUrl: "",
     // 订单数组
     orderList:[
        {
           img:"../../images/allorder.png",
           text:"全部订单"
        },
        {
           img:"../../images/payment.png",
           text:"待付款"
        },
        {
           img:"../../images/recevied.png",
           text:"待收货"
        }
     ]
  },

  // 授权登录的点击事件
  bindGetUserInfo(e) {
   //   console.log(e)
     var nickName = e.detail.userInfo.nickName
     var userUrl = e.detail.userInfo.avatarUrl
     // 修改data里面的数据
     this.setData({
        canIUse: false,
        userUrl: userUrl,
        nickName: nickName
     })
  },

  // 点击跳转到订单页面
  toOrder:function(event){
   var index = event.target.dataset.index
   wx.navigateTo({
     url: '/pages/order/order?index='+index,
   })
},

  // 点击跳转到我的地址界面
  toMyLocation:function(event){
   wx.navigateTo({
     url: '/pages/location/location',
   })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var _this = this
   //   console.log(this)
     // 查看是否授权
     wx.getSetting({
        success(res) {
           if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                 success: function (res) {
                     // console.log(res.userInfo)
                    var nickName = res.userInfo.nickName
                    var userUrl = res.userInfo.avatarUrl
                    // 修改data里面的数据
                    _this.setData({
                       canIUse: false,
                       userUrl: userUrl,
                       nickName: nickName
                    })
                 }
              })
           }
        }
     })
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

  }
})