var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/secure', function(req, res, next) {
  res.render('secure', { title: 'This is a secure page.' });
});

module.exports = router;
