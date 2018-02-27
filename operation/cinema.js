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
    console.log(req.body);
}
module.exports = Cinema;