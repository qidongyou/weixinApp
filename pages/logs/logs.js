//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    inputVal: 'aaaaa'
  },

  bindKeyInput:function(e){
    
    console.log(e.detail.value);

    if(!e.detail.value){
      
      this.setData({
        inputVal: 'adasdad'
      })

    }else{
      this.setData({
        inputVal: ''
      })
    }
    

    
  },
  formSubmit: function(e) {
      
      console.log(e.detail.value.input);
      var input = e.detail.value.input;
      if(!input){
        this.setData({
          inputVal: '55555'
        })
      }else{
        this.setData({
          inputVal: ''
        })
      }
      
      this.onLoad();
      this.formReset();


    },
    formReset: function() {
        this.setData({
          inputVal: ''
        })
    },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
