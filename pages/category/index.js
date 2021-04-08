// pages/categories/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: ['潮品尖货', '男鞋', '女鞋', '男装', '女装', '男童鞋', '女童鞋', '男童装', '女童装', '配件', '运动装备', '羽毛球', '乒乓球', '团购服务'],
    list: [{
        leftlist: '潮品尖货',
        rightlist: [{
            image: "../../images/my/category/chao1.jpg",
            title: "时装周走秀款"
          },
          {
            image: "../../images/my/category/chao2.jpg",
            title: "中国李宁卫衣"
          },
          {
            image: "../../images/my/category/chao3.jpg",
            title: "华晨宇同款"
          },
          {
            image: "../../images/my/category/chao4.jpg",
            title: "卫衣"
          },
          {
            image: "../../images/my/category/chao5.jpg",
            title: "T恤"
          },
          {
            image: "../../images/my/category/chao6.jpg",
            title: "绝影"
          }
        ]
      },
      {
        leftlist: '男鞋',
        rightlist: [{
            image: "../../images/my/category/nanxie1.jpg",
            title: "跑步鞋"
          },
          {
            image: "../../images/my/category/nanxie2.jpg",
            title: "篮球鞋"
          },
          {
            image: "../../images/my/category/nanxie3.jpg",
            title: "运动生活鞋"
          },
          {
            image: "../../images/my/category/nanxie4.jpg",
            title: "户外鞋"
          },
          {
            image: "../../images/my/category/nanxie5.jpg",
            title: "羽毛球鞋"
          },
          {
            image: "../../images/my/category/nanxie6.jpg",
            title: "训练鞋"
          },
          {
            image: "../../images/my/category/nanxie7.jpg",
            title: "凉鞋/拖鞋"
          }
        ]
      },
      {
        leftlist: '女鞋',
        rightlist: [{
            image: "../../images/my/category/nvxie1.jpg",
            title: "篮球鞋"
          },
          {
            image: "../../images/my/category/nvxie2.jpg",
            title: "跑步鞋"
          },
          {
            image: "../../images/my/category/nvxie3.jpg",
            title: "运动生活鞋"
          },
          {
            image: "../../images/my/category/nvxie4.jpg",
            title: "羽毛球鞋"
          },
          {
            image: "../../images/my/category/nvxie5.jpg",
            title: "乒乓球鞋"
          },
          {
            image: "../../images/my/category/nvxie6.jpg",
            title: "训练鞋"
          },
          {
            image: "../../images/my/category/nvxie7.jpg",
            title: "凉鞋/拖鞋"
          }
        ]
      },
      {
        leftlist: '男装',
        rightlist: [{
            image: "../../images/my/category/nanzhuang1.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "../../images/my/category/nanzhuang2.jpg",
            title: "卫衣"
          },
          {
            image: "../../images/my/category/nanzhuang3.jpg",
            title: "裤装"
          },
          {
            image: "../../images/my/category/nanzhuang4.jpg",
            title: "外套/马甲"
          },
          {
            image: "../../images/my/category/nanzhuang5.jpg",
            title: "运动内裤"
          },
          {
            image: "../../images/my/category/nanzhuang6.jpg",
            title: "紧身服"
          },
          {
            image: "../../images/my/category/nanzhuang7.jpg",
            title: "比赛服"
          },
          {
            image: "../../images/my/category/nanzhuang8.jpg",
            title: "套装"
          },
          {
            image: "../../images/my/category/nanzhuang9.jpg",
            title: "羽绒服"
          },
          {
            image: "../../images/my/category/nanzhuang10.jpg",
            title: "棉服"
          },
          {
            image: "../../images/my/category/nanzhuang11.jpg",
            title: "其他服装"
          }
        ]
      },
      {
        leftlist: '女装',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3122D74F896516794736E139BEA24CBD.jpg",
            title: "T恤"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C9F373DECC25E67ED5A74FB3D0FCB574.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3A7E4D934AAEC574976F3B65081FE197.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/8F6B70F48CFA2B90E37D5B02DC2F2E39.jpg",
            title: "裙装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/AB078DFC2A1CE6A3D3A3BA3B79F80B31.jpg",
            title: "运动文胸"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/D9657B8340FB10132D32443B6DB3F01E.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A9ABF902F457B595EAFED56E9DC85C2A.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/2C8378CE49E81BA4481D89EB83DB2D6D.jpg",
            title: "紧身服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/2569279921581627D77CFFA88A857974.jpg",
            title: "套装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C239070747DD262F30E1BFE550ECF3FA.jpg",
            title: "羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/702CACBD3553E1B97A441917FEF888FC.jpg",
            title: "棉服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/C4BFC3652C817BAB3D7AD1857F498C8C.jpg",
            title: "其他服装"
          }
        ]
      },
      {
        leftlist: '男童鞋',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/EE7F92005FD05AA3684AAC9B5BB23A4C.jpg",
            title: "跑步鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/599D1D16DAE1126F263FD5401D2BDF42.jpg",
            title: "篮球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/F37FC99CA7DBC3F4D8A98FECCF9CD0A2.jpg",
            title: "休闲鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/7CF1D2409AE32FA1FC321BDF004335C9.jpg",
            title: "凉鞋/拖鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/E0B14A3D9F3A0E6544C4B53CCD54DD79.jpg",
            title: "运动时尚鞋"
          }
        ]
      },
      {
        leftlist: '女童鞋',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/FA3FD9AF92EE1D693FB38D5028F23F7E.jpg",
            title: "跑步鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/366CB04CC2C598E9D2427FB33B5E0B23.jpg",
            title: "凉鞋/拖鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/1C1C5F474887B99FAA4E2E67C1343D95.jpg",
            title: "运动时尚鞋"
          }
        ]
      },
      {
        leftlist: '男童装',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/32492ADA1388096CF39C501DE8F48398.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/35470D2217CF80604024C5501E004C9E.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/815BCE3D338B405E8CE7F4D8371F11BF.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/7028FADF16D22ED1F535B45268DF216D.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/31831122462A44705F5AE4B66583BAB1.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/693282049DCA8E2F4E889E23D5CF578B.jpg",
            title: "棉服/羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/DDA912FBC407EAD494FA4ED4F94D3804.jpg",
            title: "套装"
          }
        ]
      },
      {
        leftlist: '女童装',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/0580D838AA8C419E549775033424A3AC.jpg",
            title: "卫衣"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/642A9CEADAFAD2F3EF28FF3BFD2DC1D2.jpg",
            title: "外套/马甲"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/31831122462A44705F5AE4B66583BAB1.jpg",
            title: "比赛服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A8FF673B51B8061D572E48F872241E2B.jpg",
            title: "T恤/Polo衫/背心"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/73E39AB3AAA59FFB682B5EBC1997E5DD.jpg",
            title: "裤装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/FCAF70E0A4AF3DDD7FBBEC53EE9DDD33.jpg",
            title: "裙装"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/47182DEE1352EE63348B762AE003311F.jpg",
            title: "棉服/羽绒服"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/DDA912FBC407EAD494FA4ED4F94D3804.jpg",
            title: "套装"
          }
        ]
      },
      {
        leftlist: '配件',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/3D6DE266BBF26ABF451E945848383ED4.jpg",
            title: "袜子"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/1DDC149FCD811D37F42259F8865AE07A.jpg",
            title: "包"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/4BAB63B2A23A48A8B8781635DCE635A8.jpg",
            title: "护具"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/5515FE0B3D8DEF7653E3C8A6345F9589.jpg",
            title: "帽子"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/AE514CA089C12C985ECF70A6876AA64F.jpg",
            title: "手套/围巾"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/85443F787EDEA9FBF746A1A647157FE0.jpg",
            title: "配饰"
          }
        ]
      },
      {
        leftlist: '运动装备',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/CC88DE23DD6F604B186509C6FB74DA96.jpg",
            title: "乒乓球装备"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/754D52C79E7E1F415DC38DE7244613A4.jpg",
            title: "羽毛球装备"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/A792E67EB3B0B37F07011F86D3F6CAB4.jpg",
            title: "专业竞技"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/cate/891C9AC1650AB817D581C62E775ADB52.jpg",
            title: "球类"
          }
        ]
      },
      {
        leftlist: '羽毛球',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/FC66873CE1758B090BEF2B3120B4AF33.jpg",
            title: "羽毛球拍"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/8AD66E38BC61DEEDF2DDEE4B151150A0.jpg",
            title: "羽毛球"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/8FC6640F2C4D915BB355799B4648A762.jpg",
            title: "羽毛球配件"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/6372CC7FC8131CAD5FF1D71C0C9A74AE.jpg",
            title: "羽毛球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/DF96BDF9630D2E8E5909535C65845116.jpg",
            title: "羽毛球服"
          }
        ]
      },
      {
        leftlist: '乒乓球',
        rightlist: [{
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/E17C6B0CBF488925055693E0B3F9A297.jpg",
            title: "乒乓球台"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/750B1F6974256A02BB67CCF7D384E808.jpg",
            title: "乒乓球板"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201701/02FC4B869A184D3CA570177BF7D5341E.jpg",
            title: "乒乓球"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/4D23A14CBA070D51DA68A0F855EE82FB.jpg",
            title: "乒乓球鞋"
          },
          {
            image: "https://cdns.lining.com/postsystem/docroot/images/promotion/201511/466D77FE16A2D6F90D396EF6ECAC5C55.jpg",
            title: "乒乓球服"
          }
        ]
      },
      {
        leftlist: '团购服务',
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
    navIndex: 0,
    // //左侧导航距离顶部的距离
    // scrollTopList: 0,
    //右侧内容对应的下标值
    contentIndex: 0,
    //左边导航距离顶部位置
    leftScrollTop:0


  },

  //左边导航的点击事件
  leftNavIndex: function (event) {
    var index = event.target.dataset.index
    this.setData({
      navIndex: index,
      contentIndex:index,
      leftScrollTop: 50 * (index - 4)
    })
  },

  //右边滚动事件
  rightScroll: function (event) {
    //右边整体内容距离顶部的高度，初始化高度
    var hei = 0
    //获取右边商品数据
    var list = this.data.list
    for (let i = 0; i < list.length; i++) {
      //获取id为#scroll-的节点元素,节点信息
      wx.createSelectorQuery().select('#scroll-' + i).fields({
        //获取节点的尺寸（宽、高）
          size: true
        },
        function (res) {
          // console.log(res.height)
          //将右边每个模块距离顶部的位移作为属性定义到右边数组中
          list[i].top = hei
          //将当前元素的高度和距离顶的位置相加
          //强制转换去掉浮点数
          hei += parseInt(res.height + 50)
          //元素底部距离顶部的高度
          list[i].bottom = hei
          // console.log(hei)
        }).exec()
    }
    // console.log(list)
    //修改data的数据
    this.setData({
      list
    })
    var scrollTop = event.detail.scrollTop
    // console.log(event.detail)
    //循环遍历右边商品的数组
    for (let i = 0; i < list.length; i++) {
      //判断滚动的范围
      if (scrollTop >= list[i].top && scrollTop < list[i].bottom) {
        this.setData({
          navIndex: i,
          leftScrollTop: 50 * (i - 4)
        })
      }
    }
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
    for (let i = 0; i < list.length; i++) {
      //获取rightContent节点
      wx.createSelectorQuery().select('#scroll-' + i).boundingClientRect(function (rect) {
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