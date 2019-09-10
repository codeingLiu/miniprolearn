// pages/image/image.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
 
  //事件处理
  chooseImage:function(){
    const that=this;
    //系统相册
    wx.chooseImage({
      success: function(res) {
       const path= res.tempFilePaths[0];
        that.setData({
          curImage:path
        })
      },
    })
  },

  bindload(){
    console.log("加载完成....")
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