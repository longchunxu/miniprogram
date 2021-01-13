// conponents/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    tab:[
      {
        id:0,
        name:"首页",
        isActive:true

      },
      {
        id:1,
        name:"原创",
        isActive:false

      },
      {
        id:2,
        name:"分类",
        isActive:false

      },
      {
        id:3,
        name:"关于",
        isActive:false

      }

    ]

  },
  // 组件里的事件处理函数要与data同级       
methods:{
  hindleItemtap(e){
// 1.绑定数据
// 2.获取索引
    const {index}=e.currentTarget.dataset;
  //  console.log(index);
  // 3.获取data中的数组
  let {tab}=this.data;
  console.log(tab);
  // 4. 对数组循环  每哥循环项 选中属性 设置为false 给当前索引设置为激活 true循环数组[].forEach()遍历数组 遍历数组的时候修改了v 也会导致原数组被修改
   tab.forEach((v,i)=>i===index? v.isActive=true:v.isActive=false)
  this.setData({
    tab
  })
    

  }
}
 
})

