// pages/cpn/cpn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  click(e){
    console.log(e)
    console.log(e.detail.p)
  },

  //事件处理之增长
  increment(){
    //最终目的是修改mysel组件内的值
    //1 获取组件对象，可以通过组件的class和id来获取
    // const my_sel=this.selectComponent(".sel-class");
    const my_sel = this.selectComponent("#sel-id")

    //2 通过setData来改变组件的值 （不推荐）
    //  my_sel.setData({
    //    counter:my_sel.data.counter +20
    //  })
    //3.一般是通过方法调用
    my_sel.incrementNum(10)
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