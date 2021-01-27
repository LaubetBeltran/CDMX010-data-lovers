import { infoEachPokePrinc, getFunction} from './infoData.js';
import {searchPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';
import{weaknessesNumberFilterAdd, weaknessesNumberFilterQuit, pokemonTypeFilterAdd, pokemonTypeFilterQuit, buddyDistNumberFilterAdd, buddyDistFilterQuit}from'./filtros.js';
import{getObjects}from './getObjects.js';
let allPokemon = data.pokemon;
let nameAllPokemon = [];


const princContainer = document.getElementById('home-pokemon-info-container');
const infoPrincPokemon = document.getElementById("home-main--button");

//CREA LOS CONTENEDORES DE CADA POKEMONE EN LA DATA
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
  allPokemon.map (function (pokemon) {
    getFunction(pokemon);
  })
})

document.getElementById('main-errormsg-container').style.display='none';

//BÚSQUEDA POR NOMBRE
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
    })};
    princContainer.appendChild(button);
    getFunction(pokeFounded);
  } else {
    document.getElementById('main-errormsg-container').style.display='flex';
    princContainer.style.display='none';
  }
  });
    document.getElementById('main-errormsg-button-back').addEventListener("click", function() {
    backToTop();
    document.getElementById('main-errormsg-container').style.display='none';
})

//rEGRESO AL INICIO
function backToTop(){
  //resetear búsqueda y filtros
  document.getElementById("namePokeToSearch").value='';
  finalFilter= nameAllPokemon;
  getObjects(finalFilter);
  document.getElementById('home-pokemon-info-container').style.display='grid';
}

