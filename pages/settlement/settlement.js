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
    console.log(options)
    this.setData({
      id:options.id
    })
  },

  //去付款的点击事件
  toPay:function(){
    var that =this//先判断是否有地址
    if(that.data.isAddress){  
      //有地址
      wx.showModal({
        title:'￥'+that.data.totalPrice,
        content:'是否付款？',
        success(res){
          if(res.confirm){
            console.log('用户点击确定')
            //删除购物车中当前的上哦 id=2
            //将当前数据添加到待收货，全部订单的缓存数据
          
        }else if(res.cancel){
          console.log('用户点击取消')
          //删除购物车中当前的商品 id=2
          //将当前数据添加到待付款，全部订单的缓存数据中
        }
      }
      })
    }else{
      //没有地址
     
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