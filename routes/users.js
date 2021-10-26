var express = require('express');
var router = express.Router();
var value= 0;
var rand=Math.floor(Math.random() * 10);

/* GET users listing. */
router.get('/', function(req, res, next) {
  value=1;
  res.send('User accesses are:'+ value);
  res.send("jai balayya");
  
});

module.exports = router;
