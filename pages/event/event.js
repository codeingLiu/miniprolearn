// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:["衣服","裙子","鞋子"]
  },


  touchStart(){
    console.log("touchStart")
  },

  touchMove(){
    console.log("touchMove")
  },

  touchEnd(){
    console.log("touchEnd")
  },

  longPress(){
    console.log("longPress")
  },

  //事件的参数传递
  itemClick(event){
    console.log(event);
    const dataSet=event.currentTarget.dataset;
    const title =dataSet.item;
    const index= dataSet.index;
    console.log(title,index);
  },

  //事件扑捉和冒泡。。。。。。。。。

  capturebindView1(){
    console.log("capturebindView1")
  },
  bindtapView1(){
    console.log("bindtapView1")
  },

  capturebindView2() {
    console.log("capturebindView2")
  },
  bindtapView2() {
    console.log("bindtapView2")
  },

  capturebindView3() {
    console.log("capturebindView3")
  },
  bindtapView3() {
    console.log("bindtapView3")
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