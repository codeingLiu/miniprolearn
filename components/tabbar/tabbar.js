// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //定义一个tablebar名字的属性
    names: {
      type: Array,
      value: ["名字", "名字", "名字"]
    },
    //定义当前被选中的index
    currentIndex:{
      type:Number,
      value:0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleclick(e){
      // console.log(e)
      const index=e.target.dataset.index
      console.log(index)
  
      //给当前选中赋值
      this.setData({
        currentIndex:index
      })

      //把事件传给调用页面使用
      this.triggerEvent('tabclick', { index: index }, {})
    },

    textclick(e) {
      console.log(e)
      this.triggerEvent("textclick", {e}, {})
    }
  }
})
