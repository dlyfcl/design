var express = require('express');
var router = express.Router();

var User = require('../../operation/user');

router.post('/login', function (req, res) {
  User(req,res)
});
router.post('/register', function (req, res) {
  User(req, res)
});
router.post('/want', function (req, res) {
  User(req, res)
});
module.exports = router;
