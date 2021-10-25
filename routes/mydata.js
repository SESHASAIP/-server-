var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Hema Sesha Sai Pamulapati' });
});

module.exports = router;
