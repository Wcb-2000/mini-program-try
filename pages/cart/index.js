// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断购物车中是否有数据
    isData: false,
    cartList: []
  },
  //商品选中点击事件
  change: function (event) {
    //获取点击商品的下标值
    var index = event.target.dataset.index
    console.log(event)
    //获取购物车的缓存数据
    var cartList = wx.getStorageSync('cartList')
    //获取当前点击后的复选框状态 0-取消选中 1-选中
    var state = event.detail.value.length
    if (state == 0) {
      cartList[index].check = false
    } else {
      cartList[index].check = true
    }
    //修改缓存数据
    wx.setStorageSync('cartList', cartList)
  },

  //商品数量减少
  reduceNum: function (event) {
    //获取点击商品的下标值
    var index = event.target.dataset.index
    //获取购物车的缓存数据
    var cartList = wx.getStorageSync('cartList')
    //获取当前点击商品数量
    var num = cartList[index].num
    // console.log(num)
    // 判断最少数量
    if (num > 1) {
      num--
    }
    //修改购物车变量数据
    cartList[index].num = num
    // console.log(cartList)
    //修改缓存数据
    wx.setStorageSync('cartList', cartList)
    //修改data数据，渲染到页面上
    this.setData({
      cartList: cartList
    })
  },

  //商品数量增加
  addNum: function (event) {
    //获取点击商品的下标值
    var index = event.target.dataset.index
    //获取购物车的缓存数据
    var cartList = wx.getStorageSync('cartList')
    //获取当前点击商品数量
    var num = cartList[index].num
    num++
    //修改购物车变量数据
    cartList[index].num = num
    // console.log(cartList)
    //修改缓存数据
    wx.setStorageSync('cartList', cartList)
    //修改data数据，渲染到页面上
    this.setData({
      cartList: cartList
    })
  },

  //删除商品
  del: function (event) {
    // splice(下标值，删除个数)
    // var arr=[1,2,3,4,5,6]
    // var res = arr.splice(3,1)
    // console.log('arr==>',arr)
    // console.log('res==>',res)

    //获取下标值
    var index = event.target.dataset.index
    //获取缓存数据
    var cartList = wx.getStorageSync('cartList')
    var isData = true
    //删除选中的商品下标值
    cartList.splice(index, 1)
    //判断购物车是否有商品,如果没有则隐藏数据页面
    if(cartList.length==0){
      isData=false
    }
    //修改data数据
    //渲染界面
    this.setData({
      cartList,
      isData
    })
    //修改缓存数据
    wx.setStorageSync('cartList',cartList)
  },

  //到小米商城点击事件
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
    if (cartList.length != 0) {
      isData = true
    }
    this.setData({
      isData: isData,
      cartList: cartList
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