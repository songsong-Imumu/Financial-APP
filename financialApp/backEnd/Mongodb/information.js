const mongoose = require('mongoose')
// 定义informationSchema
const informationSchema = new mongoose.Schema({
  InfNo: {
    type: String,
    required: true
  },
  InfClass: {
    type: String,
  },
  InfDate: {
    type: String,
  },
  InfUserNo: {
    type: String,
  },
  InfTitle: {
    type: String
  },
  InfContent: {
    type: String
  }
})
const informationModel = mongoose.model('information', informationSchema)

// 定义插入informations表数据的函数
insertInformation = () => {
  let obj = new informationModel({
    InfNo: '1',
    InfClass: '农作物',
    InfDate: '2021-20-13',
    InfTitle: '新型转基因水果',
    InfContent: 'www.baidu.com'
  })
  obj.save()
}

// 查询informations表数据
queryInformation = () => {
  const informationModel = mongoose.model('information')
  informationModel.find((err, informations) => {
    console.log(informations)
  })
}