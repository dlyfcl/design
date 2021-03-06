var express = require('express');
var router = express.Router();
var Cinema = require('../../operation/cinema');

router.get('/', function (req, res) {
  req.session.url = "index";
  Cinema(req,res);
  // res.render('cinema/index', { title: '首页' })
});
router.get('/detail', function (req, res) {
  req.session.url = "detail";
  Cinema(req,res)
});
router.get('/help', function (req, res) {
  req.session.url = "help";
  Cinema(req,res);
  // res.render('cinema/index', { title: '首页' })
});
router.get('/cinema', function (req, res) {
  req.session.url = "cinema";
  Cinema(req,res);
  // res.render('cinema/cinema',)
});
module.exports = router;
