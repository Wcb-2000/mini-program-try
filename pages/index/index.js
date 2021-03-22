Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      "../../images/my/swiper1.png",
      "../../images/my/swiper2.png",
      "../../images/my/swiper3.png",
      "../../images/my/swiper4.png"
    ],
    imgHei: "",
    lists: [
      "../../images/my/list1.png",
      "../../images/my/list2.png",
      "../../images/my/list3.png",
      "../../images/my/list4.png",
    ],
    //定义商品数据
    selectList: [
      {
        text: "更多小米手机产品",
        titleImg: "../../images/my/select.png",
        goodList: [
          {
            id: 1,
            image: "../../images/my/select1.jpg",
            title: "浙江队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true

          },
          {
            id: 2,
            image: "../../images/my/select2.jpg",
            title: "北京队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true
          },
          {
            id: 3,
            image: "../../images/my/select3.jpg",
            title: "山西队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true
          },
          {
            id: 4,
            image: "../../images/my/select4.jpg",
            title: "福建队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true
          },
          {
            id: 5,
            image: "../../images/my/select5.jpg",
            title: "上海队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true
          },
          {
            id: 6,
            image: "../../images/my/select6.jpg",
            title: "广州队",
            desc: "CBA篮球系列比赛服",
            price: "299",
            oldPrice: "￥599",
            num: 1,
            check:true
          }
        ]
      }
    ]
  },
  //点击跳转详情页
  toDetails:function(event){
    //获取当前数据下标值
    var id = event.target.dataset.id
    //获取当前商品数组
    var goodList = this.data.selectList[0].goodList
    //1 获取当前商品数据，显示到详情页
    var good = goodList[id]
    //修改数据缓存 添加到缓存数据中
    wx.setStorageSync('detailList', [good])
    //2 跳转到详情页
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //同步版本
// wx.setStorageSync      修改缓存数据（有则修改、无则添加）
    // wx.setStorageSync('list', 111111)
// wx.removeStorageSync   删除缓存数据
   // wx.removeStorageSync('list')
// wx.getStorageInfoSync  获取缓存数据信息
    // var info = wx.getStorageInfoSync()
    // console.log(info)
// wx.getStorageSync      获取缓存数据
//  var data = wx.getStorageSync('list')
//  console.log(data)
// wx.clearStorageSync    清空缓存数据

// 异步版本
// wx.setStorage 
// wx.removeStorage
// wx.getStorageInfo
// wx.getStorage
// wx.clearStorage

    // imgH:function(event){
    //   var imgWid = event.detail.width
    //   var imgHei = event.detail.height

    // }
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