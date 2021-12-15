- 创建一个后端应用
  命令行输入：
  `npm init`
  在package.json中对scripts进行修改：
  `"start":"node app.js"`

- 定义 app 为 express 实例
  `const app = express()`

- 解决跨域问题

  - 安装 cors
    `npm install cors`
  - 使用中间件并允许来自所有来源的请求
    降低主服务器的负荷
    `const cors = require('core')`
    `app.use(cors())`

- 处理客户端的get请求
  req是客户端传来的参数
  res.json
  `app.get('/api/notes',(req,res)=>{ 
    res.json()
  })`

- 处理客服端的post请求
  `app.post('/api/notes',(req,res)=>{
    req.body()
    res.send({})
  })`