// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否有地址
    isAddress:true,
    //商品数据
    settlementList:[],
    //商品总价
    totalNum:1,
    totalPrice:0,
    //判断购买商品状态，1代表详情页，2代表购买页
    id:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    var orderId = wx.getStorageSync('orderId')
    if(orderId.length == 0){
      wx.setStorageSync('orderId', 0)
    }
    this.setData({
      id:options.id,
      orderId
    })
  },

  //去付款的点击事件
  toPay:function(){
    var that =this
    //先判断是否有地址
    if(that.data.isAddress){  
      //有地址
      //删除购物车中当前的商品 id=2
      if(that.data.id == 2){
        // console.log("从购物车中购买商品")
        var cartList = wx.getStorageSync('cartList')
        //判断商品是否选中购买
        for(var i =cartList.length-1;i>=0;i--){
          if(cartList[i].check){
            cartList.splice(i,1)
          }
        }
        console.log(cartList)
        wx.setStorageSync('cartList', cartList)
      }
      // console.log(that.data.id)
      //模态框
      wx.showModal({
        title:'￥'+that.data.totalPrice,
        content:'是否付款？',
        success(res){
          if(res.confirm){
            console.log('用户点击确定')
            //将当前数据添加到待收货，全部订单的缓存数据
            //定义订单号 orderId，每次购买商品都不同
            var settlementList = wx.getStorageSync('settlementList')
            var orderId = wx.getStorageSync('orderId')
            // console.log(orderId)
            for(var m=0;m<settlementList.length;m++){
              console.log(settlementList[m])
              //给每个商品添加订单号和按钮文本[确认收获]
              orderId++
              settlementList[m].orderId = orderId
              settlementList[m].btn='确认收货'
            }
            // console.log(that.data.settlementList)
            // console.log(new Date())
          wx.setStorageSync('orderId', orderId)
        }else if(res.cancel){
          console.log('用户点击取消')
          //删除购物车中当前的商品 id=2
          //将当前数据添加到待付款，全部订单的缓存数据中
        }
      }
      })
    }else{
      //没有地址
     wx.showToast({
       title: '请输入地址',
       icon:'none'
     })
    }
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
    for(var i = 0;i<good.length;i++){
      totalNum += good[i].num
      totalPrice += good[i].num * good[i].price
    }
    this.setData({
      settlementList:good,
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