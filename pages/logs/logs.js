Page({
  data: {
    clothesList: [],
    loadingHide: false
  },
  onShow() {
    var clothesLogs = wx.getStorageSync('clothesLogs') || [];
    this.setData({
      clothesList: clothesLogs,
      loadingHide: true
    })
  },
  itemTap(event) {
    let item = event.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../clothes/clothes?item=' + JSON.stringify(item)
    })
  },
})
