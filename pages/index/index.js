//index.js
//获取应用实例
var app = getApp()
Page({
    data:{
    topiclist:[{
      imgsrc: "../../image/java.png",
      title: "API服务化",
      introduce: "长泰广场KFC",
      author: "Huang Jacky",
      rank: "3/4",
      locations:"300m"
    },
    {
      imgsrc: "../../image/nodejs.png",
      title: "NodeJS Buffer",
      introduce: "The shrakwos RedenpeTion(1994)",
      author: "Huang Jacky",
      rank: "3/4",
      locations:"300m"
    },
    {
      imgsrc: "../../image/php.png",
      title: "PHP",
      introduce: "The shrakwos RedenpeTion(1994)",
      author: "Huang Jacky",
      rank: "3/4",
      locations:"300m"
    },
    {
      imgsrc: "../../image/java.png",
      title: "API服务化",
      introduce: "The shrakwos RedenpeTion(1994)",
      author: "Huang Jacky",
      rank: "3/4",
      locations:"300m"
    },
    {
      imgsrc: "../../image/java.png",
      title: "API服务化",
      introduce: "The shrakwos RedenpeTion(1994)",
      author: "Huang Jacky",
      rank: "3/4",
      locations:"300m"
    }
   
  ]
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
