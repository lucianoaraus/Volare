// INSTRUCCIONES PARA CORRER LA API DE AMADEUS
// 1. Matar el localhost:3000
// 2. Abrir una nueva terminal
// 3. Posicionarse en la carpeta api
// 4. Ejecutar 'node service.js'

var Amadeus = require("amadeus");

var amadeus = new Amadeus({
  clientId: "", // must be secret
  clientSecret: "", // must be secret
});

// ejemplo
amadeus.shopping.flightOffersSearch
  .get({
    originLocationCode: "BUE",
    destinationLocationCode: "MAD",
    departureDate: "2022-06-01",
    adults: "2",
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (responseError) {
    console.log(responseError.code);
  });
