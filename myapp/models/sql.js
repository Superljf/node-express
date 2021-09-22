const express = require('express') //引入express 模块
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

module.exports = (sql, callback) => {
	return new Promise((resolve, reject) => {
		connection.query(sql, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
};


