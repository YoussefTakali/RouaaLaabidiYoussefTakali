var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bonjour pour la classe 1alinfo1');
});

module.exports = router;
