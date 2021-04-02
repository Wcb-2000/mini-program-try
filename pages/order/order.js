// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 顶部导航当前点击的下标值
     navIndex:0,
     // 顶部导航内容
     topNavList:['全部订单','待付款','待收货'],
     // 屏幕高度
     height:0,
     // 商品数据
     allorderList:[],
     receivedList:[],
     paymentList:[]
  },

  // 顶部导航的点击事件
  getNavIndex:function(event){
     this.setData({
        navIndex:event.target.dataset.index
     })
  },

  // 内容的切换事件
  getcontentIndex:function(event){
     this.setData({
        navIndex:event.detail.current
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
        height:wx.getSystemInfoSync().windowHeight,
        navIndex:options.index
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
     this.setData({
        allorderList:wx.getStorageSync('allOrderList'),
        receivedList:wx.getStorageSync('receivedList'),
        paymentList:wx.getStorageSync('paymentList'),
     })
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
     wx.switchTab({
       url: '../user/index',
     })
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