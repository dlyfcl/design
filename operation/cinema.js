var database = require('../database/basic');
var cb = require('./cb').cb;
function Cinema (req, res) {
  console.log('inside operation Cinema');
  if (req.body.action === 'detail') {
    detail(req, res);
  }else {
      console.log("sss");
  }
}

function detail(req,res){
    console.log("inside detail");
    var sql = 'SELECT * FROM HeadImg WHERE img = \'' + req.body.src + '\';';
    database(function(con){
      con.query(sql,function(err,result){
        console.log("inside detail con");
        if (err) {
          console.log(err)
        }
        console.log(result);
        if(result.length !== 0){
          var mm = "datail-ok";
          res.send(mm);
        }
        return mm;
      });
    },"cinemaSystem")
}
module.exports = Cinema;