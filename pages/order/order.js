// pages/order/order.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      isData: false,
      isDataa: false,
      isDataaa: false,
      // 顶部导航当前点击的下标值
      navIndex: 0,
      // 顶部导航内容
      topNavList: ['全部订单', '待付款', '待收货'],
      // 屏幕高度
      height: 0,
      // 商品总数和总价
      totalNum: 1,
      totalPrice: 0,
      settlementList: [],
      // 商品数据
      allorderList: [],
      paymentList: [],
      receivedList: []
   },

   // 去付款的点击事件
   payment: function (event) {
      var that = this
      // 模态框
      wx.showModal({
         title: '￥' + that.data.totalPrice,
         content: '是否付款？',
         success(res) {
            if (res.confirm) {
               console.log('用户点击确定')
               // 将当前数据添加到待收货、全部订单的缓存数据中
               var received = wx.getStorageSync
               ('receivedList')
               var allOrder = wx.getStorageSync('allOrderList')
               that.order('receivedList', received, '确认收货')
               that.order('allOrderList',allOrder,'确认收货')
               // 页面跳转
               wx.navigateTo({
                  url: '/pages/order/order?index=2',
               })
               //获取下标值
               var index = event.target.dataset.index
               //获取缓存数据
               //  var allOrderList = wx.getStorageSync('allOrderList')
               var paymentList = wx.getStorageSync('paymentList')
               var isDataa = true
               // var isData = true
               //删除选中的商品下标值
               paymentList.splice(index, 1)
               // allOrderList.splice(index, 1)
               //判断待收货是否有商品,如果没有则隐藏数据页面
               if (paymentList.length == 0) {
                  isDataa = false
               }
               // if (allOrderList.length == 0) {
               //    isData = false
               // }
               //修改data数据
               //渲染界面
               //修改缓存数据
               wx.setStorageSync('paymentList', paymentList)
               // wx.setStorageSync('allOrderList', allOrderList)
               // this.setData({
               //    paymentList,
               //    isDataa,
               // })
               // wx.setStorageSync('paymentList', paymentList)
               // console.log(paymentList);

            } else if (res.cancel) {
               console.log('用户点击取消')
               // 将当前数据添加到待付款、全部订单的缓存数据中
               var payment = wx.getStorageSync('paymentList')
               that.order('paymentList', payment, '去付款')
               // 页面跳转
               // wx.navigateTo({
               //    url: '/pages/order/order?index=1',
               // })
            }
         }
      })
   },
   // 封装的订单方法
   order: function (str, strdata, btn) {
      // 获取用户结算的缓存数据
      var settlementList = wx.getStorageSync('settlementList')
      // 循环遍历数据
      for (var m = 0; m < settlementList.length; m++) {
         // 给每个商品添加订单号和按钮文本[确认收货]
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
   },

   //确认收获点击事件
   received: function (event) {
      // splice(下标值，删除个数)
      //获取下标值
      var index = event.target.dataset.index
      //获取缓存数据
      var receivedList = wx.getStorageSync('receivedList')
      var isDataaa = true
      //删除选中的商品下标值
      receivedList.splice(index, 1)
      //判断待收货是否有商品,如果没有则隐藏数据页面
      if (receivedList.length == 0) {
         isDataaa = false
      }
      //修改data数据
      //渲染界面
      //修改缓存数据
      wx.setStorageSync('receivedList', receivedList)
      this.setData({
         receivedList,
         isDataaa,
      })
      wx.setStorageSync('receivedList', receivedList)
      // console.log(paymentList);
   },

   //到小米商城点击事件
   toIndex: function () {
      wx.switchTab({
         url: '/pages/index/index',
      })
   },
   // 顶部导航的点击事件
   getNavIndex: function (event) {
      this.setData({
         navIndex: event.target.dataset.index
      })
   },

   // 内容的切换事件
   getcontentIndex: function (event) {
      this.setData({
         navIndex: event.detail.current
      })
   },



   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.setData({
         height: wx.getSystemInfoSync().windowHeight,
         navIndex: options.index
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
      //获取购物车缓存数据
      var allOrderList = wx.getStorageSync('allOrderList')
      var paymentList = wx.getStorageSync('paymentList')
      var receivedList = wx.getStorageSync('receivedList')
      //定义缓存状态
      var isData = false
      var isDataa = false
      var isDataaa = false
      //判断购物车是否有数据
      if (allOrderList.length != 0) {
         isData = true
      }
      if (paymentList.length != 0) {
         isDataa = true
      }
      if (receivedList.length != 0) {
         isDataaa = true
      }
      var good = wx.getStorageSync('settlementList')
      var totalNum = 0
      var totalPrice = 0
      for (var i = 0; i < good.length; i++) {
         totalNum += good[i].num
         totalPrice += good[i].num * good[i].price
      }
      this.setData({
         isData: isData,
         isDataa: isDataa,
         isDataaa: isDataaa,
         allorderList: allOrderList,
         paymentList: paymentList,
         receivedList: receivedList,
         totalNum,
         totalPrice,
         settlementList: good
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