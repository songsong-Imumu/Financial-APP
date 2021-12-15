const mongoose = require('mongoose')
// 定义userSchema
const userSchema = new mongoose.Schema({
  UserNo: {
    type: String,
    required: true
  },
  UserName: {
    type: String,
  },
  UserPassword: {
    type: String,
  },
  UserPhone: {
    type: String
  },
  UserClass: {
    type: String
  }
})
const userModel = mongoose.model('user', userSchema)

// 定义插入users表数据的函数
insertUser = (UserName, UserPassword, UserPhone, UserClass) => {
  let obj = new userModel({
    UserNo: "3",
    UserName: UserName,
    UserPassword: UserPassword,
    UserPhone: UserPhone,
    UserClass: UserClass
  })
  obj.save()
}

// 查询users表数据
queryUser = () => {
  const userModel = mongoose.model('user')
  userModel.find((err, users) => {
    console.log('读取数据库', users)
  })
}