var express = require('express');
var router = express.Router();
var vale=Math.random();
var r=Math.log(vale);

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('the function[Math.log() applied to ] ['+ vale+'] is ['+r+']\n'+
  'the function[ Math.log10()  applied to ] ['+ vale+'] is ['+ Math.log10(vale) +']\n'+
  'the function[ Math.imul()  applied to ] ['+ vale+'] is ['+ Math.imul(vale) +']\n' );
  
  
});

module.exports = router;
