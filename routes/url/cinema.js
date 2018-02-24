var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('cinema/index', { title: '首页' })
});
router.get('/detail', function (req, res) {
  res.render('cinema/detail', { title: '电影信息' })
});
module.exports = router;
