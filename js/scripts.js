let pokemonRepository = (function (){
let pokemonList = []
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

function getAll(){
  return pokemonList;
}

function add(item){
  pokemonList.push(item);
}

// Use bootstrap and jQuery to add pokemons to the list
function addListItem(pokemon){
  let list = $(".pokemon-list");
  let listItem = $("<li></li>");
  let button = $("<button>" + pokemon.name + "</button>");
  listItem.addClass("list-group-item");
  button.addClass("btn-primary btn-block");
  button.attr("data-toggle", "modal");
  button.attr("data-target", "#pokemonModal");
  listItem.append(button);
  list.append(listItem);
  button.on("click", function(event){
    event.preventDefault();
    showDetails(pokemon);
  });
}

// Use json to fetch pokemons from the api
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
    /* eslint-disable no-console */
    console.error(e);
    /* eslint-enable no-console */
})
}

// Fetch from the api, the details of each pokemon, such as height, and image
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function(e){
    /* eslint-disable no-console */
    console.error(e);
    /* eslint-enable no-console */
  });
}

// Use bootstrap and jQuery to open the modal of each pokemon
function showModal(item){
  let modalTitle = $(".modal-title");
  let modalBody = $(".modal-body");

  modalTitle.empty();
  modalBody.empty();

  let nameElement = $(`<h1>  ${item.name}  </h1>`);

  let heightElement = $(`<p> Height: ${item.height} </p>`);

  let imageElement = $("<img class=\"modal-img\" style=\"width:50%\">");
  imageElement.attr("src", item.imageUrl);

  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(imageElement);
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function(){
  showModal(pokemon);
});
}

return{
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal
};

})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
  });
});
