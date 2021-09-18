const express = require('express') //引入express 模块
const app = express() //创建实例
const mysql = require('mysql') //引入mysql 模块
const path = require('path')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
// 创建数据库连接 填入数据库信息 
//填自己数据库的信息!!!!!!!!!!!
const connection = mysql.createConnection({
  user: 'root', //用户名
  password: '2021911', //密码
  host: 'localhost', //主机（默认都是local host）
  database: 'nodetest' //数据库名
})
// 测试连接
connection.connect(err => {
  if (err) {
    console.log(err, '如果为null 就是连接成功');
  } else {
    console.log('连接成功');
  }
})



const sql = 'SELECT * FROM tour_user';
const sql2 = 'SELECT * FROM websites';

//查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }
});

//查
connection.query(sql2, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }
});

connection.end();

// 中间件---
app.use('/', indexRouter)
app.use('/users', userRouter)

// 使用模板引擎
app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs

// 中间件next
app.use(function (req, res, next) {
  console.log('1')
  next(new Error('haha'))
})

app.use(function (req, res, next) {
  console.log('2')
  res.status(200).end()
})

//错误处理
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// 博客登录处理


// 开启服务器
app.listen(3000, () => {
  console.log('服务器在3000端口开启。。。。。');
})


