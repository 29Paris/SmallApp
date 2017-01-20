let app = getApp()
Page({
  data: {
    item: {},
    indicatorDots: true
  },
  onLoad(option) {
    let item = JSON.parse(option.item);
    this.setData({
      item: item
    })
  }
})
