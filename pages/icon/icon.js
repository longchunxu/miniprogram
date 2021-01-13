// pages/icon/icon.js
Page({
  data: {
   list:[
      {
        id:0,
        name:"苹果",
        value:"aplle"
      },
      {
        id:1,
        name:"香蕉",
        value:"banner"

      },
      {
        id:"2",
        name:"香梨",
        value:"bear"
      }

    ],
    gender:"",
    msg:""

  },
  handleChange(e){
   // console.log(e);
   //获取单选框的值
   let gender=e.detail.value;
   this.setData({//this 应该指代page？ 通过setData（{属性：值}） 来设置变量的值
    //设置gender的值
    gender:gender

   })

  },
  handleChecked(e){
      console.log(e);
      const selected=e.detail.value;
      this.setData({
        msg:selected
        
      })

  }

  
})