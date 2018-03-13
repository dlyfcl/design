var database = require('../database/basic');
var cb = require('./cb').cb;
function User(req, res) {
  if (req.body.action === 'login') {
    login(req, res)
  } else if (req.body.action === 'want') {
    want(req, res);
  } else {
    register(req, res)
  }
}

function login(req, res) {
  database(function (con) {
    var sql = 'SELECT * FROM user WHERE mobile = \'' + req.body.mobile + '\';';
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result.length !== 0) {
        if (result[0].mobile === req.body.mobile && result[0].password === req.body.pwd) {
          req.session.username = result[0].username;
          res.send('login-ok')
        } else {
          res.send('error')
        }
      } else {
        res.send('login-no')
      }
    })
  }, 'cinemaSystem')
}

function register(req, res) {
  database(function (con) {
    var sql = 'SELECT mobile FROM user WHERE mobile = \'' + req.body.mobile + '\';';
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result.length !== 0) {
        res.send('register-no')
      } else {
        var sql2 = 'SELECT username FROM user WHERE username = \'' + req.body.name + '\';'; {
          con.query(sql2, function (err, result) {
            if (err) {
              console.log(err)
            }
          })
          if (result.length !== 0) {
            res.send("namehaved");
          } else {
            var sql2 = 'INSERT INTO user (mobile,username,password) VALUES(\'' + req.body.mobile + '\',\'' + req.body.name + '\',\'' + req.body.pwd + '\');';
            con.query(sql2, function (err, result) {
              if (err) {
                console.log(err)
              }
              req.session.username = req.body.name;
              res.send('register-ok')
            })
          }
        }
      }
    })
  }, 'cinemaSystem')
}

function want(req, res) {
  if (req.session.username) {
    database(function (con) {
      console.log("inside want");
      var sql = 'SELECT * FROM user WHERE username = \'' + req.session.username + '\';';
      con.query(sql, function (err, result) {
        if (err) {
          console.log(err)
        }
        if (result.length !== 0) {
          console.log(result);
          req.session.userId = result[0].id;
          // res.send(req.session.userId);
          res.send("ssss");
          // return result[0].id;
        }
      })
    }, "cinemaSystem")
  } else {
    res.send("login")
  }
}
module.exports = User;

