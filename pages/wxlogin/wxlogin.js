// pages/wxlogin/wxlogin.js
//显示小程序登录流程，一般操作写在app.js的 onLoad
//1. wx.login() 获取code
//2. wx.request 发送code 到自己的服务器 服务器返回toke
//3. 保存token 到本地，之后每次访问接口都带上token

const TOKEN='token'

Page({
  //全局变量
  globalData:{
    token:''
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  
  //登录操作
  login(){
    wx.login({
      success: (res) => {
        //1.获取code
        const code=res.coee
        //2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/token',
          method: 'post',
          data:{
            code:code
          },
          success: (res) => {
            console.log(res)
            //3将返回的token 保存在文件中
            wx.setStorageSync(TOKEN, res.data.token)
            //同时放在全局变量中
            this.globalData.token=res.data.token
          },
          fail: (err) =>{
            console.log(err)
          }
        })
      },
      fail: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否有登录状态
    const token = wx.getStorageSync(TOKEN)

    if(token&&token.length !==0){
      //验证是否toke登录状态是否到期
    }else{
      //需要登录
      this.login()
    }
    
  },
  /**
   * 验证token是否有效
   */
  check_token(token){
    //从服务器上去验证token
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token:token
      },
      success: (res) =>{
        console.log(res)
        //验证通过，就赋值全局
        this.globalData.token=token
        //验证，如果失败或者失效
        //重新登录操作
        // this.login()
      }
    })
  },

})