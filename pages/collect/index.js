// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectList:[],
    isData:false
  },

//点击删除商品
del: function (event) {
  // splice(下标值，删除个数)
  // var arr=[1,2,3,4,5,6]
  // var res = arr.splice(3,1)
  // console.log('arr==>',arr)
  // console.log('res==>',res)

  //获取下标值
  var index = event.target.dataset.index
  //获取缓存数据
  var collectList = wx.getStorageSync('collectList')
  var isData = true
  //删除选中的商品下标值
  collectList.splice(index, 1)
  //判断收藏是否有商品,如果没有则隐藏数据页面
  if(collectList.length==0){
    isData=false
  }
  //修改data数据
  //渲染界面
  this.setData({
    collectList,
    isData
  })
  //修改缓存数据
  wx.setStorageSync('collectList',collectList)
  
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
 //获取收藏缓存数据
 var collectList = wx.getStorageSync('collectList')
 //定义缓存状态
 var isData = false
 //判断收藏是否有数据
 if (collectList.length != 0) {
   isData = true
 }
 this.setData({
   isData: isData,
   collectList: collectList
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