// mySub/pages/welArt/welArt.js
const UTIL = require('../../../utils/util.js');
const API = require('../../../API/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      vipList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVip();
  },

    //  获取vip
    getVip:function(){
        // 获取广告
        let params = {
            category_id:0,
            page:0,
            limit:18
        };
        UTIL.SEND(API.GetVipAdd,'GET',params,res=>{
                console.log(res,'rrrffffgggg');

                this.setData({
                    vipList:res.data.data
                })
                // 停止下拉动作
                wx.stopPullDownRefresh();
            },res=>{
                console.log(res,'code失败');
            }
        )
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