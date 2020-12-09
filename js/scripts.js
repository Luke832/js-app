let pokemonRepository = (function (){
let pokemonList = []
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
// let modalContainer = document.querySelector('#modal-container');

function getAll(){
  return pokemonList;
}

function add(item){
  pokemonList.push(item);
}

function addListItem(pokemon){
  let list = $(".pokemon-list");
  let listItem = $("<li></li>");
  let button = $("<button>" + pokemon.name + "</button>");
  button.addClass("btn-primary");
  button.attr("data-toggle", "modal");
  button.attr("data-target", "#pokemonModal");
  listItem.append(button);
  list.append(listItem);
  button.on("click", function(event){
    // event.preventDefault();
    showDetails(pokemon);
  });
}

function loadList(){
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json){
    json.results.forEach(function(item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      add(pokemon);
    });
  }).catch(function(e){
    console.error(e);
})
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function(e){
    console.error(e);
  });
}

function showModal(item){
  let modalTitle = $(".modal-title");
  let modalBody = $(".modal-body");

  // let modalContainer = document.querySelector('#modal-container');
  //
  // modalContainer.innerHTML = '';
  // let modal = document.createElement('div');
  // modal.classList.add('modal');
  //
  let nameElement = $("<h1>" + item.name + "</h1>");

  let heightElement = $("<p>" + "Height: " + item.height + "</p>");

  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr("src", item.imageUrl);
  //
  // let closeButtonElement = document.createElement('button');
  // closeButtonElement.classList.add('modal-close');
  // closeButtonElement.innerText = 'Close';
  // closeButtonElement.addEventListener('click', hideModal);
  //
  // modal.appendChild(nameElement);
  // modal.appendChild(heightElement);
  // modal.appendChild(imageElement);
  // modal.appendChild(closeButtonElement);
  // modalContainer.appendChild(modal);
  //
  // modalContainer.classList.add('is-visible');

  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(imageElement);
}

// function hideModal(){
//   let modalContainer = document.querySelector('#modal-container');
//   modalContainer.classList.remove('is-visible');
// }
//
// window.addEventListener('keydown', (e) => {
//   let modalContainer = document.querySelector('#modal-container');
//   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
//     hideModal();
//   }
// });
//
// modalContainer.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target === modalContainer){
//     hideModal();
//   }
// });
//
// document.querySelector('.pokemon-list').addEventListener('click', () => {
//   showModal(name);
// });

function showDetails(pokemon) {
  loadDetails(pokemon).then(function(){
  showModal(pokemon);
  console.log(pokemon);
});
}

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
};

})();

// for (let i = 0; i < pokemonList.length; i++){
//   if (pokemonList[i].height > 1.5){
//     document.write(pokemonList[i].name + " height: " +  pokemonList[i].height + " Wow, that's big!");
//     document.write("<br>");
//   }else {
//     document.write(pokemonList[i].name + " height: " +  pokemonList[i].height);
//     document.write("<br>");
//   }
// }

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
  });
});
