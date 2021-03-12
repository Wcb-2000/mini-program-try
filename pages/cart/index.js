// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断购物车中是否有数据
    isData:false,
  },
  toIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
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
    //获取购物车缓存数据
    var cartList = wx.getStorageSync('cartList')
    //定义缓存状态
    var isData = false
    //判断购物车是否有数据
    if(cartList.length!=0){
      isData= true
    }
    this.setData({
      isData:isData
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