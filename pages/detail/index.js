// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: [
      //      {
      //      id: 1,
      //      image: "../../images/select1.jpg",
      //      title: "小米10",
      //      desc: "骁龙865/1亿像素",
      //      price: "3399",
      //      oldPrice: "￥3999",
      //      num: 0
      //  }
    ],
    totalNum:0,

  },
  //跳转到首页
  toIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //跳转到购物车
  toCart: function () {
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },
  // 收藏或取消收藏
  collect: function () {
    wx.switchTab({
      url: '/pages/collect/index',
    })
  },
  // 加入购物车
  addCart: function () {
    var cartList = wx.getStorageSync('cartList')
     var num = 0
    // console.log(cartList)
    // = 代表赋值 == 代表判断是否相等
    if (cartList.length == 0) {
      // 1 购物车没有商品直接添加
      wx.setStorageSync('cartList', this.data.detailList)
      num ++
    } else {
      // 2 购物车中有商品
      var isTrue = true
      for (var i = 0; i < cartList.length; i++) {
        //  2.1 商品的id 相同 数量加1
        if (cartList[i].id == this.data.detailList[0].id) {
          // console.log('商品id')
          cartList[i].num ++
          //更新缓存数据
          wx.setStorageSync('cartList', cartList)
          isTrue = false
        }
      }
      // 2.2 商品的id不同  添加商品
      if (isTrue) {
        //在购物车数组的头部添加数据
        cartList.unshift(this.data.detailList[0])
        //更新数据缓存
        wx.setStorageSync('cartList', cartList)
      }
      //计算商品总数
     // console.log(cartList)
      for(var j=0;j<cartList.length;j++){
        num+=cartList[j].num
      }
    }
    this.setData({
      totalNum:num
    })
  },
  // 立即购买
  topay: function () {
    wx.switchTab({
      url: '/pages/collect/index',
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
    var cartList = wx.getStorageSync('cartList')
    var num = 0
    if(cartList.length != 0 ){
      for(var i=0;i<cartList.length;i++){
        num +=cartList[i].num
      }
    }
    //获取数据缓存
    this.setData({
      detailList: wx.getStorageSync('detailList'),
      totalNum:num
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