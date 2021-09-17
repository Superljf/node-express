const express = require('express') //引入express 模块
const app = express() //创建实例
const mysql = require('mysql') //引入mysql 模块
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

app.get('/', function (req, res) {
  console.log("🚀 ~ file: app.js ~ line 22 ~ req", req.path)
  res.send('Hello World');
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
// 开启服务器
app.listen(3000, () => {
  console.log('服务器在3000端口开启。。。。。');
})


