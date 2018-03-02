var express = require('express');
var router = express.Router();

var Cinema = require('../../operation/cinema');

router.post('/detail', function (req, res) {
  Cinema(req,res)
});
module.exports = router;