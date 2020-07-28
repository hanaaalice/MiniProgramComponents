// component/component-areacode/component-areacode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 存放暂时的选择值
    pickerChoose: '选择地区',
    // 第一列数据
    multiArray: [['全部','国内','国外'], ['全部'], ['全部']],
    multiIndex: [0, 0, 0],
    // 国内省地区划分
    province: ["北京市","上海市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","中国澳门","中国香港","中国台湾"],
    // 国内城市
    provinceCity: [
      {
        id: 1,
        province: '北京市',
        city: ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区"],
      },
      {
        id: 2,
        province: '上海市',
        city: ["黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明区"]
      },
      {
        id: 3,
        province: '天津市',
        city: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河区", "静海区", "蓟州区"]
      },
      {
        id: 4,
        province: '河北省',
        city: ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"]
      },
      {
        id: 5,
        province: '山西省',
        city: ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"]
      },
      {
        id: 6,
        province: '内蒙古自治区',
        city: ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "兴安盟", "锡林郭勒盟", "阿拉善盟"]
      },
      {
        id: 7,
        province: '辽宁省',
        city: ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"]
      },
      {
        id: 8,
        province: '吉林省',
        city: ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"]
      },
      {
        id: 9,
        province: '黑龙江省',
        city: ["哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "大兴安岭地区"]
      },
      {
        id: 10,
        province: '江苏省',
        city: ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"]
      },
      {
        id: 11,
        province: '浙江省',
        city: ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"]
      },
      {
        id: 12,
        province: '安徽省',
        city: ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市"]
      },
      {
        id: 13,
        province: '福建省',
        city: ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"]
      },
      {
        id: 14,
        province: '江西省',
        city: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"]
      },
      {
        id: 15,
        province: '山东省',
        city: ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市"]
      },
      {
        id: 16,
        province: '河南省',
        city: ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市"]
      },
      {
        id: 17,
        province: '湖北省',
        city: ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施土家族苗族自治州"]
      },
      {
        id: 18,
        province: '湖南省',
        city:  ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西土家族苗族自治州"]
      },
      {
        id: 19,
        province: '广东省',
        city: ["广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"]
      },
      {
        id: 20,
        province: '广西壮族自治区',
        city: ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"]["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"]
      },
      {
        id: 21,
        province: '海南省',
        city:["海口市", "三亚市", "三沙市", "儋州市"]
      },
      {
        id: 22,
        province: '重庆市',
        city: ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "璧山区", "铜梁区", "潼南区", "荣昌区", "开州区", "梁平区", "武隆区"]
      },
      {
        id: 23,
        province: '四川省',
        city:  ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"]
      },
      {
        id: 24,
        province: '贵州省',
        city:  ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "黔南布依族苗族自治州"]
      },
      {
        id: 25,
        province: '云南省',
        city:  ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "大理白族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"]
      },
      {
        id: 26,
        province: '西藏自治区',
        city:  ["拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市", "阿里地区"]
      },
      {
        id: 27,
        province: '陕西省',
        city:  ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"]
      },
      {
        id: 28,
        province: '甘肃省',
        city: ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州"]
      },
      {
        id: 29,
        province: '青海省',
        city:   ["西宁市", "海东市", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"]
      },
      {
        id: 30,
        province: '宁夏回族自治区',
        city:  ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"]
      },
      {
        id: 31,
        province: '新疆维吾尔自治区',
        city: ["乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市", "昌吉回族自治州", "博尔塔拉蒙古自治州", "巴音郭楞蒙古自治州", "阿克苏地区", "克孜勒苏柯尔克孜自治州", "喀什地区", "和田地区", "伊犁哈萨克自治州", "塔城地区", "阿勒泰地区"]
      },
      {
        id: 32,
        province: '中国澳门',
        city: ["花地玛堂区","圣方济各堂区","大堂区","望德堂区","风顺堂区","嘉模堂区","圣方济各堂区"]
      },
      {
        id: 33,
        province: '中国香港',
        city: ["中西区","东区","南区","湾仔区","九龙城区","观塘区","深水埗区","黄大仙区","油尖旺区","离岛区","葵青区","北区","西贡区","沙田区","大埔区","荃湾区","屯门区","元朗区"]
      },
      {
        id: 34,
        province: '中国台湾',
        city:  ["台北","新北","桃园","台中","台南","高雄"]
      },
    ],
    // 亚洲国家
    continentList: ['亚洲','欧洲','北美洲','南美洲','非洲','大洋洲','南极洲'],
    asin: ["巴林","韩国","黎巴嫩","东帝汶","尼泊尔","泰国","巴基斯坦","阿拉伯联合酋长国","不丹","阿曼","阿塞拜疆","朝鲜","菲律宾","柬埔寨","卡塔尔","吉尔吉斯斯坦","马尔代夫","马来西亚","蒙古","沙特阿拉伯","文莱","老挝","日本","土库曼斯坦","哈萨克斯坦","巴勒斯坦","塔吉克斯坦","格鲁吉亚","科威特","叙利亚","印度","印度尼西亚","亚美尼亚","阿富汗斯坦","乌兹别克斯坦","斯里兰卡","伊拉克","越南","伊朗","也门","约旦","缅甸","孟加拉国","新加坡","以色列","塞浦路斯","土耳其"],
    // 各州国家
    continents: [
      {
        id: 1,
        continent: '亚洲',
        country: ["巴林","韩国","黎巴嫩","东帝汶","尼泊尔","泰国","巴基斯坦","阿拉伯联合酋长国","不丹","阿曼","阿塞拜疆","朝鲜","菲律宾","柬埔寨","卡塔尔","吉尔吉斯斯坦","马尔代夫","马来西亚","蒙古","沙特阿拉伯","文莱","老挝","日本","土库曼斯坦","哈萨克斯坦","巴勒斯坦","塔吉克斯坦","格鲁吉亚","科威特","叙利亚","印度","印度尼西亚","亚美尼亚","阿富汗斯坦","乌兹别克斯坦","斯里兰卡","伊拉克","越南","伊朗","也门","约旦","缅甸","孟加拉国","新加坡","以色列","塞浦路斯","土耳其"],
      },
      {
        id: 2,
        continent: '欧洲',
        country: ["芬兰","瑞典","挪威","冰岛","丹麦","法罗群岛","爱沙尼亚","拉脱维亚","立陶宛","白俄罗斯","俄罗斯","乌克兰","摩尔多瓦","波兰","捷克","斯洛伐克","匈牙利","德国","奥地利","瑞士","列支敦士登  ","英国","爱尔兰","荷兰","比利时","卢森堡","法国","摩纳哥","罗马尼亚","保加利亚","塞尔维亚","马其顿","阿尔巴尼亚","希腊","斯洛文尼亚","克罗地亚","波斯尼亚和墨塞哥维那  ","意大利","梵蒂冈","圣马力诺","马耳他","西班牙","葡萄牙","安道尔"]
      },
      {
        id: 3,
        continent: '北美洲',
        country: ["美国","加拿大","墨西哥","危地马拉","伯利兹","萨尔瓦多","洪都拉斯","巴拿马","巴哈马","古巴","牙买加","海地","多米尼加","哥斯达黎加","圣基茨和尼维斯","安提瓜和巴布达","多米尼克","圣卢西亚","圣文森特和格林纳丁斯","巴巴多斯","格林纳达","特立尼达和多巴哥","尼加拉瓜"]
      },
      {
        id: 4,
        continent: '南美洲国家',
        country: ["哥伦比亚","委内瑞拉","圭亚那","苏里南","厄瓜多尔","秘鲁","巴西","玻利维亚","智利","巴拉圭","乌拉圭","阿根廷","法属圭亚那"]
      },
      {
        id: 5,
        continent: '非洲',
        country: ["阿尔及利亚","安哥拉","博茨瓦纳","布隆迪","喀麦隆","佛得角","中非","乍得","科摩罗","刚果共和国","刚果民主共和国","科特迪瓦","吉布提","埃及","赤道几内亚","厄立特里亚","斯威士兰","衣索比亞","加彭","冈比亚","加纳","几内亚","几内亚比绍","肯尼亚","賴索托","利比里亚","利比亞","马达加斯加","马里","毛里塔尼亚","模里西斯","摩洛哥","莫桑比克","纳米比亚","尼日尔","奈及利亞","卢旺达","邦特蘭","塞内加尔","塞舌尔","塞拉利昂","索馬利亞","索馬利蘭","南非","南蘇丹","苏丹","坦桑尼亚","突尼西亞","乌干达","西撒哈拉","尚比亞","辛巴威","桑给巴尔","亚速尔","加納利群島","休達","馬德拉","梅利利亚","马约特","留尼旺","圣赫勒拿、阿森松和特里斯坦-达库尼亚","圣赫勒拿","特里斯坦-达库尼亚","阿森松岛","英屬印度洋領地","格洛里厄斯群島","歐羅巴島","特羅姆林島","新胡安島"]
      },
      {
        id: 6,
        continent: '大洋洲',
        country: ["澳大利亚","巴布亚新几内亚","新西兰","斐济","所罗门群岛","帕劳","密克罗尼西亚联邦","马绍尔群岛","瑙鲁","瓦鲁阿图","图瓦卢","萨摩亚","基里巴斯和汤加共和国"]
      },
      {
        id: 7,
        continent: '南极洲',
        country: ["布韦岛","赫德岛和麦克唐纳群岛"]
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 确定切换
    bindMultiPickerChange: function (e) {
      let pickerChoose = this.data.multiArray[2][this.data.multiIndex[2]]
      this.setData({
        multiIndex: e.detail.value,
        pickerChoose: pickerChoose
      })
      this.triggerEvent("scsSearch",pickerChoose)
    },

    bindMultiPickerTap(e){
    },
    
    // FIXME 如不添加取消事件确定和取消按钮无法起效
    bindMultiPickerCancel(e){
    },

    bindMultiPickerColumnChange: function (e) {
      var that = this
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['全部'];
              data.multiArray[2] = ['全部'];
              break;
            case 1:
              data.multiArray[1] = that.data.province
              data.multiArray[2] = that.data.provinceCity[0].city
              break;
            case 2: 
              data.multiArray[1] = that.data.continentList
              data.multiArray[2] = that.data.asin
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[2] = ['全部'];
              break;
            case 1:
              data.multiArray[2] = that.data.provinceCity[data.multiIndex[1]].city
              break;
            case 2:
              data.multiArray[2] = that.data.continents[data.multiIndex[1]].country
            }
            data.multiIndex[2] = 0;
            break;
        }
      that.setData(data)
    },
  }
})
