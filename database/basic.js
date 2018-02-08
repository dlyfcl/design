var mysql = require('mysql');
var init = function (cb, db) {
  var options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORDs
  };
  if (db) {
    options.database = db;
  }
  var con = mysql.createConnection(options);
  con.connect(function (err) {
    console.log("connected");
    cb instanceof Function && cb(con);
  });
};
module.exports = init;
