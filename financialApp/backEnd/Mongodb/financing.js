const mongoose = require('mongoose')
// 定义financingSchema
const financingSchema = new mongoose.Schema({
  FinNo: {
    type: String,
    required: true
  },
  FinName: {
    type: String,
  },
  FinDate: {
    type: String,
  },
  FinContext: {
    type: String,
  },
  FinStart: {
    type: String
  },
  FinEnd: {
    type: String
  }
})
const financingModel = mongoose.model('financing', financingSchema)

// 定义插入financings表数据的函数
insertfinancing = (FinName, FinContext, FinEnd) => {
  let obj = new financingModel({
    FinNo: '1',
    FinName: FinName,
    FinDate: '2021-20-13',
    FinContext: FinContext,
    FinStart: '0',
    FinEnd: FinEnd,
  })
  obj.save()
}

// 定义更新financings表数据的函数
updatefinancing = (FinName, addNum) => {
  const Model = mongoose.model('financing')
  Model.updateOne({
    FinName: FinName
  }, {
    FinStart: String(addNum)
  }, ((err, doc) => {
    if (err) console.log(err)
    // console.log(doc)
  }))
}