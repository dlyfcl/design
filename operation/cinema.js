var database = require('../database/basic');
var cb = require('./cb').cb;
function Cinema(req, res) {
  if (req.body.action === 'detail') {
    detail(req, res);
  } else if (req.body.action === 'want') {
    want(req, res);
  } else if (req.body.action === 'cinema') {
    cinema(req, res);
  } else if (req.body.action === 'add') {
    add(req, res);
  } else {
    switch (req.session.url) {
      case "index":
        console.log("inside switch index")
        getIndex(req, res);
        break;
      case "detail":
        getDetail(req, res);
        break;
      case "help":
        getHelp(req, res);
        break;
      case "cinema":
        getCinema(req, res);
        break;
      default:
        return;
    }
  }
}

//post 

function detail(req, res) {
  console.log("inside detail");
  req.session.src = req.body.src;
  res.send("info")
}

function cinema(req, res) {
  database(function (con) {
    var sql = 'SELECT * FROM imgAll';
    console.log("indide cinema");
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      var info = result;
      res.send(info);
    })
  }, "cinemaSystem")
}

function want(req,res){
  database(function(con){
    var sql = 'SELECT * FROM want WHERE user = \'' + req.session.username + '\';';
    console.log("indide want");
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      var info = result;
      res.send(info);
    })
  },"cinemaSystem")
}

function add(req, res) {
  if(req.session.username){
    database(function (con) {
      var sql = 'SELECT * FROM imgAll WHERE name = \'' + req.body.name + '\';';
      con.query(sql, function (err, result) {
        if (err) {
          console.log(err)
        }
        // console.log("inside add");
        var info = result[0];
        var sql2 = 'SELECT * FROM want WHERE name = \'' + req.body.name + '\';';
        con.query(sql2, function (err, result2) {
          if (err) {
            console.log(err);
          }
          if (result2.length === 0) {
            var sql3 = 'INSERT INTO want (name,intro,timeLen,type,actor,mainAct,goTime,src,user) VALUES(\'' + info.name + '\',\'' + info.intro + '\',\'' + info.timeLen + '\',\'' + info.type + '\',\'' + info.actor + '\',\'' + info.mainAct + '\',\'' + info.goTime + '\',\'' + info.src + '\',\'' + req.session.username + '\');';
            con.query(sql3,function(err,result3){
              if (err) {
                console.log(err)
              }
              console.log(result3)
            })
          }else{
            res.send("haved");
          }
        })
      })
    }, "cinemaSystem")
  }else{
    res.send("login");
  }
 
}

//  get
function getIndex(req, res) {
  if (req.session.username) {
    res.render('cinema/index', { user: req.session.username, login: "", register: "" })
  } else {
    res.render('cinema/index', { user: "", login: "登录", register: "注册" })
  }
}

function getDetail(req, res) {
  database(function (con) {
    var sql = 'SELECT * FROM HeadImg WHERE bg_url = \'' + req.session.src + '\';';
    console.log("inside data")
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      console.log(result);
      var info = result[0];
      if (req.session.username) {
        info.user = req.session.username;
        info.login = "";
        info.register = "";
        res.render('cinema/detail', info)
      } else {
        info.user = "";
        info.login = "登录";
        info.register = "注册";
        res.render('cinema/detail', info)
      }

    });
  }, "cinemaSystem")
}

function getCinema(req, res) {
  if (req.session.username) {
    res.render('cinema/cinema', { user: req.session.username, login: "", register: "" })
  } else {
    res.render('cinema/cinema', { user: "", login: "登录", register: "注册" })
  }
}

function getHelp(req, res) {
  if (req.session.username) {
    res.render('cinema/help', { user: req.session.username, login: "", register: "" })
  } else {
    res.render('cinema/help', { user: "", login: "登录", register: "注册" })
  }
}

module.exports = Cinema;