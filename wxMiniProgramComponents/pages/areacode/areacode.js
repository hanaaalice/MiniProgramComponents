// 引入区号数据
import { regionnums } from './regiondata.js'
// globalData 
const app = getApp()
// pages/regionnum/regionnum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 区号数据数组
    regionsNum: regionnums,
    regionsNumData: regionnums,
    searchText: '',
    searchPlaceHolder: '搜索国家或地区',
    // 当前滑动内容
    currentHeader: '常用国家与地区',
    // 无搜索数据时
    noContent: [{
      "chinese_name": "暂无更多数据",
      "phone_code": "",
      "country_code": "no",
    }]
  },

  // 取消删除
  cancelInput(e) {
    this.setData({
      regionsNum: this.data.regionsNumData,
      searchText: ''
    })
  },

  /**
   * 监听搜索框输入
   */
  startSearch(e) {
    const that = this
    let inputValue = e.detail.value
    // console.log(inputValue)
    that.setData({
      searchText: inputValue
    })
    // 判断输入的是中文
    const pattern = new RegExp("[\u4E00-\u9FA5]+")
    // 判断输入的是数字
    const pattern1 = new RegExp("[0-9]+")
    // 数组去重
    const unique = arr => {
      let hash = {};
      return arr.reduce((item, next) => {
        hash[next.country_code] ? '' : hash[next.country_code] = true && item.push(next);
        return item
      }, []);
    }
    if (pattern.test(inputValue)) {
      const regions = that.data.regionsNumData.filter(regions => regions.chinese_name.includes(inputValue) && regions.phone_code.length != 0)
      if (regions.length != 0) {
        // console.log(unique(regions))
        that.setData({
          regionsNum: unique(regions)
        })
      } else {
        that.setData({
          regionsNum: that.data.noContent
        })
      }
    } else if (pattern1.test(inputValue)) {
      const regions = that.data.regionsNumData.filter(regions => regions.phone_code.includes(inputValue))
      // console.log(regions)
      if (regions.length != 0) {
        that.setData({
          regionsNum: unique(regions)
        })
      } else {
        that.setData({
          regionsNum: that.data.noContent
        })
      }
    } else {
      that.setData({
        regionsNum: that.data.noContent
      })
    }
    // 空则恢复数据
    if (!inputValue) {
      that.setData({
        regionsNum: that.data.regionsNumData
      })
    }
  },

  /**
 * 点击国家与地区
 */
  backValidate(e) {
    // console.log(e.currentTarget.dataset.code)
    if (e.currentTarget.dataset.code.length != 0) {
      var pages = getCurrentPages();
      // var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];
      prevPage.setData({
        regionNumber: e.currentTarget.dataset.code
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  },

  // 监听页面滚动事件
  onPageScroll: function (e) {
    let scrollHeight = e.scrollTop * app.globalData.px2rpx
    // 计算不同header之间国家数量与高度
    const tempRegion = regionnums
    let tempIndex = []
    let tempHeader = ["常用国家与地区", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "S", "T", "W", "X", "Y", "Z"]
    for (let i = 0; i <= tempRegion.length - 1; i++) {
      if (!tempRegion[i].country_code) {
        tempIndex.push(i)
      }
    }
    // console.log(tempIndex)
    const tempHeightArray = tempIndex.map((value, index) =>
      value = index * 50 + (value - index) * 90 + 25
    )
    // console.log(tempHeightArray)
    // console.log(scrollHeight)
    for (let i = 0; i <= tempHeightArray.length - 1; i++) {
      if (scrollHeight >= tempHeightArray[i] && scrollHeight <= tempHeightArray[i + 1]) {
        this.setData({
          currentHeader: tempHeader[i]
        })
        break;
      }
    }
  }
})
