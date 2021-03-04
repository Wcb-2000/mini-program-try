Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpg",
      "../../images/swiper3.jpg"
    ],
    imgHei: "",
    lists: [
      "../../images/list1.png",
      "../../images/list2.png",
      "../../images/list3.png",
      "../../images/list4.png",
      "../../images/list5.png",
      "../../images/list6.png",
      "../../images/list7.png",
      "../../images/list8.png",
      "../../images/list9.png",
      "../../images/list10.png"
    ],

    selectList: [
      {
        text: "更多小米手机产品",
        titleImg: "../../images/select.jpg",
        goodList: [
          {
            id: 1,
            image: "../../images/select1.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 0
          },
          {
            id: 2,
            image: "../../images/select2.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 1
          },
          {
            id: 3,
            image: "../../images/select3.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 2
          },
          {
            id: 4,
            image: "../../images/select4.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 3
          },
          {
            id: 5,
            image: "../../images/select5.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 4
          },
          {
            id: 6,
            image: "../../images/select6.jpg",
            title: "小米10",
            desc: "骁龙865/1亿像素",
            price: "3399",
            oldPrice: "￥3999",
            num: 5
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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