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
    if(req.session.username){
      res.render('user/wantSee');
    }else{
      res.render('user/login');
    }
    
  // }
})
module.exports = router
