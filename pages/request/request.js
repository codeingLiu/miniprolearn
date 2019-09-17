// pages/request/request.js
//导入自己封装的函数，这个需要用
import request from '../../net/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //网络请求
     //1原生的方式获取网络请求
    //  this.get_data_org()

     //2使用封装的方式获取
     this.get_data_fengzhuang()
  },

  //原生的方法获取网络
  get_data_org(){
    //1.get请求,默认是发送get请求

    wx.request({
      url: 'http://httpbin.org/get',
      success: function (e) {
        console.log(e)
      },
    })

    //2 get请求带参数  
    wx.request({
      url: 'http://httpbin.org/get',
      data: {
        user: 'liulv',
        page: 1
      },
      success: function (e) {
        console.log(e)
      }
    })

    //post请求带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'liu',
        age: 18,
        sex: "man"

      },

      success(e) {
        console.log(e.data.data)
      }
    })
  },

  /**
   * 示例：自己封装的网络访问方法
   */
  get_data_fengzhuang(){
    // get 方法携带参数
    request({
      url: 'http://httpbin.org/get',
      data: {
        user: 'liulv',
        page: 1
      },
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })

    // post方法携带参数
    request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data:{
        name: 'liulv',
        age:18,
      }
    }).then(res =>{
      console.log(res)
    }).catch(e =>{
      console.log(e)
    })
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
   * 实现改方法的时候可以进行分享
   */
  onShareAppMessage: function () {
   return{
     title:'搬砖了',
     imageUrl:'../../static/icon/g2.jpeg',
     path:'/pages/request/request'
   }
  }
})