var database = require('../database/basic');
var cb = require('./cb').cb;
function Cinema (req, res) {
  if (req.body.action === 'detail') {
    detail(req, res);
  }else{
    switch (req.session.url){
      case "index":
        console.log("inside switch index")
        getIndex(req,res);
        break;
      case "detail":
        getDetail(req,res);
        break;
      default:
        return;
    }
  }
}

function getIndex(req,res){
  res.render('cinema/index')
}

function detail(req,res){
    console.log("inside detail");
    req.session.src = req.body.src;
    res.send("info")
}

function getDetail(req,res){
  var sql = 'SELECT * FROM HeadImg WHERE bg_url = \'' + req.session.src + '\';';
  database(function(con){
    console.log("inside data")
    con.query(sql,function(err,result){
      if (err) {
        console.log(err)
      }
      console.log(result);
      var info = result[0];
      res.render('cinema/detail', info)
    });
  },"cinemaSystem")
}


module.exports = Cinema;