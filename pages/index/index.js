//index.js
var app = getApp()
Page({
  data: {
    loadingHide: false,
    clothesList: [],
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        clothesList: [{title: "football", price: "10,00", imageUrl: "../../images/ozil.jpg", images: 
        [{title: "ozil", url: "../../images/ozil.jpg"}, {title: "sanchez", url: "../../images/sanchez.jpg"}, {title: "giroud", url: "../../images/giroud.jpg"}, {title: "walcott", url: "../../images/walcott.jpg"}, {title: "mustafi", url: "../../images/mustafi.jpg"}], id: 1},
        {title: "football", price: "10,00", imageUrl: "../../images/football1.jpg", id: 2},
        {title: "football", price: "10,00", imageUrl: "../../images/football1.jpg", id: 3},
        {title: "football", price: "10,00", imageUrl: "../../images/football1.jpg", id: 4}],
        loadingHide: true
      });
    }, 1000)
  },
  loadMore() {
    this.setData({
      clothesList: this.data.clothesList.concat(this.data.clothesList.slice(0,3))
    })
  },
  itemTap(event) {
    let item = event.currentTarget.dataset.item;
    
    wx.navigateTo({
      url: '../clothes/clothes?item=' + JSON.stringify(item),
      success: function(res){
        let clothesLogs = wx.getStorageSync('clothesLogs') || [];
        clothesLogs.unshift(item);
        wx.setStorageSync('clothesLogs', clothesLogs);
      }
    })
  },
  preview( e ) {
    var urls = []
    urls.push( e.target.dataset.url )
    console.log(urls);
    wx.previewImage( {
      urls: urls // 需要预览的图片http链接列表
    })
  }
})
