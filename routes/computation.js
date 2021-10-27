var express = require('express');
var router = express.Router();
var vale=Math.random();
var r=Math.log(vale);

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('the function[Math.log() applied to ] ['+ vale+'] is ['+r+']');
  
  
});

module.exports = router;
