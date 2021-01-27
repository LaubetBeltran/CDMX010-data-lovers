import data from './data/pokemon/pokemon.js';
let conjunto=[];
let resultFilterWeaknessesNumber=[];
let resultBuddyDistFilter = [];
let namePokePoke = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14','t15','t16','t17','t18'];
let resultFilterType= [];
let typeAndWeak = [];

let allPokemon = data.pokemon;
let nameAllPokemon =[];
function allnames(){
    allPokemon.forEach((pokemon)=>{
        nameAllPokemon.push(pokemon.name);
    })
}
allnames();
export const allNamesPokemon = nameAllPokemon;
let finalFilter= [];
///////////FILTRO NUM DEBILIDADES/////////////////
export const weaknessesNumberFilterAdd = (filterNumber)=>{//, allPokemon, finalFilter) =>{
    conjunto[filterNumber] = [];
    finalFilter= [];
    resultFilterWeaknessesNumber = [];
    let namesToWeaknessesNumber = function(element){
    let memoria= element.weaknesses;
        if(memoria.length== filterNumber){
            let nameWeaknesses= element.name;
            conjunto[filterNumber].push(nameWeaknesses);
        }
    }
    allPokemon.forEach(namesToWeaknessesNumber);
    resultFilterWeaknessesNumber = conjunto[filterNumber];
  ////COMBINANDO FILTROS////
    finalFilter = combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}
//////////QUITAR FILTRO NUM DEBILIDADES//////////
export const weaknessesNumberFilterQuit= ()=>{//(finalFilter, nameAllPokemon) =>{
    resultFilterWeaknessesNumber =[];
    finalFilter= [];
    ////COMBINANDO FILTROS////
    finalFilter = combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}

//////////FILTRO TIPO POKEMON//////////
export const pokemonTypeFilterAdd= (typeDefinition,positionArrayType)=>{ //allPokemon, , finalFilter) =>{
    conjunto[typeDefinition] = [];
    resultFilterType= [];
    finalFilter= [];
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
    //para colocar el arreglo en su posición asignada///
    let positionInarray= positionArrayType -1;
    namePokePoke.splice(positionInarray,1,conjunto[typeDefinition]);
    // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
    let TodosLosNombresJuntos = [];
    for (const value of namePokePoke){
        let positionValue = namePokePoke.indexOf(value);
        let tNumberToArray = positionValue + 1;
        if(value !== 't' + tNumberToArray){
            let arrayN= value;
            for(const value of arrayN){
                let cadaNamePoke= value;
                TodosLosNombresJuntos.push(cadaNamePoke);
            }
        }
    }
    let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
        return TodosLosNombresJuntos.indexOf(item) === index;
    })
    resultFilterType= deleteNamesRepeat;
    ////COMBINANDO FILTROS////
    combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}

//////////QUITAR FILTRO TIPO POKEMON//////////
export const pokemonTypeFilterQuit= (positionArrayType)=>{ //, finalFilter, nameAllPokemon)=>{
    //para retirar el arreglo correspondiente
    let positionInarray= positionArrayType -1;
    namePokePoke.splice(positionInarray,1,'t' + positionArrayType);
    // PARA TENER TODOS LOS NOMBRES DE LOS FILROS EN UN SOLO ARREGLO.
    let TodosLosNombresJuntos = [];
    for (const value of namePokePoke){
        let positionValue = namePokePoke.indexOf(value);
        let tNumberToArray = positionValue + 1;
        if(value !== 't' + tNumberToArray){
            let arrayN= value;
            for(const value of arrayN){
                let cadaNamePoke= value;
                TodosLosNombresJuntos.push(cadaNamePoke);
            }
        }
    }
    let deleteNamesRepeat = TodosLosNombresJuntos.filter((item,index)=>{
        return TodosLosNombresJuntos.indexOf(item) === index;
    })
    resultFilterType= deleteNamesRepeat;
    ////COMBINANDO FILTROS////
    finalFilter = [];
    combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}

