// pages/demo1/demo1.js
Page({
  data: {
    letter:0,
      msg:"hello world",
      name:"lcx",
      age:23,
      bool:false,
      info:{
        sex:"male",
        name:"lcx",
        age:23


      },
      list:[
        {
          id:0,
          name:"aa"
        },
        {
          id:1,
          name:"bb"
        },
        {
          id:2,
          name:"cc"
        }

      ]
     
  },
  handleInput(e){
    //console.log(e.detail.value);
    this.setData({
      letter:e.detail.value

    })

  }
  ,
  handleTap(e){
    
    // console.log(e);
    const operation=e.currentTarget.dataset.operation;
    this.setData(
    {
      letter:this.data.letter+operation
      
    }
  
    )

  }
 

})