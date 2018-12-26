Page({
     onTapJump: function (event) {
          wx.switchTab({
               url: '../index/index',
          });
     },
     onUnload: function (event) {
          console.log("page is unload")
     },
     onHide: function (event) {
          console.log("page is hide")
     }
})

