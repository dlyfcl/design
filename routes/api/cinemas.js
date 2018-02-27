var express = require('express');
var router = express.Router();

var Cinema = require('../../operation/cinema');

router.post('/detail', function (req, res) {
  console.log(req.body.action);
  Cinema(req,res)
});
module.exports = router;