///////////FILTRO BUDDY-DISTANCE-KM/////////////////
export const buddyDistNumberFilterAdd = (filterNumber) => {//, allPokemon, finalFilter) =>{
    conjunto[filterNumber] = [];
    resultBuddyDistFilter =[];
    finalFilter= [];
    let objectPokemons = allPokemon.filter(pokemon =>
        pokemon['buddy-distance-km'] === filterNumber);
    objectPokemons.forEach((pokemon) => {
        conjunto[filterNumber].push(pokemon.name);
    })
    resultBuddyDistFilter = conjunto[filterNumber];
    finalFilter = combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}

//////////QUITAR FILTRO BUDDY-DISTANCE-KM//////////
export const buddyDistFilterQuit= ()=>{//(finalFilter, nameAllPokemon) =>{
    resultBuddyDistFilter =[];
    ////MANTENIENDO FILTROS ANTERIORES////
    finalFilter = combineFilters(resultFilterType, resultFilterWeaknessesNumber, resultBuddyDistFilter)
    return finalFilter;
}

export const combineFilters = (typeFilter, weaknessesFilter, buddyDistFilter) =>  {
    finalFilter = [];
    switch(true) {
        //NONE FILTERS
        case (typeFilter.length ==0 && weaknessesFilter.length ==0 && buddyDistFilter.length==0):
            finalFilter= nameAllPokemon;
            break;
        //SOLO BUDDY-DISTANCE
        case (typeFilter.length==0 && weaknessesFilter.length==0 && buddyDistFilter.length !==0):
            finalFilter= resultBuddyDistFilter;
            break;
        //SOLO WEAKNESSES
        case (typeFilter.length==0 && weaknessesFilter.length!==0 && buddyDistFilter.length ==0):
            finalFilter= resultFilterWeaknessesNumber;
            break;
        //SOLO TYPE
        case (typeFilter.length!==0 && weaknessesFilter.length==0 && buddyDistFilter.length==0):
            finalFilter= resultFilterType;
            break;
        //WEAKNESSES Y TYPE
        case (typeFilter.length!==0 && weaknessesFilter.length!==0 && buddyDistFilter.length==0):
            for(const value of weaknessesFilter){
                let nameEachWeakFilter = value;
                for(const value of typeFilter){
                    if(value == nameEachWeakFilter){
                    finalFilter.push(value);
                    }
                }
            }
            break;
        //WEAKNESSES Y BUDDY-DISTANCE
        case (typeFilter.length==0 && weaknessesFilter.length!==0 && buddyDistFilter.length !==0):
            for(const value of weaknessesFilter){
                let nameEachWeaknessesFilter = value;
                for(const value of buddyDistFilter){
                    if(value == nameEachWeaknessesFilter){
                    finalFilter.push(value);
                    }
                }
            }
            break;
        //TYPE AND BUDDY-DISTANCE
        case (typeFilter.length!==0 && weaknessesFilter.length==0 && buddyDistFilter.length !==0):
            for(const value of typeFilter){
                let nameEachTypeFilter = value;
                for(const value of buddyDistFilter){
                    if(value == nameEachTypeFilter){
                    finalFilter.push(value);
                    }
                }
            }
                break;
        //TYPE, WEAKNESSES AND BUDDY-DISTANCE
        case (typeFilter.length!==0 && weaknessesFilter.length!==0 && buddyDistFilter.length !==0):
            typeAndWeak = [];
            for(const value of typeFilter){
                let nameEachTypeFilter = value;
                for(const value of weaknessesFilter){
                    if(value == nameEachTypeFilter){
                        typeAndWeak.push(value);
                    }
                }
            }
            for(const value of typeAndWeak){
                let typeAndWeakEach = value;
                for(const value of buddyDistFilter){
                    if(value == typeAndWeakEach){
                        finalFilter.push(value);
                    }
                }
            }
                break;
    }
    return finalFilter
}


