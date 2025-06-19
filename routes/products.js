var express = require('express');
var router = express.Router();

/* GET home page. */

var products = require('../products.json');
const productsList = Object.entries(products).map(([productId, product]) => (
  ({ id: productId, name: product.name, manufacturor: product.manufacturer, price: product.price, stock: product.stock, option: product.options ? product.options.join(', ') : 'N/A' })
));
router.get('/', function(req, res, next) {
  res.send(productsList);
});
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(productsList.length);
  console.log(productsList[id]);
  var product = productsList[id];
    res.send(productsList[id]? productsList[id]: "Product not found");
});
router.get("/instock/:qt", function(req, res) {
  var qt = parseInt(req.params.qt, 10);
  console.log(qt);
  console.log(productsList.length);
  var inStockProducts = productsList.filter(product => product.stock >= qt);
  res.send(inStockProducts);
});
router.get("/:id/:qt", function(req, res, next) {
  var id = req.params.id;
  var qt = req.params.qt;
  console.log(productsList.length);
  console.log(productsList[id]);
  var product = productsList[id];
  if (product) {
   var ReturnResponse ={
    id :product.name,
    qt : qt,
    unit_price : product.price,
    total_price : product.price * qt
   };
    res.send(ReturnResponse);
  } 
});

module.exports = router;