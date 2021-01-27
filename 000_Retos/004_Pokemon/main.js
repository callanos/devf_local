function showCards(pokeJson) {
    // Código para la tarjeta
    var card = document.createElement('div');
    card.className = "card col-4";
  
    // Código para el título
    var header = document.createElement('div');
    header.className = "card-header";
    header.innerHTML = pokeJson.name;
    card.appendChild(header);

    // Código para el contenedor
    var cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);

    // Código para la imagen
    var img = document.createElement('img');
    img.className = "card-img-bottom";
    img.addEventListener("click",modalFunction);
    img.src = pokeJson.art_url;
    card.appendChild(img);
  
    // Código para el card-body
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";
  
    // Código para el título
    //var title = document.createElement('h5');
    //title.className = "card-title";
    //title.innerHTML = pokeJson.name;
  
    // Código de la descripción
    var descripction = document.createElement('p');
    descripction.className = "card-text";
    descripction.innerHTML = pokeJson.description;
  

    card.appendChild(cardBody);
    
    cardBody.appendChild(descripction);
    //cardBody.insertAdjacentHTML('beforeend', pokeJson.spotify);
  }
  
  // console.log(bands);
  
  for (var i = 0; i < pokeJson.length; i++) {
    // console.log(bands[i]);
    showCards(pokeJson[i]);
  }

  
  function modalFunction() {

    alert("Hola!");
    var printModal = "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='exampleModalLabel'>Modal title</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>...</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button><button type='button' class='btn btn-primary'>Save changes</button></div></div></div></div>";

    var h = document.getElementById("mostrarModal");
    h.innerHTML=printModal;
        
  }
  