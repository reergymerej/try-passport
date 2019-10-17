var express = require('express');
var router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'You need to log in.' });
});

router.get('/secure',
  passport.authenticate('local', {
    failureRedirect: '/login',
  }),

  function(req, res, next) {
    res.render('secure', { title: 'This is a secure page.' });
  }
);

module.exports = router;
