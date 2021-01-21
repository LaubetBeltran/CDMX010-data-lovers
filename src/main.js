import { infoEachPokePrinc, infoEachPoke} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
let allPokemon = data.pokemon;
let nameAllPokemon = [];

const princContainer = document.getElementById('home-pokemon-info-container');
const infoPrincPokemon = document.getElementById("home-main--button");

infoPrincPokemon.addEventListener("click", function () {
  document.getElementById("home-section-info-container").style.display = 'grid';
  document.getElementById("home-main-section--welcome").style.display = 'none';
  document.getElementById("home-main-section--img").style.display = 'none';
  document.getElementById("main-logo-container").style.display = 'flex';
  document.getElementById("main-filter-container").style.display = 'flex';
  let infoPrinPoke = "";
  allPokemon.forEach((pokemon) => {
    infoPrinPoke += infoEachPokePrinc(pokemon);
    nameAllPokemon.push(pokemon.name);
  })
  princContainer.innerHTML = (infoPrinPoke);
  let elements = document.getElementsByClassName('buttonEachPokeC');
  setFunction(elements);
})

function setFunction (elements) {
  for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',function(){
    infoEachPoke(this);
    });
  }
}

let expanded = false;
function showCheckboxesNumber() {
  let checkboxes = document.getElementById("checkboxesNumber");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

document.getElementById("selectWeaknessesNumber").addEventListener('click', showCheckboxesNumber);

function showCheckboxesType() {
  let checkboxes = document.getElementById("checkboxesType");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
}

document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);

const searchPoke = document.getElementById("searchByNameButton");
const searchContainer = document.getElementById('main-searchPoke-container');
searchPoke.addEventListener("click", function() {
  let namePokeToSearch = document.getElementById("namePokeToSearch").value.toLowerCase();
  princContainer.style.display='none';
  if (nameAllPokemon.includes(namePokeToSearch)) {
    document.getElementById('main-errormsg-container').style.display='none';
    searchContainer.style.display='flex';
    let pokeFounded = searchPokemon(allPokemon, namePokeToSearch);
    let pokeFoundedInfo = infoEachPokePrinc(pokeFounded);
    document.getElementById('main-searchPoke').innerHTML = pokeFoundedInfo;
    let child = searchContainer.getElementsByClassName('buttonEachPokeC');
    setFunction(child);
  } else {
    document.getElementById('main-errormsg-container').style.display='flex';
    searchContainer.style.display='none';
  }
  });


document.getElementById('main-errormsg-button-back').addEventListener("click", function() {
princContainer.style.display='grid'})
document.getElementById('main-search-button-back').addEventListener("click", function() {
princContainer.style.display='grid'})


