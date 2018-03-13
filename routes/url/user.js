var express = require('express')
var router = express.Router()
var path = require('path');

router.get('/login', function (req, res) {
  res.render('user/login')
})
router.get('/register', function (req, res) {
  res.render('user/register')
})
router.get('/want', function (req, res) {
  // if(req.params.id === req.session.userId){
    res.render('user/wantSee');
  // }
})
module.exports = router
