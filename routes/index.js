var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var variables = {title: 'Express', name: 'Volunteer'};
  res.render('index', variables);
});

module.exports = router;
