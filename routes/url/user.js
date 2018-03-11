var express = require('express')
var router = express.Router()

router.get('/login', function (req, res) {
  res.render('user/login')
})
router.get('/register', function (req, res) {
  res.render('user/register')
})
router.get('/:id/want', function (req, res) {
  if(id === req.session.userId){
    res.render('user/register')
  }
})
module.exports = router
