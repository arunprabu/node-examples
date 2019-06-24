var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PhoneBook API Details'});
});

router.post('/', function(req, res, next) {
  console.log("Inside post req");
  res.json({ devName: 'Arun', exp: 14});
});

module.exports = router;
