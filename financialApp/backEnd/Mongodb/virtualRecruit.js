const mongoose = require('mongoose')
// 定义recruitSchema
const virutalRecruitSchema = new mongoose.Schema({
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
const virtualRecruitModel = mongoose.model('virtualRecruit', virutalRecruitSchema)


insertvirtualRecruit = (ReSalary, ReClass, ReCompany, ReDate, ReTitle, Tag1, Tag2) => {
  let obj = new virtualRecruitModel({
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

deletevirtualRecruit = (id) => {
  const Model = mongoose.model('virtualRecruit')
  Model.deleteOne({
    _id: id
  }, (err, doc) => {
    if (err) console.log(err)
    // console.log(doc)
  })
}