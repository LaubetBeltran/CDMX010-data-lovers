/*import data from './data/pokemon/pokemon.js';
let allPokemon = data.pokemon;*/

//CONOCER VALORES DE BUDDY-DISTANCE

/*let miMapa = new Map();

allPokemon.forEach((pokemon) => {
  miMapa.set(pokemon['buddy-distance-km'])
})*/

//console.log(miMapa);

//FUNCIÓN PARA EXPLORAR DATOS BUDDY-DISTANCE-KM Y HACER TEST
/*
function knowData (buddyDistValue) {
  let buddyDistOneKm = allPokemon.filter((pokemon => 
    pokemon['buddy-distance-km'] === buddyDistValue))
  console.log(buddyDistOneKm);
}

knowData('1');
knowData('3');
knowData('5');
knowData('20');
*/
//FUNCIÓN PARA FUSIONAR FILTROS DATOS BUDDY-DISTANCE-KM + WEAKNESSES Y HACER TEST

/*
buddyDistOneKm = allPokemon.filter((item) => {
  for (var key in filter) {
    if (item[key] === undefined || item[key] != filter[key])
      return false;
  }
  return true;
});


//FUNCIÓN PARA FUSIONAR FILTROS DATOS BUDDY-DISTANCE-KM + WEAKNESSES Y HACER TEST
let valuesWekBuddy = {
  'buddy-distance-km': '20',
  'type': ['ice', 'flying'],
  'weaknesses': [
    'fire',
    'ice',
    'flying',
    'psychic'
  ],
};
console.log(valuesWekBuddy.type)
console.log(valuesWekBuddy['buddy-distance-km'])
console.log(allPokemon[0]['buddy-distance-km'])
console.log(allPokemon[0].type)
console.log(typeof valuesWekBuddy.type)
console.log(typeof valuesWekBuddy['buddy-distance-km'])
console.log(typeof allPokemon[0]['buddy-distance-km'])
console.log(typeof allPokemon[0].type)
console.log(valuesWekBuddy['weaknesses'])

/*
//buddy-distance
let buddyDistKmWeak = allPokemon.filter(weakBuddyFilter)
  function weakBuddyFilter (pokemon) {
    console.log(pokemon);
      if (pokemon['buddy-distance-km'] == valuesWekBuddy['buddy-distance-km']) {
        return true;
      } else {
      return false;
    }
}*/
/*
//weaknesses
let weaknOb = valuesWekBuddy.weaknesses;
console.log(weaknOb)
console.log(weaknOb.length);
let buddyDistKmWeak = allPokemon.filter(weakBuddyFilter)
  function weakBuddyFilter (pokemon) {
    console.log(pokemon);
    let weaknesesNumber = pokemon.weaknesses;
    console.log(weaknesesNumber)
    console.log(weaknesesNumber.length)
      if (weaknesesNumber.length == weaknOb.length) {
        return true;
      } else {
      return false;
    }
}*/

//Two conditions (buddy-distacne and weaknesses number)
/*let weaknOb = valuesWekBuddy.weaknesses;
let buddyDistKmWeak = allPokemon.filter(weakBuddyFilter)
  function weakBuddyFilter (pokemon) {
    let weaknesesNumber = pokemon.weaknesses;
      if (weaknesesNumber.length == weaknOb.length && pokemon['buddy-distance-km'] == valuesWekBuddy['buddy-distance-km']) {
        return true;
      } else {
      return false;
    }
}*/

//Three conditions (buddy-distacne, weaknesses number and type)
/*let weaknOb = valuesWekBuddy.weaknesses;
let buddyDistKmWeak = allPokemon.filter(weakBuddyFilter)
  function weakBuddyFilter (pokemon) {
    let weaknesesNumber = pokemon.weaknesses;
      if (weaknesesNumber.length == weaknOb.length && pokemon['buddy-distance-km'] == valuesWekBuddy['buddy-distance-km'] && pokemon.type == valuesWekBuddy.type) {
        return true;
      } else {
      return false;
    }
}*/

//console.log(buddyDistKmWeak)


