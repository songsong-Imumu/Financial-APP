// 
require('./Mongodb/user')
require('./Mongodb/recruit')
require('./Mongodb/agriculture')
require('./Mongodb/invitation')
require('./Mongodb/information')
require('./Mongodb/financing')

// setup
const express = require('express')
const cors = require('cors')
const app = express()
const child_process = require('child_process')
const mongoose = require('mongoose')

let notes = [{
    id: '1',
    title: '网站HTTPS功能介绍:开启网络加密新时代',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2020-12-23'
  },
  {
    id: '2',
    title: '建站【域名使用】教程总览',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2020-11-13'
  },
  {
    id: '3',
    title: '在凡科购买的域名，如何获取域名证书',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2020-09-27'
  },
  {
    id: '4',
    title: '域名转出外部管理教程',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2020-09-25'
  },
  {
    id: '5',
    title: '如何购买域名',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2020-03-12'
  },
  {
    id: '6',
    title: 'https证书到期续费教程',
    content: 'Being a manager is hard work.We ve a created a set of tools that helps you manage your team on a day to day basis so you can focus on the big pictures.',
    date: '2019-03-14'
  }
]
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


app.get('/api/notes', (req, res) => {
  res.json(notes)
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
  insertRecruit(ReSalary, ReClass, ReCompany, ReDate, ReTitle, Tag1, Tag2)
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


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)