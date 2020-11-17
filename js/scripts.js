let pokemonRepository = (function (){
let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass' , 'poison'],
  },
  {
    name: 'Charmeleon',
    height: 1.1,
    type: ['fire'],
  },
  {
    name: 'Blastoise',
    height: 1.6,
    type: ['water'],
  },
  {
    name: 'Caterpie',
    height: 0.3,
    type: ['bug'],
  },
  {
    name: 'Weedle',
    height: 0.3,
    type: ['bug' , 'poison'],
  },
  {
    name: 'Fearow',
    height: 1.2,
    type: ['flying' , 'normal'],
  }
]

function getAll(){
  return pokemonList;
}

function add(item){
  pokemonList.push(item);
}

return{
  add: add,
  getAll: getAll
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

pokemonRepository.getAll().forEach(function (pokemon){
  console.log(pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type);
  document.write(pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type + "<br>");
});
