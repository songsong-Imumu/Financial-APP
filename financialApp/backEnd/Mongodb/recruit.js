const mongoose = require('mongoose')
// 定义recruitSchema
const recruitSchema = new mongoose.Schema({
  ReNo: {
    type: String,
    required: true
  },
  ReSalary: {
    type: Number
  },
  ReClass: {
    type: String,
  },
  ReCompany: {
    type: String,
  },
  ReTitle: {
    type: String
  },
  ReDate: {
    type: String,
  },
  Tag1: {
    type: Array
  },
  Tag2: {
    type: Array
  }
})
const recruitModel = mongoose.model('recruit', recruitSchema)

// 定义插入recruits表数据的函数
insertRecruit = (ReSalary, ReClass, ReCompany, ReDate, ReTitle, Tag1, Tag2) => {
  let obj = new recruitModel({
    ReNo: '1',
    ReSalary: ReSalary,
    ReClass: ReClass,
    ReCompany: ReCompany,
    ReDate: ReDate,
    ReTitle: ReTitle,
    Tag1: Tag1,
    Tag2: Tag2
  })
  obj.save()
}

// 查询recruits表数据
queryRecruit = () => {
  const recruitModel = mongoose.model('recruit')
  recruitModel.find((err, recruits) => {
    console.log(recruits)
  })
}