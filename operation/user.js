var database = require('../database/basic');
var cb = require('./cb').cb;
console.log('inside operation');
function User (req, res) {
  console.log('inside operation User');
  console.log(req.body);
  if (req.body.action === 'login') {
    login(req, res)
  }else {
    register(req, res)
  }
}

function login (req, res) {
  console.log('inside operation login');
  database(function (con) {
    console.log('inside database login');
    var sql = 'SELECT * FROM user WHERE mobile = \'' + req.body.mobile + '\';';
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      console.log(result);
      if (result.length !== 0) {
        if(result[0].mobile === req.body.mobile && result[0].password === req.body.pwd){
          res.send('login-ok')
        }else{
          res.send('error')
        }
      }else {
        res.send('login-no')
      }
    })
  }, 'cinemaSystem')
}

function register (req, res) {
  console.log('inside operation register');
  database(function (con) {
    var sql = 'SELECT mobile FROM user WHERE mobile = \'' + req.body.mobile + '\';';
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result.length !== 0) {
        res.send('register-no')
      }else {
        var sql2 = 'INSERT INTO user (mobile, password) VALUES(\'' + req.body.mobile + '\',\'' + req.body.pwd + '\');';
        con.query(sql2, function (err, result) {
          if (err) {
            console.log(err)
          }
          res.send('register-ok')
        })
      }
    })
  }, 'cinemaSystem')
}
module.exports = User;

