const mongoose = require('mongoose')
// 定义invitationSchema
const invitationSchema = new mongoose.Schema({
  InvNo: {
    type: String,
    required: true
  },
  InvClass: {
    type: String,
  },
  InvDate: {
    type: String,
  },
  InvUserNo: {
    type: String,
  },
  InvTitle: {
    type: String
  },
  InvContent: {
    type: String
  }
})
const invitationModel = mongoose.model('invitation', invitationSchema)

// 定义插入invitations表数据的函数
insertInvitation = () => {
  let obj = new invitationModel({
    InvNo: '1',
    InvClass: '经验贴',
    InvDate: '2021-10-23',
    InvTitle: '水果的种植与灌溉',
    InvContent: '阿巴阿巴'
  })
  obj.save()
}

// 查询invitations表数据
queryInvitation = () => {
  const invitationModel = mongoose.model('invitation')
  invitationModel.find((err, invitations) => {
    console.log(invitations)
  })
}