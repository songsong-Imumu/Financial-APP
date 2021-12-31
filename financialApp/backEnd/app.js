// 
require('./Mongodb/user')
require('./Mongodb/recruit')
require('./Mongodb/agriculture')
require('./Mongodb/invitation')
require('./Mongodb/information')
require('./Mongodb/financing')
require('./Mongodb/virtualRecruit')

// setup
const express = require('express')
const cors = require('cors')
const app = express()
const child_process = require('child_process')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())



const databaseName = 'Financial'
// 链接数据库
mongoose.connect(`mongodb://localhost/${databaseName}`)
const db = mongoose.connection;
// catch error
db.on('error', (err) => {
  console.log(err)
})

// 接收来自sign注册按钮的信息
app.post('/sign', (req, res) => {
  // 从客户端获取数据
  const {
    UserName,
    UserPassword,
    UserPhone,
    UserClass
  } = req.body
  // 向MongoDB中插入数据
  insertUser(UserName, UserPassword, UserPhone, UserClass)
})

// 返回log登录按钮的信息
app.get('/log', (req, res) => {
  const Model = mongoose.model('user')
  Model.find((err, users) => {
    res.send(users)
  })
})

// 返回information的信息
app.get('/information', (req, res) => {
  const Model = mongoose.model('information')
  Model.find((err, informations) => {
    res.send(informations)
  })
})

// 返回invitation的信息
app.get('/invitation', (req, res) => {
  const Model = mongoose.model('invitation')
  Model.find((err, invitations) => {
    res.send(invitations)
  })
})

// 返回recruit的信息
app.get('/recruit', (req, res) => {
  const Model = mongoose.model('recruit')
  Model.find((err, recruits) => {
    res.send(recruits)
  })
})

// 返回虚拟recurit的信息
app.get('/virtualRecruit', (req, res) => {
  const Model = mongoose.model('virtualRecruit')
  Model.find((err, data) => {
    res.send(data)
  })
})

// 接收来自fill填写的信息
app.post('/fill', (req, res) => {
  // 从客户端获取数据
  const {
    ReSalary,
    ReClass,
    ReCompany,
    ReDate,
    ReTitle,
    Tag1,
    Tag2
  } = req.body
  // 向MongoDB中插入数据
  insertvirtualRecruit(ReSalary, ReClass, ReCompany, ReDate, ReTitle, Tag1, Tag2)
})

// 返回financing筹资信息
app.get('/financing', (req, res) => {
  const Model = mongoose.model('financing')
  Model.find((err, financings) => {
    res.send(financings)
  })
})

// 接收来自editor填写的信息
app.post('/editor', (req, res) => {
  const {
    FinName,
    FinContext,
    FinEnd
  } = req.body
  insertfinancing(FinName, FinContext, FinEnd)
})
// 图片的post不用管
app.post('/local', (req, res) => {
  res.send('y')
})
// 接收来自addNum填写的信息
app.post('/addNum', (req, res) => {
  const {
    FinName,
    addNum
  } = req.body
  updatefinancing(FinName, addNum)
})

// 接收来自pushRecruit的information
app.post('/pushRecruit', (req, res) => {
  const {
    information
  } = req.body
  information.forEach(inf => {
    const {
      ReSalary,
      ReClass,
      ReCompany,
      ReDate,
      ReTitle,
      Tag1,
      Tag2
    } = inf
    insertRecruit(ReSalary, ReClass, ReCompany, ReDate, ReTitle, Tag1, Tag2)
  })
})

// 接收来自cancelRecruit的ID列表
app.post('/cancelRecruit', (req, res) => {
  const {
    ID
  } = req.body
  ID.forEach(id => {
    deletevirtualRecruit(id)
  })
})


// insertvirtualRecruit(3000, "人事", "阿里巴巴3", "2020", "招聘", ["吃苦"], ["奶酪"])
// insertvirtualRecruit(3000, "人事", "阿里巴巴2", "2020", "招聘", ["吃苦"], ["奶酪"])
// insertvirtualRecruit(3000, "人事", "阿里巴巴1", "2020", "招聘", ["吃苦"], ["奶酪"])
// insertvirtualRecruit(3000, "人事", "阿里巴", "2020", "招聘", ["吃苦"], ["奶酪"])
// insertvirtualRecruit(3000, "人事", "阿里", "2020", "招聘", ["吃苦"], ["奶酪"])
// insertvirtualRecruit(3000, "人事", "阿", "2020", "招聘", ["吃苦"], ["奶酪"])

// deletevirtualRecruit()

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)