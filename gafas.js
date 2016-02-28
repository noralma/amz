
var amazon = require('amazon-product-api');

//Credenciales de cliente
var client = amazon.createClient({
  awsId: "AKIAJCGPE3ADWGUQDLJQ",
  awsSecret: "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",
  awsTag: "oletusgafas0e-21"
});

exports.buscarGafas = function(req, res) {
  //Parámetros recibidos
  var tipo_articulo = 'Apparel';
  var estado = 'New';
  var texto_busqueda = 'rayban';
  var grupos_respuesta = 'ItemAttributes,Offers,Images';

  var resultado = '';

  //Busqueda de gafas
  client.itemSearch({
    searchIndex: tipo_articulo,
    Condition: estado,
    Keywords: texto_busqueda,
    responseGroup: grupos_respuesta
  }).then(function(results){

    var indice = results.length;
    for(var i = 0; i < indice; i++) {

      //console.log(results[i].ItemLinks[0].ItemLink[0].URL);
      /*
      console.log(results[i].ItemAttributes[0].Binding);
      console.log(results[i].ItemAttributes[0].Brand);
      console.log(results[i].ItemAttributes[0].CatalogNumberList);
      console.log(results[i].ItemAttributes[0].Department);
      console.log(results[i].ItemAttributes[0].Feature);
      console.log(results[i].ItemAttributes[0].ItemDimensions);
      console.log(results[i].ItemAttributes[0].Label);

      console.log(results[i].ItemAttributes[0].ListPrice);

      console.log(results[i].ItemAttributes[0].Manufacturer);
      console.log(results[i].ItemAttributes[0].MPN);
      console.log(results[i].ItemAttributes[0].PackageQuantity);
      console.log(results[i].ItemAttributes[0].PartNumber);
      console.log(results[i].ItemAttributes[0].ProductGroup);
      console.log(results[i].ItemAttributes[0].ProductTypeName);
      console.log(results[i].ItemAttributes[0].Publisher);
      console.log(results[i].ItemAttributes[0].SKU);
      console.log(results[i].ItemAttributes[0].Studio);

      console.log(results[i].ItemAttributes[0].Title);

      console.log(results[i].LargeImage[0].URL);
      */

      //resultado += results[i].ItemLinks[0].ItemLink[0].URL;

    }

    //Respuesta
    res.status(200).jsonp(results);

  }).catch(function(err){
    console.log(err);
  });
};
