const request = require('request');
request('https://pokeapi.co/api/v2/pokemon/ditto', function (error, response, body) {
  if(response.statusCode === 200){
    const json = JSON.parse(body)
    console.log(json);
  } else{
    console.log("Error en la petición!!!");
  }
  
  
});