/////////////FILTROS///////////////
//  VARIABLE FINAL DE TODOS LOS FILTROS ///
let finalFilter = nameAllPokemon;
////////CHECKBOXES DESPLEGADOS//////
let expanded = false;
let expanded2 = false;
let expanded3 = false;
function showCheckboxesNumber() {
  let checkboxes = document.getElementById("checkboxesNumber");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    if(expanded2) {
      document.getElementById("selectPokemonType").click();
    } else if (expanded3) {
      document.getElementById("selectBuddyDistance").click();
    }
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

document.getElementById("selectWeaknessesNumber").addEventListener('click', showCheckboxesNumber);

function showCheckboxesType() {
  let checkboxes = document.getElementById("checkboxesType");
  if (!expanded2) {
    checkboxes.style.display = "block";
    expanded2 = true;
    if(expanded){
      document.getElementById("selectWeaknessesNumber").click();
    } else if (expanded3) {
      document.getElementById("selectBuddyDistance").click();
    }
  } else {
      checkboxes.style.display = "none";
      expanded2 = false;
    }
}
document.getElementById("selectPokemonType").addEventListener('click',  showCheckboxesType);

function showCheckboxesBuddy() {
  let checkboxes = document.getElementById("checkboxesBuddyDistance");
  if (!expanded3) {
    checkboxes.style.display = "block";
    expanded3 = true;
    if (expanded) {
      document.getElementById("selectWeaknessesNumber").click();
    } else if (expanded2) {
      document.getElementById("selectPokemonType").click();
    }
  } else {
      checkboxes.style.display = "none";
      expanded3 = false;
    }
}

document.getElementById("selectBuddyDistance").addEventListener('click',  showCheckboxesBuddy);

////////VARIABLES PARA FILTRO DEBILIDADES Y TIPO///////
//let finalFilter = nameAllPokemon;
let valorFiltro = 0;
let filterNumber = 0;
let typeDefinition= "grass";
let positionArrayType = 7;

///////////FILTRO NUM DEBILIDADES/////////////////
let radioWeaknesses1 = document.getElementById('one');
let radioWeaknesses2 = document.getElementById('two');
let radioWeaknesses3 = document.getElementById('three');
let radioWeaknesses4 = document.getElementById('four');
let radioWeaknesses5 = document.getElementById('five');
let radioWeaknesses6 = document.getElementById('six');
let radioWeaknesses7 = document.getElementById('seven');
let radioQuitFilter = document.getElementById('removeFilterLink');
let labelQuitFilter = document.getElementById('removeFilterOption');
labelQuitFilter.style.display= 'none';

function checkedChangesRadiosWeaknesses(radioWeaknesses){
  radioWeaknesses.addEventListener('change', e => {
    if(e.target.checked){
      if(input!=""){
        input.onsearch();
      }
      valorFiltro = parseInt(radioWeaknesses.value);
      filterNumber= valorFiltro;
      finalFilter= weaknessesNumberFilterAdd(filterNumber);
      document.getElementById('removeFilterOption').style.display= 'block';
      getObjects(finalFilter);
      if(finalFilter.length==0){
        alert('oops! No hay pokemones que cumplan con estas características, prueba con otro filtrado');
      }
    }
  });
}
//////////QUITAR FILTRO NUM DEBILIDADES//////////
function removeNumberWeaknesseFilter(){
  radioQuitFilter.addEventListener('change', e => {
    if(e.target.checked){
      finalFilter= weaknessesNumberFilterQuit();
      labelQuitFilter.style.display= 'none';
      getObjects(finalFilter);
    }
  });
}
checkedChangesRadiosWeaknesses(radioWeaknesses1);
checkedChangesRadiosWeaknesses(radioWeaknesses2);
checkedChangesRadiosWeaknesses(radioWeaknesses3);
checkedChangesRadiosWeaknesses(radioWeaknesses4);
checkedChangesRadiosWeaknesses(radioWeaknesses5);
checkedChangesRadiosWeaknesses(radioWeaknesses6);
checkedChangesRadiosWeaknesses(radioWeaknesses7);
removeNumberWeaknesseFilter();

/////////////FILTRO POKEMON TYPE//////////////////////////
let checkboxTypePokemon1 = document.getElementById('planta');
let checkboxTypePokemon2 = document.getElementById('fuego');
let checkboxTypePokemon3 = document.getElementById('agua');
let checkboxTypePokemon4 = document.getElementById('normal');
let checkboxTypePokemon5 = document.getElementById('electrico');
let checkboxTypePokemon6 = document.getElementById('bicho');
let checkboxTypePokemon7 = document.getElementById('volador');
let checkboxTypePokemon8 = document.getElementById('veneno');
let checkboxTypePokemon9 = document.getElementById('roca');
let checkboxTypePokemon10 = document.getElementById('tierra');
let checkboxTypePokemon11 = document.getElementById('fantasma');
let checkboxTypePokemon12 = document.getElementById('psiquico');
let checkboxTypePokemon13 = document.getElementById('acero');
let checkboxTypePokemon14 = document.getElementById('lucha');
let checkboxTypePokemon15 = document.getElementById('hielo');
let checkboxTypePokemon16 = document.getElementById('dragon');
let checkboxTypePokemon17 = document.getElementById('siniestro');
let checkboxTypePokemon18 = document.getElementById('hada');
let positionArrayType1 = 1;
let positionArrayType2 = 2;
let positionArrayType3 = 3;
let positionArrayType4 = 4;
let positionArrayType5 = 5;
let positionArrayType6 = 6;
let positionArrayType7 = 7;
let positionArrayType8 = 8;
let positionArrayType9 = 9;
let positionArrayType10 = 10;
let positionArrayType11 = 11;
let positionArrayType12 = 12;
let positionArrayType13 = 13;
let positionArrayType14 = 14;
let positionArrayType15 = 15;
let positionArrayType16 = 16;
let positionArrayType17 = 17;
let positionArrayType18 = 18;

function checkedChangesCheckboxes(checkboxTypePokemon, positionArrayTypeDefinition){
  checkboxTypePokemon.addEventListener('change', e => {
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    if(e.target.checked){
      if(input!=""){
        input.onsearch();
      }
      finalFilter= pokemonTypeFilterAdd(typeDefinition, positionArrayType);
      getObjects(finalFilter);
      if(finalFilter.length==0){
        alert('oops! No hay pokemones que cumplan con estas características, prueba con otro filtrado');
      }
      document.getElementById("namePokeToSearch").value='';
      } else{ /////QUITAR FILTRO TIPO POKEMON///////////
      finalFilter= pokemonTypeFilterQuit(positionArrayType);
      getObjects(finalFilter);
    }
});
}
checkedChangesCheckboxes(checkboxTypePokemon1, positionArrayType1);
checkedChangesCheckboxes(checkboxTypePokemon2, positionArrayType2);
checkedChangesCheckboxes(checkboxTypePokemon3, positionArrayType3);
checkedChangesCheckboxes(checkboxTypePokemon4, positionArrayType4);
checkedChangesCheckboxes(checkboxTypePokemon5, positionArrayType5);
checkedChangesCheckboxes(checkboxTypePokemon6, positionArrayType6);
checkedChangesCheckboxes(checkboxTypePokemon7, positionArrayType7);
checkedChangesCheckboxes(checkboxTypePokemon8, positionArrayType8);
checkedChangesCheckboxes(checkboxTypePokemon9, positionArrayType9);
checkedChangesCheckboxes(checkboxTypePokemon10, positionArrayType10);
checkedChangesCheckboxes(checkboxTypePokemon11, positionArrayType11);
checkedChangesCheckboxes(checkboxTypePokemon12, positionArrayType12);
checkedChangesCheckboxes(checkboxTypePokemon13, positionArrayType13);
checkedChangesCheckboxes(checkboxTypePokemon14, positionArrayType14);
checkedChangesCheckboxes(checkboxTypePokemon15, positionArrayType15);
checkedChangesCheckboxes(checkboxTypePokemon16, positionArrayType16);
checkedChangesCheckboxes(checkboxTypePokemon17, positionArrayType17);
checkedChangesCheckboxes(checkboxTypePokemon18, positionArrayType18);

/// AL PRESIONAR ENTER EN EL BUSCADOR SE EJECUTA LA FUNCIÓN DEL BOTÓN SEARCH
let input = document.getElementById('namePokeToSearch');
input.addEventListener("keyup", e => {
  if(e.key=='Enter'){
    e.preventDefault();
    document.getElementById("searchByNameButton").click();
  /// AL ESCRIBIR EN EL INPUT SEARCH SE EJECUTA LA FUNCIÓN "REAL TIME SEARCH"
  }else{
    realTimeSearch();
  }
});

//FUNCIÓN "REAL TIME SEARCH"
function realTimeSearch(){
  finalFilter = [];
  let texto = input.value.toLowerCase();
  for( const nombre of nameAllPokemon){
    if(nombre.indexOf(texto)!==-1){
        finalFilter.push(nombre);
      }
    }
  getObjects(finalFilter);
}

// AL PRESIONAR EL BOTON "X" (CLEAR) DEL INPUT SEARCH
input.onsearch= ()=>{
  backToTop();
  document.getElementById('main-errormsg-container').style.display='none';
  document.getElementById('main-searchPoke-container').style.display='none';
}

// UNCHECKED FILTROS PRESENTES AL DAR CLICK AL INPUT SEARCH//
input.addEventListener('click', ()=>{
  if(expanded){
    document.getElementById("selectWeaknessesNumber").click();
  }
  if(expanded2){
    document.getElementById("selectPokemonType").click();
  }
  if(expanded3) {
    document.getElementById("selectBuddyDistance").click();
  }
  if (!radioQuitFilterBuddy.checked) {
    radioQuitFilterBuddy.click();
  }
  if(!radioQuitFilter.checked){
    radioQuitFilter.click();
  }
  function uncheckedCheckboxesFilterType(checkboxTypePokemon){
    if(checkboxTypePokemon.checked){
    checkboxTypePokemon.click();
    }
  }
  uncheckedCheckboxesFilterType(checkboxTypePokemon1);
  uncheckedCheckboxesFilterType(checkboxTypePokemon2);
  uncheckedCheckboxesFilterType(checkboxTypePokemon3);
  uncheckedCheckboxesFilterType(checkboxTypePokemon4);
  uncheckedCheckboxesFilterType(checkboxTypePokemon5);
  uncheckedCheckboxesFilterType(checkboxTypePokemon6);
  uncheckedCheckboxesFilterType(checkboxTypePokemon7);
  uncheckedCheckboxesFilterType(checkboxTypePokemon8);
  uncheckedCheckboxesFilterType(checkboxTypePokemon9);
  uncheckedCheckboxesFilterType(checkboxTypePokemon10);
  uncheckedCheckboxesFilterType(checkboxTypePokemon11);
  uncheckedCheckboxesFilterType(checkboxTypePokemon12);
  uncheckedCheckboxesFilterType(checkboxTypePokemon13);
  uncheckedCheckboxesFilterType(checkboxTypePokemon14);
  uncheckedCheckboxesFilterType(checkboxTypePokemon15);
  uncheckedCheckboxesFilterType(checkboxTypePokemon16);
  uncheckedCheckboxesFilterType(checkboxTypePokemon17);
  uncheckedCheckboxesFilterType(checkboxTypePokemon18);
})


/////FILTRO BUDDY-DISTANCE-KM////
let radioBuddyDistanceKm1 = document.getElementById('onekm');
let radioBuddyDistanceKm3 = document.getElementById('threekm');
let radioBuddyDistanceKm5 = document.getElementById('fivekm');
let radioBuddyDistanceKm20 = document.getElementById('twentykm');
let radioQuitFilterBuddy = document.getElementById('removeFilterLinkBuddy');
let labelQuitFilterBuddy = document.getElementById('removeFilterOptionBuddy');

function checkedChangesRadiosBuddyDist(radioBuddyDist){
  radioBuddyDist.addEventListener('change', e => {
    if(e.target.checked){
      if(input!=""){
        input.onsearch();
      }
      filterNumber= radioBuddyDist.value;
      finalFilter= buddyDistNumberFilterAdd(filterNumber);
      labelQuitFilterBuddy.style.display= 'block';
      getObjects(finalFilter);
      if(finalFilter.length==0){
        alert('oops! No hay pokemones que cumplan con estas características, prueba con otro filtrado');
      }
    }
  });
}

function removeNumberBuddyDisFilter(){
  radioQuitFilterBuddy.addEventListener('change', e => {
    if(e.target.checked){
      finalFilter= buddyDistFilterQuit();
      labelQuitFilterBuddy.style.display= 'none';
      getObjects(finalFilter);
    }
  });
}

checkedChangesRadiosBuddyDist(radioBuddyDistanceKm1);
checkedChangesRadiosBuddyDist(radioBuddyDistanceKm3);
checkedChangesRadiosBuddyDist(radioBuddyDistanceKm5);
checkedChangesRadiosBuddyDist(radioBuddyDistanceKm20);
removeNumberBuddyDisFilter();
labelQuitFilterBuddy.style.display= 'none';

