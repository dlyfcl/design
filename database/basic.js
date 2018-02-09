var mysql = require('mysql')
var init = function (cb, db) {
  var options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  }
  if (db) {
    options.database = db
  }
  var con = mysql.createConnection(options)
  con.connect(function (err) {
    if (err) {
      console.log('error' + err)
    }
    console.log('connected')
    cb instanceof Function && cb(con)
  })
}
module.exports = init
