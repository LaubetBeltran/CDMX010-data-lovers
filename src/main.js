import { infoEachPokePrinc, getFunction} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
let allPokemon = data.pokemon;
let nameAllPokemon = [];

const princContainer = document.getElementById('home-pokemon-info-container');
const infoPrincPokemon = document.getElementById("home-main--button");

let infoPrinPoke = "";
infoPrincPokemon.addEventListener("click", function () {
  document.getElementById("home-section-info-container").style.display = 'grid';
  document.getElementById("home-main-section--welcome").style.display = 'none';
  document.getElementById("home-main-section--img").style.display = 'none';
  document.getElementById("main-logo-container").style.display = 'flex';
  document.getElementById("main-filter-container").style.display = 'flex'; 
  for (const pokemon of allPokemon) {
    infoPrinPoke += infoEachPokePrinc(pokemon);
    nameAllPokemon.push(pokemon.name);
  }
  document.getElementById('home-pokemon-info-container').innerHTML = infoPrinPoke;
  allPokemon.forEach ((pokemon) => {
    getFunction(pokemon);
  })
})

document.getElementById('main-errormsg-container').style.display='none';

const searchPoke = document.getElementById("searchByNameButton");
searchPoke.addEventListener("click", function() {
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  if (nameAllPokemon.includes(namePokeToSearch)) {
    document.getElementById('main-errormsg-container').style.display='none';
    let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
    let pokeFoundedInfo = infoEachPokePrinc(pokeFounded);
    princContainer.innerHTML = pokeFoundedInfo;
    let button = document.createElement('button');
    button.className = 'main-search-button-back';
    button.innerText = 'Regresar al Inicio';
    button.setAttribute = ('onclick');
    button.onclick = function () {
    document.getElementById('home-pokemon-info-container').innerHTML = infoPrinPoke
    allPokemon.forEach ((pokemon) => {
      getFunction(pokemon);
    })
  };
    princContainer.appendChild(button);
    getFunction(pokeFounded);
  } else {
    document.getElementById('main-errormsg-container').style.display='flex';
    princContainer.style.display='none';
  }
  });
  document.getElementById('main-errormsg-button-back').addEventListener("click", function() {
  document.getElementById('main-errormsg-container').style.display='none';
  document.getElementById('home-pokemon-info-container').style.display='grid';
})


