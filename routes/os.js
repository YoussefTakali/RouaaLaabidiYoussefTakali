var express = require('express');
var router = express.Router();
var os=require('os');

var a={};
a["hostname"]=os.hostname();
a["type"]=os.type();
a["platform"]=os.platform();

router.get('/', function(req, res, next) {
  res.send(console.log(a));
});
router.get('/hostname', function(req, res, next) {
  res.send(a["hostname"]);
});
router.get('/type', function(req, res, next) {
  res.send(a["type"]);
});
router.get('/platform', function(req, res, next) {
  res.send(a["platform"]);
});
router.get('/cpus', function(req, res, next) { 
  res.send(a["cpus"]=os.cpus());
});
router.get('/cpus/:id', function(req, res, next) { 
  var id=req.params.id;
  if(id<os.cpus().length){
    res.send(os.cpus()[id]);
  }else{
    res.send("cpu not found");
  }
});
module.exports = router;
