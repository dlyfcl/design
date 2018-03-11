var database = require('../database/basic');
var cb = require('./cb').cb;
function User(req, res) {
  console.log('inside operation User');
  if (req.body.action === 'login') {
    login(req, res)
  }else if(req.body.action === 'want'){
    want(req,res);
  }else {
    register(req, res)
  }
}

function login(req, res) {
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
  console.log('inside operation register');
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
            var sql2 = 'INSERT INTO user (mobile,usernamr,password) VALUES(\'' + req.body.mobile + '\',\'' + req.body.name + '\',\'' + req.body.pwd + '\');';
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

function want(req,res){
  if(req.session.username){
    var sql = 'SELECT * FROM user WHERE username = \'' + req.session.username + '\';';
    database(function(con){
      con.query(sql,function(err,result){
        if (err) {
          console.log(err)
        }
        console.log(result);
        if(result.length !== 0){
          req.session.userId = result[0].id;
          res.send(req.session.userId);
        }
      })
    })
  }else{
    res.send("login")
  }
}
module.exports = User;

