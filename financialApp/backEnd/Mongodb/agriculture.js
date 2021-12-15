const mongoose = require('mongoose')
// 定义agricultureSchema
const agricultureSchema = new mongoose.Schema({
  AgNo: {
    type: String,
    required: true
  },
  AgArea: {
    type: String
  },
  AgClass: {
    type: String,
  },
  AgUserNo: {
    type: String,
  },
  AgDate: {
    type: String,
  },
  AgName: {
    type: String
  }
})
const agricultureModel = mongoose.model('agriculture', agricultureSchema)

// 定义插入agricultures表数据的函数
insertAgriculture = () => {
  let obj = new agricultureModel({
    AgNo: '1',
    AgArea: '上海',
    AgClass: '水果',
    AgUserNo: '1',
    AgDate: '2021-10-22'
  })
  obj.save()
}

// 查询agricultures表数据
queryAgriculture = () => {
  const agricultureModel = mongoose.model('agriculture')
  agricultureModel.find((err, agricultures) => {
    console.log(agricultures)
  })
}