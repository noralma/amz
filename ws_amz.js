var express = require('express');
var path = require('path');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var gafas = require('./gafas');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
router.route('/gafas')
  .get(gafas.buscarGafas);

app.use(router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function() {
  console.log("Escuchando en el puerto 8000");
});
