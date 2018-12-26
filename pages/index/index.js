//index.js
//获取应用实例
var app = getApp();
var cardTeams;

Page({
  data: {
    cardTeams: [{
      "id": "1",
      "imgsrc":"../../images/comment/book.jpg",
      "name": "湖州师范学院图书馆",
      "count":"那些埋头苦读的考研党幸苦啦"
      
    }, {
      "id": "2",
        "imgsrc": "../../images/comment/FSW.jpg",
        "name": "丰盛湾",
        "count": "丰盛湾烘焙-用美食为你堆砌圣诞童话堡垒！",
        

      }, {
        "id": "2",
        "imgsrc": "../../images/comment/WT.jpg",
        "name": "微信团队",
        "count": "登录通知",
        

      }, {
        "id": "2",
        "imgsrc": "../../images/comment/MT.jpg",
        "name": "美团",
        "count": "[红包提醒]请您确认收钱！",
        

      }]
  },
  onLoad: function() {
    console.log('onLoad:' + app.globalData.domain)

  }
})