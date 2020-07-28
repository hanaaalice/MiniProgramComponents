// 引入行业分类文件
import {allJobsType} from './industry.js'

// 搜索关键字截取
const getKeyWords = (str, key) => str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入框
    searchText: '',
    hasInput: false,
    // 行业数据
    allJobs: allJobsType,
    jobTitleIndex: 0,
    searchJobs: [],
    // 是否搜索
    isSearch: true,
  },

  // 开始搜索
  searchList(e) {
    const that = this
    let tempValue = e.detail.value.trim()
    that.setData({
      hasInput: true,
      searchText: tempValue
    })
    let tempChooseData = that.data.allJobs
    // 搜索后的数组
    let choosedJobs = []
    // 判断输入的是中文
    const pattern = new RegExp("[\u4E00-\u9FA5]+")
    if (pattern.test(tempValue)) {
      for (let i = 0; i <= tempChooseData.length - 1; i++) {
        for(let j = 0; j <= tempChooseData[i].children.length - 1; j++) {
          if(tempChooseData[i].children[j].name.includes(tempValue)){
            tempChooseData[i].children[j].title = tempChooseData[i].name
            tempChooseData[i].children[j].splitName = getKeyWords(tempChooseData[i].children[j].name,tempValue)
            choosedJobs.push(tempChooseData[i].children[j])
          }
        }
      }
      if(choosedJobs.length != 0){
        that.setData({
          searchJobs: choosedJobs,
          isSearch: false
        })
      } else {
        choosedJobs.push(
          {
            code: '1',
            name: '',
            splitName: '暂无更多数据'
          }
        )
        that.setData({
          isSearch: false,
          searchJobs: choosedJobs
        })
      }
    } else if (!tempValue) {
      that.setData({
        isSearch: true
      })
    } else {
      choosedJobs.push(
        {
          code: '1',
          name: '',
          splitName: '暂无更多数据'
        }
      )
      that.setData({
        isSearch: false,
        searchJobs: choosedJobs
      })
    }
  },

  // 确认选择并返回上一页面
  defineJob(e) {
    const that = this
    var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      chooseJob: e.currentTarget.dataset.choosejob
    })
    wx.navigateBack({
      delta: 1,
    })
  },

  // 取消搜索
  cancelInput(e) {
    this.setData({
      searchText: '',
      hasInput: false,
      isSearch: true,
      searchJobs: []
    })
  },

  // 左侧行业总类选择
  chooseJobTitle(e) {
    this.setData({
      jobTitleIndex: e.currentTarget.dataset.jobtitle
    })
  }
  
})