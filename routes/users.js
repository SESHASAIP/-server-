var express = require('express');
var router = express.Router();
var value= 0;
var rand=Math.floor(Math.random());

/* GET users listing. */
router.get('/', function(req, res, next) {
  value=1;
  res.send('User accesses are:'+ value+'\n'+'[Math.log()]'+ 'applied to ['+rand+'] is ['+Math.log(rand)+']');
  
  
});

module.exports = router;
