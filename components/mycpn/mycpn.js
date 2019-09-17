// components/mycpn/mycpn.js
Component({
  /**
   * 组件的属性列表  
   * 调用页面可以在标签内使用这里声明的属性
   */
  properties: {
    //声明标题的属性
    titleTxt:{
      type:String,
      value:'我是默认的标题',
      observer:function(newval,oldval){
        console.log(newval,oldval)
      }
    },

    //声明属性
    contextTxt:{
      type:String,
      value:'我是默认正文',
      observer:function(newval,oldval){
        console.log(newval,oldval)
      }
    }
  },

  /**
   * 调用页面可以在标签内使用这里声明的样式
   * //声明样式
   */
  externalClasses:["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      console.log("-----")
      //要使该方法能够被调用，需要用该方法把给发射出去调用者用bindclick
      var p="组件传的事件参数";
      this.triggerEvent("click",{p},{})
    },
  },

  /**
   * 监听所在页面的生命周期
   */
  pageLifetimes:{
    show(){
      //监听组件所在页面显示出来的时候
      console.log("监听组件所在页面显示出来的时候")
    },

    hide(){
      //监听组件所在页面隐藏的时候
    },

    resize(){
      //监听页面尺寸变化
    }
  },

  /**
   * 组件本身生命周期
   */
  lifetimes:{
    created(){
      //创建出来
      console.log("创建出来")
    },

    attached(){
      //被添加到页面
      console.log("被添加到页面")
    },

    ready(){
      //刚渲染出来
    },

    moved(){
      //组件移动到另外一个节点
    },

    detached(){
      //被移除掉
      console.log("被移除掉")
    }
  }
})
