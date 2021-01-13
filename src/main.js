
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon);
//Se une la función "poke" al botón:
document.getElementById("home-main--button").addEventListener('click', infoPrincPokemon);
//Función "poke"
document.getElementById("main-logo-container").style.display = 'none';
document.getElementById("main-filter-container").style.display = 'none';


let namePokemon = [];
let numberPokemon = [];
let imgPokemon = [];

function infoPrincPokemon () {
    document.getElementById("home-main-section--welcome").style.display = 'none';
    document.getElementById("home-main-section--img").style.display = 'none';
    document.getElementById("main-logo-container").style.display = 'flex';
    document.getElementById("main-filter-container").style.display = 'flex';
    let allPokemon = data.pokemon;
    for (let i = 0; i < allPokemon.length; i++) {
        namePokemon[i] = allPokemon[i].name;
        imgPokemon[i] = allPokemon[i].img;
        numberPokemon[i] = allPokemon[i].num;
        let infoPokeContainer = document.createElement("div");
        let imgPokeContainer = document.createElement("div");
        let buttonPoke = document.createElement("button");
        let linkPoke = document.createElement("a");
        let imgPoke = document.createElement("img");
        let divpPoke = document.createElement("div");
        let pPoke = document.createElement("p");
        let pokeName = document.createTextNode(namePokemon[i] + " ");
        let pokeNum = document.createTextNode(numberPokemon[i]);
        infoPokeContainer.appendChild(imgPokeContainer);
        imgPokeContainer.appendChild(buttonPoke);
        buttonPoke.appendChild(linkPoke);
        linkPoke.appendChild(imgPoke);
        infoPokeContainer.appendChild(divpPoke);
        divpPoke.appendChild(pPoke);
        pPoke.appendChild(pokeName);
        pPoke.appendChild(pokeNum);
        infoPokeContainer.className = 'ind-info-pokemon-container';
        imgPokeContainer.className = 'img-pokemon-container';
        divpPoke.className = 'text-pokemon-container';
        buttonPoke.className = 'button-infoPoke';
        buttonPoke.setAttribute = ('onclick');
        buttonPoke.onclick = function () {infoEachPoke(namePokemon[i]);};
        imgPoke.src = imgPokemon[i];
        document.getElementById("home-pokemon-info-container").appendChild(infoPokeContainer);
        }

        function infoEachPoke (name) {
          console.log(name);
          let index = parseInt(namePokemon.indexOf(name));
          console.log(typeof index);
          /*console.log(allPokemon.name[index]);*/
          let namePoke = allPokemon[index].name;
          let numPoke = allPokemon[index].num;
          let imgPoke = allPokemon[index].img;
          let typePoke = allPokemon[index].type;
          let rarityPoke = allPokemon[index]["pokemon-rarity"];
          ///////Variables para Debilidades
          let resistantPoke = allPokemon[index].resistant;
          console.log(resistantPoke);
          let numberResistantPoke= resistantPoke.length;
          console.log(numberResistantPoke);
          let resistantPokemon = [];
          let pResistant = [];
          let nodeResistant =[];
          ///////Variables para Debilidades
          let weaknessesPoke = allPokemon[index].weaknesses;
          console.log(weaknessesPoke);
          let numberWeaknessesPoke= weaknessesPoke.length;
          console.log(numberWeaknessesPoke);
          let weaknessesPokemon = [];
          let pWeaknesses = [];
          let nodeWeaknesses =[];
          ///////Variables para Peso y Altura
          let sizePoke= allPokemon[index].size; 
          let weightPoke = sizePoke.weight;
          let heightPoke = sizePoke.height;
          
          /////////////////////////////////////////////////////////////////////
          //Ficha Técnica
          document.getElementById("data-sheet-container").style.display = 'block';
          let dataSheet = document.createElement('div');
          dataSheet.className = 'data-sheet';
          dataSheet.id = numPoke;
          
          //Crear elementos Data Sheet Head
          let dataSheetHead = document.createElement('div');
          dataSheetHead.className= 'data-sheet-head';
          let dataSheetImgContainer = document.createElement("div");
          dataSheetImgContainer.className= 'data-sheet-img-container';
          let generalData = document.createElement('div');
          generalData.className = ('general-data');
          let h2PokeName= document.createElement('h2');
          let spaces= document.createElement('br');
          let pPokeNumber= document.createElement('p');
          let pPokeType= document.createElement('p');
          let pPokeRarity= document.createElement('p');

          //Crear elementos Data Sheet Body
          let dataSheetBody =document.createElement('div');
          dataSheetBody.className= 'data-sheet-body';
          //Crear elementos Data Sheet Body Section 1
          let dataSheetBodySection1 = document.createElement('div');
          dataSheetBodySection1.className= 'data-sheet-body-section1';
          let dataSheetResistantContainer = document.createElement('div');
          dataSheetResistantContainer.className= 'data-sheet-resistant-container'
          let h3PokeResistant = document.createElement('h3');  
          let pPokeResistant = document.createElement('p');
          let dataSheetWeaknessesContainer = document.createElement('div');
          dataSheetWeaknessesContainer.className = 'data-sheet-weaknesses-container'
          let h3PokeWeaknesses = document.createElement('h3');  
          let pPokeWeaknesses = document.createElement('p');
          //Crear elementos Data Sheet Body Section 2
          let dataSheetBodySection2 = document.createElement('div');
          dataSheetBodySection2.className= 'data-sheet-body-section2';
          let physicalDataContainer= document.createElement('div');
          physicalDataContainer.className= 'physical-data-container';
          let h4PokeWeight = document.createElement('h4');
          let pPokeWeight= document.createElement('p');
          let h4PokeHeight = document.createElement('h4');
          let pPokeHeight= document.createElement('p');

          //Crear elementos Data Sheet Footer
          let dataSheetFooter = document.createElement('div');
          dataSheetFooter.className= 'data-sheet-footer';
          // crear elementos para el Botón Exit

          let exitContainer = document.createElement('div');
          exitContainer.className = 'exit-container';
          let exitButton = document.createElement('button');
          exitButton.className = 'exit-button';
          let exitIcon = document.createElement('img');
          exitIcon.src = "./assets/iconX.png";
          exitIcon.className= 'exit-icon';

          ////////////////////////////////////////////////////
          //Creación de nodos
          let dataSheetImg = document.createElement('img');
          dataSheetImg.src = imgPoke;
          let dataSheetName = document.createTextNode(namePoke);
          let dataSheetNum = document.createTextNode('No. Pokedex: ' + numPoke);
          let dataSheetType = document.createTextNode('Tipo: ' + typePoke);
          let dataSheetRarity = document.createTextNode('Rareza: ' + rarityPoke);
          let dataSheetResistant = document.createTextNode(resistantPoke);
          let resistantTitle = document.createTextNode('Resistente:');
          let dataSheetWeaknesses = document.createTextNode(weaknessesPoke);
          let weaknessesTitle = document.createTextNode('Debilidades:');
          let weightTitle = document.createTextNode('Peso:');
          let heightTitle = document.createTextNode('Altura:');
          let dataSheetWeight = document.createTextNode(weightPoke);
          let dataSheetHeight = document.createTextNode(heightPoke);
          /////////////////////////////////////////////////
          //AppendChilds Boton X
          dataSheet.appendChild(exitContainer);
          exitContainer.appendChild(exitButton);
          exitButton.className= 'buttonX';
          exitButton.appendChild(exitIcon);
          //AppendChilds Secciones del Data Sheet 
          dataSheet.appendChild(dataSheetHead);
          dataSheet.appendChild(dataSheetBody);
          dataSheet.appendChild(dataSheetFooter);
          //AppendChilds Secciones del Data Sheet Head
          dataSheetHead.appendChild(dataSheetImgContainer);
          dataSheetImgContainer.appendChild(dataSheetImg);
          dataSheetHead.appendChild(generalData);
          generalData.appendChild(h2PokeName);
          h2PokeName.appendChild(dataSheetName);
          generalData.appendChild(spaces);
          generalData.appendChild(pPokeNumber);
          pPokeNumber.appendChild(dataSheetNum);
          generalData.appendChild(pPokeType);
          pPokeType.appendChild(dataSheetType);
          generalData.appendChild(pPokeRarity);
          pPokeRarity.appendChild(dataSheetRarity);
          //AppendChilds Secciones del Data Sheet Body
          dataSheetBody.appendChild(dataSheetBodySection1);
          dataSheetBody.appendChild(dataSheetBodySection2);
          //AppendChilds Secciones del Data Sheet Body Section1
          dataSheetBodySection1.appendChild(dataSheetResistantContainer);
          dataSheetResistantContainer.appendChild(h3PokeResistant);
          dataSheetResistantContainer.appendChild(pPokeResistant);
          h3PokeResistant.appendChild(resistantTitle);
          //pPokeResistant.appendChild(dataSheetResistant);
          for (let i = 0; i < numberResistantPoke; i++){
            resistantPokemon[i]= resistantPoke[i];
            pResistant[i] = document.createElement('p');
            nodeResistant[i] = document.createTextNode(resistantPokemon[i]);
            console.log(resistantPokemon[i]);
            dataSheetResistantContainer.appendChild(pResistant[i]);
            pResistant[i].appendChild(nodeResistant[i]);
          }
          //Debilidades
          dataSheetBodySection1.appendChild(dataSheetWeaknessesContainer);
          dataSheetWeaknessesContainer.appendChild(h3PokeWeaknesses);
          dataSheetWeaknessesContainer.appendChild(pPokeWeaknesses);
          h3PokeWeaknesses.appendChild(weaknessesTitle);
          //pPokeWeaknesses.appendChild(dataSheetWeaknesses);
          for (let i = 0; i < numberWeaknessesPoke; i++){
            weaknessesPokemon[i]= weaknessesPoke[i];
            pWeaknesses[i] = document.createElement('p');
            nodeWeaknesses[i] = document.createTextNode(weaknessesPokemon[i]);
            console.log(weaknessesPokemon[i]);
            dataSheetWeaknessesContainer.appendChild(pWeaknesses[i]);
            pWeaknesses[i].appendChild(nodeWeaknesses[i]);
          }
          //AppendChilds Secciones del Data Sheet Body Section1
          dataSheetBodySection2.appendChild(physicalDataContainer);
          physicalDataContainer.appendChild(h4PokeWeight); 
          h4PokeWeight.appendChild(weightTitle);
          physicalDataContainer.appendChild(pPokeWeight);
          pPokeWeight.appendChild(dataSheetWeight);
          //Altura
          physicalDataContainer.appendChild(h4PokeHeight); 
          h4PokeHeight.appendChild(heightTitle);
          physicalDataContainer.appendChild(pPokeHeight);
          pPokeHeight.appendChild(dataSheetHeight);
          ////////////////////////////////////////////
          //Imprimir Toda La Ficha técnica
          document.getElementById('data-sheet-container').appendChild(dataSheet);

        //////////////////////////////////////////////////////////////////////////////
        // Para borrar la ficha técnica dando click al botón 'Exit'
        let nodoABorrar = document.getElementById(numPoke);
        document.getElementById(numPoke).addEventListener('click', exitDataSheet);

        function exitDataSheet() {
        nodoABorrar.parentNode.removeChild(nodoABorrar);
        document.getElementById("data-sheet-container").style.display = 'none';
        }
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


///////////FiltroDebilidades/////////////////
let filterNumber = 0;
let allPokemon = data.pokemon;
let conjunto=[];
let filtroFinal= [];
let resultFilterWeaknessesNumber=[];

function weaknessesNumberFilterAdd(){
  conjunto[filterNumber] = [];
  let namesToWeaknessesNumber = function(element){
    let memoria= element.weaknesses;
    if(memoria.length== filterNumber){
      let nameWeaknesses= element.name; 
      conjunto[filterNumber].push(nameWeaknesses);
    } 
  }
  allPokemon.forEach(namesToWeaknessesNumber);
  console.log(conjunto[filterNumber]);
  resultFilterWeaknessesNumber = conjunto[filterNumber];
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else{
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
  console.log(filtroFinal);

}

function weaknessesNumberFilterQuit(){
  resultFilterWeaknessesNumber =[];
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
    console.log('no hay ningun filtro');
  } else{
    filtroFinal= resultFilterType; 
  }
    console.log(filtroFinal);
}

  let radioWeaknesses1 = document.getElementById('one');
  let radioWeaknesses2 = document.getElementById('two');
  let radioWeaknesses3 = document.getElementById('three');
  let radioWeaknesses4 = document.getElementById('four');
  let radioWeaknesses5 = document.getElementById('five');
  let radioWeaknesses6 = document.getElementById('six');
  let radioWeaknesses7 = document.getElementById('seven');
  let valorFiltro = 0;

  function checkedChangesRadiosWeaknesses(radioWeaknesses){
    radioWeaknesses.addEventListener('change', e => {
    if(e.target.checked){
      valorFiltro = parseInt(radioWeaknesses.value);
      console.log(valorFiltro);
      filterNumber= valorFiltro; 
    weaknessesNumberFilterAdd();
    }else{
      valorFiltro = parseInt(radioWeaknesses.value);
    console.log(valorFiltro);
    filterNumber= valorFiltro; 
    console.log('borrar');
    weaknessesNumberFilterQuit();
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

/////////////FILTRO POKEMON TYPE//////////////////////////
let namePokePoke = ['w','t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];
let typeDefinition= "grass"; 
let positionArrayType = 7;
let resultFilterType= [];
function pokemonTypeFilterAdd(){
  conjunto[typeDefinition] = [];
  let namesToPokemonType = function(element){
    let memoriaT= element.type;
    for (const value of memoriaT) {
      if(value ==typeDefinition){
        let nameType= element.name;
        conjunto[typeDefinition].push(nameType);
      }
    }
  }
  allPokemon.forEach(namesToPokemonType);
  console.log(conjunto[filterNumber]);

namePokePoke.splice(positionArrayType,1,conjunto[typeDefinition]);
  // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
  let TodosLosNombresJuntos = [];
  for (const value of namePokePoke){
    let posisionValue = namePokePoke.indexOf(value);
    if(value == 'w'){
      //console.log('w'+ iMas1);
    } else if(value == 't' + posisionValue){
      //console.log('t'+ iMenos6);
    } else {
      let arrayN= value;
      //console.log(arrayN);
      for(const value of arrayN){
        let cadaNamePoke= value;
        //console.log(cadaNamePoke);
        TodosLosNombresJuntos.push(cadaNamePoke);
      }

    }
  }
  console.log(namePokePoke);
  console.log(TodosLosNombresJuntos);
  let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
    return TodosLosNombresJuntos.indexOf(item) === index;
  })
  console.log(deleteNamesRepeat);
  resultFilterType= deleteNamesRepeat;
  //AQUI EMPIEZA EL DEBUGGGGGGGG
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else{
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
  console.log(filtroFinal);
}

//pokemonTypeFilter()

function pokemonTypeFilterQuit(){
  let filterTypeNumber= positionArrayType;
  console.log(filterTypeNumber);
  namePokePoke.splice(positionArrayType,1,'t' + filterTypeNumber);
  console.log(namePokePoke); 
  // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
  let TodosLosNombresJuntos = [];
  for (const value of namePokePoke){
    let posisionValue = namePokePoke.indexOf(value);
    if(value == 'w'){
      //console.log('w'+ iMas1);
    } else if(value == 't' + posisionValue){
      //console.log('t'+ iMenos6);
    } else {
      let arrayN= value;
      //console.log(arrayN);
      for(const value of arrayN){
        let cadaNamePoke= value;
        //console.log(cadaNamePoke);
        TodosLosNombresJuntos.push(cadaNamePoke);
      }

    }
  }
  console.log(TodosLosNombresJuntos);

  resultFilterType= TodosLosNombresJuntos;
  //console.log(resultFilterType);
  //AQUÍ EMPIEZA EL DEBUGGGG
  if(resultFilterType.length==0){
    filtroFinal= resultFilterWeaknessesNumber;
  } else if(resultFilterType.length!=0 && resultFilterType.length==0){
    filtroFinal= resultFilterType; 
  } else if(resultFilterType.length!=0 && resultFilterType.length!=0){
    for(const value of resultFilterWeaknessesNumber){
      let namepokeD= value;
      for(const value of resultFilterType){
        if(value == namepokeD){
          filtroFinal.push(value);
        }
      }
    }
  }
    console.log(filtroFinal);
}


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
  if(e.target.checked){
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    console.log(typeDefinition);
    console.log(positionArrayType);
    pokemonTypeFilterAdd();
    
  }else{
    typeDefinition= checkboxTypePokemon.value;
    positionArrayType = positionArrayTypeDefinition;
    console.log(typeDefinition);
    console.log(positionArrayType);
    pokemonTypeFilterQuit();
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