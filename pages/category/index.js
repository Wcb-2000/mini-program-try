// pages/categories/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: ['小米手机', 'Redmi手机', '电视', '大家电', '电脑办公', '小爱音响', '路由器', '生活电器', '厨房电器', '智能穿戴', '智能家居', '智能家居', '智能家居', '智能家居'],
    list: [{
      leftlist: '小米手机',
      rightlist: [{
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        }
      ]    
    },
    {
      leftlist: 'Redmi手机',
      rightlist: [{
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        }
      ]    
    },
    {
      leftlist: '电视',
      rightlist: [{
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        },
        {
          image: "../../images/select1.jpg",
          title: "小米10"
        }
      ]    
    }
  ],

    height: 0,
    //导航栏下标值
    navIndex:0,
    //左侧导航距离顶部的距离
    scrollTopList:0,
    contentIndex:0
   
    
  },

  //左边导航的点击事件
  leftNavIndex:function(event){
    var index = event.target.dataset.index
    this.setData({
      navIndex:index,
      leftScrollTop:-50*(index+1)
    })
  },

  //右边滚动事件
  rightScroll:function(event){
    var that = this
    //右边整体内容距离顶部的高度
    var scrollTop = event.detail.scrollTop
    var scrollTopList = this.data.scrollTopList
      for(var j=0;j<scrollTopList.length;j++){
        if(scrollTopList[j]<=scrollTop&& scrollTop<scrollTopList[j+1]){
          console.log('j==>',j)
          that.setData({
            navIndex:j
          })
        }
      }
    // console.log(scrollTop)
    //右边数组
   
    this.setData({
      scrollTop,
      scrollTopList
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
    var list = this.data.list
    // 先定义初始高度和距离顶部的高度数据
    var height = 0
    var scrollTopList = []
    //循环遍历右边数组
    for(let i=0;i<list.length;i++){
      //获取rightContent节点
      wx.createSelectorQuery().select('#scroll-'+i).boundingClientRect(function(rect){
        //将每个rightContent距离顶部位置插入到数组中
        scrollTopList.push(parseInt(height))
        //每个rightContent距离顶部位置的前面节点的高度相加
        height += rect.height //节点高度

      }).exec()
    }
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      scrollTopList
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