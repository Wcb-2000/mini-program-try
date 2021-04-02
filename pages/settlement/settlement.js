// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 是否有地址
     isAddress: true,
     // 商品数据
     settlementList: [],
     // 商品总数和总价
     totalNum: 1,
     totalPrice: 0,
     // 判断购买商品的状态  1代表详情页  2代表购物车
     id: 1,
  },

  // 去付款的点击事件
  toPay: function () {
     var that = this
     // 先判断是否有地址
     if (that.data.isAddress) {
        // 有地址
        //  删除购物车中当前的商品   id=2
        if(that.data.id == 2){
           var cartList = wx.getStorageSync('cartList')
           // 判断商品是否选中购买
           for(var i=cartList.length-1;i>=0;i--){
              if(cartList[i].check){
                 // console.log('当前商品选中购买，商品数据在购物车中删除')
                 cartList.splice(i,1)
              }
           }
           // 修改购物车缓存数据
           wx.setStorageSync('cartList', cartList)
        }
        // 模态框
        wx.showModal({
           title: '￥' + that.data.totalPrice,
           content: '是否付款？',
           success(res) {
              if (res.confirm) {
                 console.log('用户点击确定')
                 // 定义订单号 orderId,每次购买商品的订单号都不同
                 // 将当前数据添加到待收货、全部订单的缓存数据中
                 var orderId = wx.getStorageSync('orderId')
                 var received = wx.getStorageSync('receivedList')
                 var allOrder = wx.getStorageSync('allOrderList')
                 that.order('receivedList',received,orderId,'确认收货')
                 that.order('allOrderList',allOrder,orderId,'确认收货')
                 // 页面跳转
                 wx.navigateTo({
                   url: '/pages/order/order?index=2',
                 })
              } else if (res.cancel) {
                 console.log('用户点击取消')
                 // 将当前数据添加到待付款、全部订单的缓存数据中
                 var orderId = wx.getStorageSync('orderId')
                 var payment = wx.getStorageSync('paymentList')
                 var allOrder = wx.getStorageSync('allOrderList')
                 that.order('paymentList',payment,orderId,'去付款')
                 that.order('allOrderList',allOrder,orderId,'去付款')
                 // 页面跳转
                 wx.navigateTo({
                    url: '/pages/order/order?index=1',
                  })
              }
           }
        })
     } else {
        // 没有地址
        wx.showToast({
           title: '请输入地址',
           icon: 'none'
        })
     }
  },
  // 封装的订单方法
  order: function (str,strdata,orderId,btn) {
     // 获取用户结算的缓存数据
     var settlementList = wx.getStorageSync('settlementList')
     // 循环遍历数据
     for (var m = 0; m < settlementList.length; m++) {
        // 给每个商品添加订单号和按钮文本[确认收货]
        orderId++
        settlementList[m].orderId = orderId
        settlementList[m].btn = btn
        // 判断订单页面是否有数据
        if (strdata.length == 0) {
           // 如果没有则添加数据
           strdata = [settlementList[m]]
        } else {
           // 如果有则在数组头部插入数据
           strdata.unshift(settlementList[m])
        }
        // 修改缓存数据
        wx.setStorageSync(str, strdata)
     }
     // 修改订单号的缓存数据
     wx.setStorageSync('orderId', orderId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 添加订单号缓存数据
     var orderId = wx.getStorageSync('orderId')
     if (orderId.length == 0) {
        wx.setStorageSync('orderId', 0)
     }
     this.setData({
        id: options.id
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
     var good = wx.getStorageSync('settlementList')
     var totalNum = 0
     var totalPrice = 0
     for (var i = 0; i < good.length; i++) {
        totalNum += good[i].num
        totalPrice += good[i].num * good[i].price
     }
     this.setData({
        settlementList: good,
        totalNum,
        totalPrice
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