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

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 1.5){
    document.write(pokemonList[i].name) + document.write(pokemonList[i].height + " Wow, that's big!");
  }else {
    document.write(pokemonList[i].name) + document.write(pokemonList[i].height);
  }
}
