//封装网络请求方法

// export default function request(options){
//   //使用Promiss方式进行回调给调用者 链式调用
//   return new Promise((resove,reject) =>{
//     wx.request({
//       url: options.url,
//       method: options.method || "GET",
//       data: options.data || {},
//       success: function (res) {
//         resove(res)
//       },
//       fail: function (e) {
//         reject(e)
//       }
//     })
//   })

  //或者使用更简洁的语法
  export default function request(options){
    return new Promise((resove,reject) =>{
      wx.request({
        url: options.url,
        method: options.method || 'GET',
        data: options.data || {},
        success: resove,
        fail: reject
      })
    })
  }

//封装
// export default function net(options){
//   return new Promise((resove,reject) =>{
//      wx.request({
//        url: options.url,
//        method: options.method ||'',
//        data: options.data ||{},
//        success: function(e){
//          resove(e)
//        },
//        fail: function(e){
//          reject(e)
//        }
//      })
//   })
// }