var express = require('express');
var router = express.Router();

var User = require('../../operation/user');

router.post('/login', function (req, res) {
  console.log(req.body.action);
  User(req,res)
});
router.post('/register', function (req, res) {
  User(req, res)
});
module.exports = router;
