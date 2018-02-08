var database = require('../database/basic')
var cb = require('./cb')
console.log('sss')
function User (req, res) {
  // var data = req.body
  console.log('4')
  console.log(req.body)
  if (req.body.action === 'login') {
    login(req, res)
  }else {
    register(req, res)
  }
}
console.log('5')
function login (req, res) {
  console.log('6')
  database(function (con) {
    var sql = 'SELECT mobile FROM user WHERE mobile =' + req.body.mobile + ';'
    con.query(sql, function (err, result) {
      console.log(result)
      // if (result.length === 0) {
      //   console.log('result = ' + result)
      res.send('ok')
    // }else {
    //   console.log('result = ' + result)
    // }
    })
  }, 'cinemaSystem')
}

function register () {
  console.log('register')
}
module.exports = User
