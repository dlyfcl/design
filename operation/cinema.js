var database = require('../database/basic');
var cb = require('./cb').cb;
function Cinema(req, res) {
  if (req.body.action === 'detail') {
    detail(req, res);
  }else if(req.body.action === 'want'){
    want(req,res);
  }else {
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


//  get
function getIndex(req, res) {
  if (req.session.username) {
    res.render('cinema/index', { user: req.session.username, login: "", register: "" })
  } else {
    res.render('cinema/index', { user: "", login: "登录", register: "注册" })
  }
}

function getDetail(req, res) {
  var sql = 'SELECT * FROM HeadImg WHERE bg_url = \'' + req.session.src + '\';';
  database(function (con) {
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

function getHelp(req,res){
  if (req.session.username) {
    res.render('cinema/help', { user: req.session.username, login: "", register: "" })
  } else {
    res.render('cinema/help', { user: "", login: "登录", register: "注册" })
  }
}

module.exports = Cinema;