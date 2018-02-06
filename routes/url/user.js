var express = require('express');
var router = express.Router();


router.get('/login', function(req, res) {
    res.render('user/login', { title: '登录' });
});
router.get('/register', function(req, res) {
    res.render('user/register', { title: '注册' });
});
module.exports = router;
