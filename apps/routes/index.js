var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: '' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '' });
});
router.get('/user', function(req, res, next) {
  res.render('user', { title: '' });
});
module.exports = router;
